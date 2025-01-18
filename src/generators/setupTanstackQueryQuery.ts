import type { NodePlopAPI } from "plop";

import {
  addExportsToPackageJson,
  addToIndexTs,
} from "@meow-meow-dev/generator/actions";
import { removeTrailingSlash } from "@meow-meow-dev/generator/helpers";
import { getPackageJsonName } from "@meow-meow-dev/generator/package_json";
import { strictLowerCamelCaseRegexp } from "@meow-meow-dev/generator/validation";
import * as v from "valibot";

import { standardExport } from "./standardExport.js";

const answersSchema = v.strictObject({
  name: v.string(),
  srcPath: v.string(),
});

export function setupTanstackQueryQuery(plop: NodePlopAPI): void {
  function queriesPath(srcPath: string): string {
    return `${removeTrailingSlash(srcPath)}/tanstack/query/queries`;
  }

  plop.setHelper("queriesPath", queriesPath);

  plop.setActionType("tanstack:query:addToIndexTs", (answers): string => {
    const { name, srcPath } = v.parse(answersSchema, answers);

    return addToIndexTs(queriesPath(srcPath), `./${name}Query.js`);
  });

  plop.setActionType(
    "tanstack:query:addExportsToPackageJson",
    async (answers, _config, _plop): Promise<string> => {
      const { srcPath } = v.parse(answersSchema, answers);

      return addExportsToPackageJson(standardExport(queriesPath(srcPath)));
    },
  );

  plop.setGenerator("tanstack:query", {
    actions: [
      {
        data: {
          projectName: getPackageJsonName(),
        },
        path: "{{ queriesPath srcPath }}/{{ name }}Query.ts",
        templateFile: "plop-templates/query/query.ts.hbs",
        type: "add",
      },
      {
        type: "tanstack:query:addToIndexTs",
      },
      {
        type: "tanstack:query:addExportsToPackageJson",
      },
    ],
    description: "Create a query for tanstack query",
    prompts: [
      {
        message: "What is the query name ?",
        name: "name",
        type: "input",
        validate: (name: string): string | true => {
          if (strictLowerCamelCaseRegexp.test(name)) return true;
          else if (name.endsWith("Query"))
            return "Query name shall not end with 'Query'";
          else return "Query name must be in strict camel case";
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
