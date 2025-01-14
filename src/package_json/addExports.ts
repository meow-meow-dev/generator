import type { PackageJson } from "./PackageJson.js";

import { addToSection } from "./addToSection.js";

export function addExports(
  packageJson: PackageJson,
  exports: Record<string, unknown>,
): PackageJson {
  return addToSection(packageJson, "exports", exports);
}
