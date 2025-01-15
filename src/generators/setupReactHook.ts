import type { NodePlopAPI } from "plop";

import { addExportsToPackageJson } from "@meow-meow-dev/generator/actions";
import { hookPath } from "@meow-meow-dev/generator/helpers";
import { strictLowerCamelCaseRegexp } from "@meow-meow-dev/generator/validation";
import * as v from "valibot";

import { standardExport } from "./standardExport.js";

const answersSchema = v.strictObject({
  declareProps: v.boolean(),
  declareReturn: v.boolean(),
  name: v.string(),
});

export function setupReactHook(plop: NodePlopAPI): void {
  plop.setActionType(
    "react:hook:addExportsToPackageJson",
    async (answers, _config, _plop): Promise<string> => {
      const { name } = v.parse(answersSchema, answers);

      return addExportsToPackageJson(standardExport(hookPath(name)));
    },
  );

  plop.setGenerator("react:hook", {
    actions: [
      {
        path: "src/{{hookPath name}}/{{name}}.ts",
        templateFile: "plop-templates/hook/useHook.ts.hbs",
        type: "add",
      },
      {
        path: "src/{{hookPath name}}/index.ts",
        templateFile: "plop-templates/hook/index.ts.hbs",
        type: "add",
      },
      {
        type: "react:hook:addExportsToPackageJson",
      },
    ],
    description: "Create a react hook",
    prompts: [
      {
        message: "What is your component name ?",
        name: "name",
        type: "input",
        validate: (name): string | true => {
          if (!strictLowerCamelCaseRegexp.test(name))
            return "Hook name must be in camel case";
          else if (!name.startsWith("use"))
            return "Hook name must start with 'use'";
          else return true;
        },
      },
      {
        default: true,
        message: "Declare Props type ?",
        name: "declareProps",
        type: "confirm",
      },
      {
        default: true,
        message: "Declare Return type ?",
        name: "declareReturn",
        type: "confirm",
      },
    ],
  });
}
