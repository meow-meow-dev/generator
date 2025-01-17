import { describe, it } from "vitest";

import { componentPath } from "./componentPath.js";

describe("componentPath", () => {
  it("returns correct path for components", ({ expect }) => {
    expect(componentPath("src/client", "Box")).toEqual(
      "src/client/components/box",
    );
  });
});
