import type { NodePlopAPI } from "plop";

import { addExportsToPackageJson } from "@meow-meow-dev/generator/actions";
import { componentPath } from "@meow-meow-dev/generator/helpers";
import * as v from "valibot";

import { standardExport } from "./standardExport.js";

const answersSchema = v.strictObject({ name: v.string() });

export function setupTanstackRouterRoute(plop: NodePlopAPI): void {
  plop.setActionType(
    "tanstack:route:addExportsToPackageJson",
    async (answers, _config, _plop): Promise<string> => {
      const { name } = v.parse(answersSchema, answers);

      return addExportsToPackageJson(standardExport(componentPath(name)));
    },
  );

  plop.setGenerator("tanstack:route", {
    actions: [
      {
        path: "src/{{routePath name}}/index.ts",
        templateFile: "plop-templates/route/index.ts.hbs",
        type: "add",
      },
      {
        path: "src/{{routePath name}}/index.lazy.tsx",
        templateFile: "plop-templates/route/index.lazy.tsx.hbs",
        type: "add",
      },
      {
        type: "tanstack:route:addExportsToPackageJson",
      },
    ],
    description: "Create a route for tanstack router",
    prompts: [
      {
        message: "What is the route path?",
        name: "name",
        type: "input",
        validate: (name): string | true => {
          return /^(?:\.\/)?src\/routes\/.*$/.test(name)
            ? true
            : "Routes names should start with './src/routes/ or 'src/routes/' and contain only letters, ':', '/' and '-'";
        },
      },
    ],
  });
}
