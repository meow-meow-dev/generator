import type { NodePlopAPI } from "plop";

import { addExportsToPackageJson } from "@meow-meow-dev/generator/actions";
import { componentPath, pageSuffix } from "@meow-meow-dev/generator/helpers";
import { pascalCaseRegexp } from "@meow-meow-dev/generator/validation";
import * as v from "valibot";

import { standardExport } from "./standardExport.js";

const answersSchema = v.strictObject({
  addUnitTest: v.boolean(),
  name: v.string(),
});
type Answers = v.InferOutput<typeof answersSchema>;

export function setupReactComponent(plop: NodePlopAPI): void {
  plop.setActionType(
    "react:component:addExportsToPackageJson",
    async (answers, _config, _plop): Promise<string> => {
      const { name } = v.parse(answersSchema, answers);

      return addExportsToPackageJson(standardExport(componentPath(name)));
    },
  );

  plop.setGenerator("react:component", {
    actions: [
      {
        path: "src/{{componentPath name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component/Component.tsx.hbs",
        type: "add",
      },
      {
        path: "src/{{componentPath name}}/{{pascalCase name}}.test.tsx",
        skip: ({ addUnitTest }: Answers): string | undefined =>
          addUnitTest ? undefined : "Skipped adding unit test",
        templateFile: "plop-templates/component/Component.test.tsx.hbs",
        type: "add",
      },
      {
        path: "src/{{componentPath name}}/index.ts",
        templateFile: "plop-templates/component/index.ts.hbs",
        type: "add",
      },
      {
        type: "react:component:addExportsToPackageJson",
      },
    ],
    description: "Create a component",
    prompts: [
      {
        message: "What is your component name ?",
        name: "name",
        type: "input",
        validate: (name): string | true => {
          if (!pascalCaseRegexp.test(name))
            return "Component name must be in Pascal case";
          else if (name.endsWith(pageSuffix))
            return `Components names can't end with '${pageSuffix}'`;
          else return true;
        },
      },
      {
        message: "Create a unit test ?",
        name: "addUnitTest",
        type: "confirm",
      },
    ],
  });
}
