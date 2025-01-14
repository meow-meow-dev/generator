import { describe, it } from "vitest";

import type { PackageJson } from "./PackageJson.js";

import { addToSection } from "./addToSection.js";

describe("addtoSection", () => {
  it("creates the section if it doesn't exist", ({ expect }) => {
    const packageJson: PackageJson = { name: "my-package" };
    const scripts = { script1: "blah", script2: "more blah" };

    expect(addToSection(packageJson, "scripts", scripts)).toEqual({
      ...packageJson,
      scripts,
    });
  });
});
