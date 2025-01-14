import { describe, it } from "vitest";

import { pascalCaseRegexp } from "./pascalCaseRegexp.js";

describe("pascalCaseRegexp", () => {
  it("accepts correct Pascal case strings", ({ expect }) => {
    expect(pascalCaseRegexp.test("Button")).toBeTruthy();
  });

  it("rejects incorrect Pascal case strings", ({ expect }) => {
    expect(pascalCaseRegexp.test("getEkiStamp")).toBeFalsy();
  });
});
