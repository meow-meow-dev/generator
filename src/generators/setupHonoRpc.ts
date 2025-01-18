import type { NodePlopAPI } from "plop";

import {
  addExportsToPackageJson,
  addToIndexTs,
} from "@meow-meow-dev/generator/actions";
import { removeTrailingSlash } from "@meow-meow-dev/generator/helpers";
import { strictLowerCamelCaseRegexp } from "@meow-meow-dev/generator/validation";
import * as v from "valibot";

import { standardExport } from "./standardExport.js";

const answersSchema = v.strictObject({
  errorMessage: v.string(),
  httpMethod: v.string(),
  name: v.string(),
  srcPath: v.string(),
});

export function setupHonoRpc(plop: NodePlopAPI): void {
  function rpcPath(srcPath: string): string {
    return `${removeTrailingSlash(srcPath)}/rpc`;
  }

  plop.setHelper("rpcPath", rpcPath);

  plop.setActionType("hono:rpc:addToIndexTs", (answers): string => {
    const { name, srcPath } = v.parse(answersSchema, answers);

    return addToIndexTs(rpcPath(srcPath), `./${name}.js`);
  });

  plop.setActionType(
    "hono:rpc:addExportsToPackageJson",
    async (answers, _config, _plop): Promise<string> => {
      const { srcPath } = v.parse(answersSchema, answers);

      return addExportsToPackageJson(standardExport(rpcPath(srcPath)));
    },
  );

  plop.setGenerator("hono:rpc", {
    actions: [
      {
        path: "{{ rpcPath srcPath }}/{{ name }}.ts",
        templateFile: "plop-templates/rpc/rpc.ts.hbs",
        type: "add",
      },
      {
        type: "hono:rpc:addToIndexTs",
      },
      {
        type: "hono:rpc:addExportsToPackageJson",
      },
    ],
    description: "Create a hono RPC",
    prompts: [
      {
        message: "What is the function name ?",
        name: "name",
        type: "input",
        validate: (name): string | true => {
          if (strictLowerCamelCaseRegexp.test(name)) return true;
          else return "rpc name must be in strict camel case";
        },
      },
      {
        default: "src/client",
        message: "Where shall we generate the code ?",
        name: "srcPath",
        type: "input",
      },
      {
        choices: [
          {
            name: "GET",
            value: "get",
          },
          {
            name: "POST",
            value: "post",
          },
          {
            name: "PUT",
            value: "put",
          },
          {
            name: "DELETE",
            value: "delete",
          },
        ],
        default: "get",
        message: "What is the HTTP method of the endpoint ?",
        name: "httpMethod",
        type: "list",
      },
      {
        default: "Erreur lors de la requète",
        message: "What is the error message when the RPC invokation fails ?",
        name: "errorMessage",
        type: "input",
      },
    ],
  });
}
