import { describe, it } from "vitest";

import { routePath } from "./routePath.js";

describe("routePath", () => {
  it("returns correct path for routes", ({ expect }) => {
    expect(routePath("./src/routes/my-account/stamps")).toEqual(
      "client/routes/my_account/stamps",
    );

    expect(routePath("./src/routes/my-account/stamps/")).toEqual(
      "client/routes/my_account/stamps",
    );

    expect(routePath("src/routes/my-account/stamps")).toEqual(
      "client/routes/my_account/stamps",
    );

    expect(routePath("src/routes/my-account/stamps/")).toEqual(
      "client/routes/my_account/stamps",
    );
  });
});
