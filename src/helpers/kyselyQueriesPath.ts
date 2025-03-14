import { snakeCase } from "change-case";

import { removeTrailingSlash } from "./removeTrailingSlash.js";

export function kyselyQueriesPath(srcPath: string, name: string): string {
  return `${removeTrailingSlash(srcPath)}/queries/${snakeCase(name)}`;
}
