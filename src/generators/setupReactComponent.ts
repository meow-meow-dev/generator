import type { NodePlopAPI } from "plop";

import { addExportsToPackageJson } from "@meow-meow-dev/generator/actions";
import { componentPath, pageSuffix } from "@meow-meow-dev/generator/helpers";
import { pascalCaseRegexp } from "@meow-meow-dev/generator/validation";
import * as v from "valibot";

import { standardExport } from "./standardExport.js";

const answersSchema = v.strictObject({
  addPackageJsonExports: v.boolean(),
  addUnitTest: v.boolean(),
  name: v.string(),
  srcPath: v.string(),
});
type Answers = v.InferOutput<typeof answersSchema>;

export function setupReactComponent(plop: NodePlopAPI): void {
  plop.setActionType(
    "react:component:addExportsToPackageJson",
    async (answers, _config, _plop): Promise<string> => {
      const { addPackageJsonExports, name, srcPath } = v.parse(
        answersSchema,
        answers,
      );

      return addPackageJsonExports
        ? addExportsToPackageJson(standardExport(componentPath(srcPath, name)))
        : "Skipped adding exports to package.json";
    },
  );

  plop.setGenerator("react:component", {
    actions: [
      {
        path: "{{componentPath srcPath name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component/Component.tsx.hbs",
        type: "add",
      },
      {
        path: "{{componentPath srcPath name}}/{{pascalCase name}}.test.tsx",
        skip: ({ addUnitTest }: Answers): string | undefined =>
          addUnitTest ? undefined : "Skipped adding unit test",
        templateFile: "plop-templates/component/Component.test.tsx.hbs",
        type: "add",
      },
      {
        path: "{{componentPath srcPath name}}/index.ts",
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
        default: "src/client",
        message: "Where shall we generate the code ?",
        name: "srcPath",
        type: "input",
      },
      {
        default: true,
        message: "Create a unit test ?",
        name: "addUnitTest",
        type: "confirm",
      },
      {
        default: true,
        message: "Add exports to package.json ?",
        name: "addPackageJsonExports",
        type: "confirm",
      },
    ],
  });
}
