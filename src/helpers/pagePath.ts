import { snakeCase } from "change-case";

import { pageSuffix } from "./pageSuffix.js";
import { removeTrailingSlash } from "./removeTrailingSlash.js";

export function pagePath(srcPath: string, name: string): string {
  const nameWithoutPageSuffix = name.slice(0, -pageSuffix.length);

  return `${removeTrailingSlash(srcPath)}/pages/${snakeCase(nameWithoutPageSuffix)}`;
}
