import { describe, it } from "vitest";

import { componentPath } from "./componentPath.js";

describe("componentPath", () => {
  it("returns correct path for components", ({ expect }) => {
    expect(componentPath("Box")).toEqual("client/components/box");
  });
});
