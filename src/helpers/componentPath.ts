import { snakeCase } from "change-case";

export function componentPath(name: string): string {
  return `client/components/${snakeCase(name)}`;
}
