import type { NodePlopAPI } from "plop";

import { addToIndexTs } from "@meow-meow-dev/generator/actions";
import { strictLowerCamelCaseRegexp } from "@meow-meow-dev/generator/validation";
import * as v from "valibot";

const answersSchema = v.strictObject({
  errorMessage: v.string(),
  httpMethod: v.string(),
  rpcName: v.string(),
});

export function setupHonoRpc(plop: NodePlopAPI): void {
  plop.setActionType("hono:rpc:addToIndexTs", (answers): string => {
    const { rpcName } = v.parse(answersSchema, answers);

    return addToIndexTs("src/client/rpc", `./${rpcName}.js`);
  });

  plop.setGenerator("hono:rpc", {
    actions: [
      {
        path: "src/client/rpc/{{rpcName}}.ts",
        templateFile: "plop-templates/rpc/rpc.ts.hbs",
        type: "add",
      },
      {
        type: "hono:rpc:addToIndexTs",
      },
    ],
    description: "Create a hono RPC",
    prompts: [
      {
        message: "What is the function name ?",
        name: "rpcName",
        type: "input",
        validate: (rpcName): string | true => {
          if (strictLowerCamelCaseRegexp.test(rpcName)) return true;
          else return "rpc name must be in strict camel case";
        },
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
