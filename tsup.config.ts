import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["./src/index.js", "./src/plopfile.ts"],
  format: "esm",
  outExtension() {
    return {
      js: `.mjs`,
    };
  },
  publicDir: "./public",
  sourcemap: false,
  splitting: false,
  target: "node22",
});
