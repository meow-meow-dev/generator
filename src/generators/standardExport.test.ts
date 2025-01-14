import { describe, it } from "vitest";

import { standardExport } from "./standardExport.js";

describe("standardExport", () => {
  it("generates correct export", ({ expect }) => {
    expect(standardExport("client/components/box")).toEqual({
      "./client/components/box": "./src/client/components/box/index.ts",
    });
  });
});
