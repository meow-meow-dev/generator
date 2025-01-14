import { join } from "node:path";

import { appendToFile } from "./appendToFile.js";

export function addToIndexTs(path: string, file: string): string {
  const indexFile = join(path, "index.ts");
  const exportLine = `export * from "${file}";`;

  appendToFile(exportLine, indexFile);

  return `Added export to ${indexFile}`;
}
