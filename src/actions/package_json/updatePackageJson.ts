import { getPackageJson } from "@meow-meow-dev/generator/package_json";
import { exec as execBase } from "node:child_process";
import { writeFileSync } from "node:fs";
import { promisify } from "node:util";

type PackageJson = Record<number | string | symbol, unknown>;

export async function updatePackageJson(
  updater: (packageJson: PackageJson) => PackageJson,
): Promise<void> {
  const { content, fileName } = getPackageJson();

  const updatedPackageJson = updater(content);

  writeFileSync(fileName, JSON.stringify(updatedPackageJson, null, 2), "utf-8");

  const exec = promisify(execBase);
  await exec(`pnpm eslint --fix ${fileName}`);
}
