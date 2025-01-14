import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { parse } from "node:path";

export function appendToFile(line: string, file: string): void {
  if (!existsSync(file)) {
    const { dir } = parse(file);
    mkdirSync(dir, { recursive: true });
    writeFileSync(file, `${line}\n`);
  } else {
    const content = readFileSync(file, "utf8");
    if (!content.includes(line)) writeFileSync(file, `${content}${line}\n`);
  }
}
