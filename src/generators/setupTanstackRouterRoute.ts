import type { NodePlopAPI } from "plop";

import { getPackageJsonName } from "@meow-meow-dev/generator/package_json";

export function setupTanstackRouterRoute(plop: NodePlopAPI): void {
  plop.setGenerator("tanstack:route", {
    actions: [
      {
        data: {
          projectName: getPackageJsonName(),
        },
        path: "{{ removeTrailingSlash name }}/index.ts",
        templateFile: "plop-templates/route/index.ts.hbs",
        type: "add",
      },
      {
        data: {
          projectName: getPackageJsonName(),
        },
        path: "{{ removeTrailingSlash name }}/index.lazy.tsx",
        templateFile: "plop-templates/route/index.lazy.tsx.hbs",
        type: "add",
      },
    ],
    description: "Create a route for tanstack router",
    prompts: [
      {
        message: "What is the route path?",
        name: "name",
        type: "input",
        validate: (name): string | true => {
          return /^(?:\.\/)?src\/.*$/.test(name)
            ? true
            : "Routes names should start with './src/ or 'src/' and contain only letters, ':', '/' and '-'";
        },
      },
    ],
  });
}
