import { snakeCase } from "change-case";

import { pageSuffix } from "./pageSuffix.js";

export function pagePath(name: string): string {
  const nameWithoutPageSuffix = name.slice(0, -pageSuffix.length);

  return `client/pages/${snakeCase(nameWithoutPageSuffix)}`;
}
