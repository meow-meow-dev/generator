import { describe, it } from "vitest";

import { pagePath } from "./pagePath.js";

describe("pagePath", () => {
  it("returns correct path for pages", ({ expect }) => {
    expect(pagePath("EditProfilePage")).toEqual("client/pages/edit_profile");
  });
});
