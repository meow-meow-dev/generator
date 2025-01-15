import type { NodePlopAPI } from "plop";

import { addToIndexTs } from "@meow-meow-dev/generator/actions";
import { getPackageJsonName } from "@meow-meow-dev/generator/package_json";
import { strictLowerCamelCaseRegexp } from "@meow-meow-dev/generator/validation";
import * as v from "valibot";

const answersSchema = v.strictObject({ rpcName: v.string() });

export function setupTanstackQueryQuery(plop: NodePlopAPI): void {
  plop.setActionType("tanstack:query:addToIndexTs", (answers): string => {
    const { rpcName } = v.parse(answersSchema, answers);

    return addToIndexTs(
      "src/client/tanstack/query/queries",
      `./${rpcName}Query.js`,
    );
  });

  plop.setGenerator("tanstack:query", {
    actions: [
      {
        data: {
          projectName: getPackageJsonName(),
        },
        path: "src/client/tanstack/query/queries/{{rpcName}}Query.ts",
        templateFile: "plop-templates/query/query.ts.hbs",
        type: "add",
      },
      {
        type: "tanstack:query:addToIndexTs",
      },
    ],
    description: "Create a query for tanstack query",
    prompts: [
      {
        message: "What is the RPC name ?",
        name: "rpcName",
        type: "input",
        validate: (rpcName): string | true => {
          if (strictLowerCamelCaseRegexp.test(rpcName)) return true;
          else return "RPC name must be in strict camel case";
        },
      },
    ],
  });
}
