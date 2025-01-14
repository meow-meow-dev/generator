import { describe, it } from "vitest";

import { strictLowerCamlCaseRegexp } from "./strictLowerCamlCaseRegexp.js";

describe("strictLowerCamlCaseRegexp", () => {
  it("accepts correct camel case strings", ({ expect }) => {
    expect(strictLowerCamlCaseRegexp.test("getEkiStamp")).toBeTruthy();
  });

  it("rejects incorrect camel case strings", ({ expect }) => {
    expect(strictLowerCamlCaseRegexp.test("Button")).toBeFalsy();
  });
});
