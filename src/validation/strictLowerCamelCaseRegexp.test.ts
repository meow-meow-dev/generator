import { describe, it } from "vitest";

import { strictLowerCamelCaseRegexp } from "./strictLowerCamelCaseRegexp.js";

describe("strictLowerCamelCaseRegexp", () => {
  it("accepts correct camel case strings", ({ expect }) => {
    expect(strictLowerCamelCaseRegexp.test("getEkiStamp")).toBeTruthy();
  });

  it("rejects incorrect camel case strings", ({ expect }) => {
    expect(strictLowerCamelCaseRegexp.test("Button")).toBeFalsy();
  });
});
