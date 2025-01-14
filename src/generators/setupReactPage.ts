import type { NodePlopAPI } from "plop";

import { addExportsToPackageJson } from "@meow-meow-dev/generator/actions";
import { pagePath, pageSuffix } from "@meow-meow-dev/generator/helpers";
import { pascalCaseRegexp } from "@meow-meow-dev/generator/validation";
import * as v from "valibot";

import { standardExport } from "./standardExport.js";

const answersSchema = v.strictObject({ name: v.string() });

export function setupReactPage(plop: NodePlopAPI): void {
  plop.setActionType(
    "react:page:addExportsToPackageJson",
    async (answers, _config, _plop): Promise<string> => {
      const { name } = v.parse(answersSchema, answers);

      return addExportsToPackageJson(standardExport(pagePath(name)));
    },
  );

  plop.setGenerator("react:page", {
    actions: [
      {
        path: "src/{{pagePath name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/page/Page.tsx.hbs",
        type: "add",
      },
      {
        path: "src/{{pagePath name}}/index.ts",
        templateFile: "plop-templates/page/index.ts.hbs",
        type: "add",
      },
      {
        type: "react:page:addExportsToPackageJson",
      },
    ],
    description: "Create a page",
    prompts: [
      {
        message: "What is your page name ?",
        name: "name",
        type: "input",
        validate: (name): string | true => {
          if (!pascalCaseRegexp.test(name))
            return "Page name must be in Pascal case";
          else if (!name.endsWith(pageSuffix))
            return `Page name must end with '${pageSuffix}'`;
          else return true;
        },
      },
    ],
  });
}
