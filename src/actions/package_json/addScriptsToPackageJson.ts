import { addScripts } from "@meow-meow-dev/generator/package_json";

import { updatePackageJson } from "./updatePackageJson.js";

export async function addScriptsToPackageJson(
  scripts: Record<string, unknown>,
): Promise<string> {
  await updatePackageJson((packageJson) => addScripts(packageJson, scripts));

  return `Added scripts ${Object.keys(scripts).join(", ")} to package.json`;
}
