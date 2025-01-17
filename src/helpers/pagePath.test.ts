import { describe, it } from "vitest";

import { pagePath } from "./pagePath.js";

describe("pagePath", () => {
  it("returns correct path for pages", ({ expect }) => {
    expect(pagePath("src/", "EditProfilePage")).toEqual(
      "src/pages/edit_profile",
    );
  });
});
