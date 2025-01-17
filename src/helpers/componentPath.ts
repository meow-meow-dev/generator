import { snakeCase } from "change-case";

import { removeTrailingSlash } from "./removeTrailingSlash.js";

export function componentPath(srcPath: string, name: string): string {
  return `${removeTrailingSlash(srcPath)}/components/${snakeCase(name)}`;
}
