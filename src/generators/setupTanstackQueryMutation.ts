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
  queryName: v.string(),
  srcPath: v.string(),
});

export function setupTanstackQueryMutation(plop: NodePlopAPI): void {
  function mutationsPath(srcPath: string): string {
    return `${removeTrailingSlash(srcPath)}/tanstack/query/mutations`;
  }

  plop.setHelper("mutationsPath", mutationsPath);

  plop.setActionType("tanstack:mutation:addToIndexTs", (answers): string => {
    const { queryName, srcPath } = v.parse(answersSchema, answers);
    const pascalCase = plop.getHelper("pascalCase");

    return addToIndexTs(
      mutationsPath(srcPath),
      `./use${pascalCase(queryName) as string}Mutation.js`,
    );
  });

  plop.setActionType(
    "tanstack:mutation:addExportsToPackageJson",
    async (answers, _config, _plop): Promise<string> => {
      const { srcPath } = v.parse(answersSchema, answers);

      return addExportsToPackageJson(standardExport(mutationsPath(srcPath)));
    },
  );

  plop.setGenerator("tanstack:mutation", {
    actions: [
      {
        data: {
          projectName: getPackageJsonName(),
        },
        path: "{{ mutationsPath srcPath }}/use{{ pascalCase queryName }}Mutation.ts",
        templateFile: "plop-templates/mutation/useMutation.ts.hbs",
        type: "add",
      },
      {
        type: "tanstack:mutation:addToIndexTs",
      },
      {
        type: "tanstack:mutation:addExportsToPackageJson",
      },
    ],
    description: "Create a mutation for tanstack query",
    prompts: [
      {
        message: "Which query is the mutation based on ?",
        name: "queryName",
        type: "input",
        validate: (queryName: string): string | true => {
          if (strictLowerCamelCaseRegexp.test(queryName)) return true;
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
