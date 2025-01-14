import { snakeCase } from "change-case";

import { extractRoute } from "./extractRoute.js";

export function routePath(name: string): string {
  const route = extractRoute(name);

  return `client/routes/${route
    .split("/")
    .map((routePart) => snakeCase(routePart))
    .join("/")}`;
}
