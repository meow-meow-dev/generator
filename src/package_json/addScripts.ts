import type { PackageJson } from "./PackageJson.js";

import { addToSection } from "./addToSection.js";

export function addScripts(
  packageJson: PackageJson,
  values: Record<string, unknown>,
): PackageJson {
  return addToSection(packageJson, "scripts", values);
}
