import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: ["src/**/index.ts", "src/**/*.test.ts"],
      include: ["src/**/*.ts"],
      provider: "istanbul",
    },
  },
});
