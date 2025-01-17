import type { NodePlopAPI } from "plop";

import { addToIndexTs } from "@meow-meow-dev/generator/actions";
import { getPackageJsonName } from "@meow-meow-dev/generator/package_json";
import { strictLowerCamlCaseRegexp } from "@meow-meow-dev/generator/validation";
import * as v from "valibot";

const answersSchema = v.strictObject({
  name: v.string(),
  srcPath: v.string(),
});

export function setupTanstackQueryQuery(plop: NodePlopAPI): void {
  plop.setActionType("tanstack:query:addToIndexTs", (answers): string => {
    const { name } = v.parse(answersSchema, answers);

    return addToIndexTs(
      "src/client/tanstack/query/queries",
      `./${name}Query.js`,
    );
  });

  plop.setGenerator("tanstack:query", {
    actions: [
      {
        data: {
          projectName: getPackageJsonName(),
        },
        path: "{{ removeTrailingSlash srcPath }}/tanstack/query/queries/{{ name }}Query.ts",
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
        name: "name",
        type: "input",
        validate: (name): string | true => {
          if (strictLowerCamlCaseRegexp.test(name)) return true;
          else return "RPC name must be in strict camel case";
        },
      },
      {
        default: "src/client",
        message: "Where shall we generate the code ?",
        name: "srcPath",
        type: "input",
      },
    ],
  });
}
