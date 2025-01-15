import { snakeCase } from "change-case";

export function hookPath(name: string): string {
  return `client/hooks/${snakeCase(name)}`;
}
