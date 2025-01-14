import type { NodePlopAPI } from "plop";

import { appendToFile } from "@meow-meow-dev/generator/actions";
import * as v from "valibot";

const jsDomKey = "jsDom";
const mantineMocksKey = "mantineMocks";
const setupsKey = "setups";
const generateVitestConfigKey = "generateVitestConfig";

const answersSchema = v.strictObject({
  [generateVitestConfigKey]: v.boolean(),
  [setupsKey]: v.array(
    v.union([v.literal(jsDomKey), v.literal(mantineMocksKey)]),
  ),
});

type Answers = v.InferOutput<typeof answersSchema>;

export function setupConfigVitestReactClient(plop: NodePlopAPI): void {
  plop.setActionType(
    "config:vitest.reactClient:addToSetupTs",
    (answers, _config, _plop): string => {
      const { setups } = v.parse(answersSchema, answers);

      const indexFile = "./src/client/test/setup/index.ts";

      for (const key of setups) appendToFile(buildExport(key), indexFile);

      return `Added exports to ${indexFile}`;
    },
  );

  plop.setGenerator("config:vitest.reactClient", {
    actions: [
      {
        force: true,
        path: "./vitest.config.client.ts",
        skip: ({ generateVitestConfig }: Answers): string | undefined =>
          generateVitestConfig
            ? undefined
            : "Skipped generating vitest.config.client.ts",
        templateFile:
          "plop-templates/config/vitest/react_client/vitest.config.client.ts.hbs",
        type: "add",
      },
      {
        force: true,
        path: "src/client/test/setup/jestDom.ts",
        skip: ({ setups }: Answers): string | undefined =>
          setups.includes(jsDomKey) ? undefined : "Skipped adding jsDom",
        templateFile:
          "plop-templates/config/vitest/react_client/jestDom.ts.hbs",
        type: "add",
      },
      {
        force: true,
        path: "src/client/test/setup/mantineMocks.ts",
        skip: ({ setups }: Answers): string | undefined =>
          setups.includes(mantineMocksKey)
            ? undefined
            : "Skipped adding Mantine mocks",

        templateFile:
          "plop-templates/config/vitest/react_client/mantineMocks.ts.hbs",
        type: "add",
      },
      {
        type: "config:vitest.reactClient:addToSetupTs",
      },
    ],
    description: "Create vitest configuration files for a react client",
    prompts: [
      {
        message:
          "Should we generate a configuration file for vitest ? This will overwrite the current file if it exists",
        name: "generateVitestConfig",
        type: "confirm",
      },
      {
        choices: [
          { checked: true, name: "JSDom", value: jsDomKey },
          { checked: true, name: "Mantine mocks", value: mantineMocksKey },
        ],
        default: ["addJsDom", "addMantine"],
        message:
          "Which setups should we add ? Existing files will be overwritten",
        name: setupsKey,
        type: "checkbox",
      },
    ],
  });
}

function buildExport(key: string): string {
  return `export * from "./${key}.js\";`;
}
