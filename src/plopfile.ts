import type { NodePlopAPI } from "plop";

import {
  setupConfigLingui,
  setupHonoRpc,
  setupReactComponent,
  setupReactHook,
  setupReactPage,
  setupTanstackQueryQuery,
  setupTanstackRouterRoute,
} from "@meow-meow-dev/generator/generators";
import {
  componentPath,
  extractRoute,
  hookPath,
  pagePath,
  removeTrailingSlash,
} from "@meow-meow-dev/generator/helpers";

function toString(value: string): string {
  return `"${value}"`;
}

// eslint-disable-next-line import/no-default-export
export default function (plop: NodePlopAPI): void {
  plop.setHelper("toString", toString);

  plop.setHelper("removeTrailingSlash", removeTrailingSlash);

  plop.setHelper(
    "toArray",
    (value: string[]) =>
      `[${value.map((value) => toString(value)).join(", ")}]`,
  );

  plop.setHelper("append", (array: string[], value: string) => [
    ...array,
    value,
  ]);

  plop.setHelper("split", (value: string) => value.split(" "));

  plop.setHelper(
    "extractRoute",
    (route: string) => extractRoute(route).routePath,
  );

  plop.setHelper("hookPath", hookPath);

  plop.setHelper("componentPath", componentPath);

  plop.setHelper("pagePath", pagePath);

  setupConfigLingui(plop);
  setupHonoRpc(plop);
  setupReactComponent(plop);
  setupReactHook(plop);
  setupReactPage(plop);
  setupTanstackQueryQuery(plop);
  setupTanstackRouterRoute(plop);
}
