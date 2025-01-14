import type { PackageJson } from "./PackageJson.js";

export function addToSection(
  packageJson: PackageJson,
  section: string,
  values: Record<string, unknown>,
): PackageJson {
  const currentSection =
    section in packageJson && typeof packageJson[section] === "object"
      ? packageJson[section]
      : {};

  return {
    ...packageJson,
    [section]: {
      ...currentSection,
      ...values,
    },
  };
}
