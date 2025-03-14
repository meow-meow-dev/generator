import type { NodePlopAPI } from "plop";

import { addExportsToPackageJson } from "@meow-meow-dev/generator/actions";
import { kyselyQueriesPath } from "@meow-meow-dev/generator/helpers";
import { pascalCaseRegexp } from "@meow-meow-dev/generator/validation";
import { camelCase } from "change-case";
import * as v from "valibot";

import { standardExport } from "./standardExport.js";

const answersSchema = v.strictObject({
  addPackageJsonExports: v.boolean(),
  name: v.string(),
  pluralName: v.string(),
  srcPath: v.string(),
});

export function setupKyselyQueries(plop: NodePlopAPI): void {
  plop.setActionType(
    "kysely:queries:addExportsToPackageJson",
    async (answers, _config, _plop): Promise<string> => {
      const { addPackageJsonExports, name, srcPath } = v.parse(
        answersSchema,
        answers,
      );

      return addPackageJsonExports
        ? addExportsToPackageJson(
            standardExport(kyselyQueriesPath(srcPath, name)),
          )
        : "Skipped adding exports to package.json";
    },
  );

  plop.setGenerator("kysely:queries", {
    actions: [
      {
        path: "{{ kyselyQueriesPath srcPath name }}/create{{ name }}.ts",
        templateFile: "plop-templates/kysely_queries/create.ts.hbs",
        type: "add",
      },
      {
        path: "{{ kyselyQueriesPath srcPath name }}/delete{{ name }}.ts",
        templateFile: "plop-templates/kysely_queries/delete.ts.hbs",
        type: "add",
      },
      {
        path: "{{ kyselyQueriesPath srcPath name }}/get{{ name }}.ts",
        templateFile: "plop-templates/kysely_queries/get.ts.hbs",
        type: "add",
      },
      {
        path: "{{ kyselyQueriesPath srcPath name }}/list{{ pluralName }}.ts",
        templateFile: "plop-templates/kysely_queries/list.ts.hbs",
        type: "add",
      },
      {
        path: "{{ kyselyQueriesPath srcPath name }}/update{{ name }}.ts",
        templateFile: "plop-templates/kysely_queries/update.ts.hbs",
        type: "add",
      },
      {
        path: "{{kyselyQueriesPath srcPath name}}/index.ts",
        templateFile: "plop-templates/kysely_queries/index.ts.hbs",
        type: "add",
      },
      {
        type: "kysely:queries:addExportsToPackageJson",
      },
    ],
    description: "Create a set of Kysely queries",
    prompts: [
      {
        message: 'What is the loaded class name (e.g. "User") ?',
        name: "name",
        type: "input",
        validate: (name): string | true => {
          if (!pascalCaseRegexp.test(name))
            return "Class name must be in Pascal case";
          else return true;
        },
      },
      {
        default: ({ name }: { name: string }): string => `${name}s`,
        message: 'What is the plural of this class name (e.g. "Users") ?',
        name: "pluralName",
        type: "input",
        validate: (pluralName): string | true => {
          if (!pascalCaseRegexp.test(pluralName))
            return "Plural class name must be in Pascal case";
          else return true;
        },
      },
      {
        default: ({ name }: { name: string }): string => camelCase(name),
        message: 'What is the table name (e.g. "user") ?',
        name: "tableName",
        type: "input",
      },
      {
        default: "src/server/queries",
        message: "Where shall we generate the code ?",
        name: "srcPath",
        type: "input",
      },
      {
        default: false,
        message: "Add exports to package.json ?",
        name: "addPackageJsonExports",
        type: "confirm",
      },
    ],
  });
}
