import findPackageJson from "find-package-json";
import { readFileSync } from "node:fs";

export function getPackageJson(): {
  content: Record<number | string | symbol, unknown>;
  fileName: string;
} {
  const finder = findPackageJson();
  const fileName = finder.next().filename;
  if (!fileName) throw new Error("Unable to locate package.json");

  const content = JSON.parse(readFileSync(fileName, "utf-8"));
  if (typeof content !== "object")
    throw new Error("Unable to read package.json");

  return { content, fileName };
}
