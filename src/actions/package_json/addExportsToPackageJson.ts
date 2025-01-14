import { addExports } from "@meow-meow-dev/generator/package_json";

import { updatePackageJson } from "./updatePackageJson.js";

export async function addExportsToPackageJson(
  exports: Record<string, unknown>,
): Promise<string> {
  await updatePackageJson((packageJson) => addExports(packageJson, exports));

  return `Added exports ${Object.keys(exports).join(", ")} to package.json`;
}
