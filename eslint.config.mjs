import { defineConfig } from "@meow-meow-dev/shared-configs/eslint";

export default defineConfig({
  ignores: [".tsup"],
  packageName: "@meow-meow-dev/server-utilities",
  tsconfigRootDir: import.meta.dirname,
});
