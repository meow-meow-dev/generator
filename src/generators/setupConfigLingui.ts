import type { NodePlopAPI } from "plop";

import {
  addExportsToPackageJson,
  addScriptsToPackageJson,
} from "@meow-meow-dev/generator/actions";
import * as v from "valibot";

const answersSchema = v.strictObject({
  addExports: v.boolean(),
  addScripts: v.boolean(),
  locales: v.string(),
  sourceLocale: v.string(),
});

export function setupConfigLingui(plop: NodePlopAPI): void {
  plop.setActionType(
    "config:lingui:addExportsToPackageJson",
    async (answers, _config, _plop): Promise<string> => {
      const { addExports, locales, sourceLocale } = v.parse(
        answersSchema,
        answers,
      );

      if (addExports) {
        const allLocales = [...locales.split(" "), sourceLocale];

        const exports = Object.fromEntries(
          allLocales.map((locale) => [
            `./client/locales/${locale}`,
            `./src/client/locales/${locale}/messages.ts`,
          ]),
        );
        return addExportsToPackageJson(exports);
      } else {
        return "Skipped adding exports to package.json";
      }
    },
  );

  plop.setActionType(
    "config:lingui:addScriptsToPackageJson",
    async (answers, _config, _plop): Promise<string> => {
      const { addScripts } = v.parse(answersSchema, answers);

      if (addScripts)
        return addScriptsToPackageJson({
          "lingui:compile": "lingui compile --typescript",
          "lingui:extract": "lingui extract",
        });
      else return "Skipped adding scripts to package.json";
    },
  );

  plop.setGenerator("config:lingui", {
    actions: [
      {
        path: "src/client/lingui.config.ts",
        templateFile: "plop-templates/config/lingui.config.ts.hbs",
        type: "add",
      },
      {
        type: "config:lingui:addExportsToPackageJson",
      },
      {
        type: "config:lingui:addScriptsToPackageJson",
      },
    ],
    description: "Create a configuration file for lingui",
    prompts: [
      {
        default: "en",
        message: "What is the source locale ?",
        name: "sourceLocale",
        type: "input",
      },
      {
        default: "fr",
        message: "What are the other locales ? (space-separated)",
        name: "locales",
        type: "input",
      },
      {
        default: true,
        message: "Add locales exports to package.json ?",
        name: "addExports",
        type: "confirm",
      },
      {
        default: true,
        message: "Add lingui scripts to package.json ?",
        name: "addScripts",
        type: "confirm",
      },
    ],
  });
}
