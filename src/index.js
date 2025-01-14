#!/usr/bin/env node

import findPackageJson from "find-package-json";
import minimist from "minimist";
import path, { parse } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Plop, run } from "plop";

const args = process.argv.slice(2);
const argv = minimist(args);

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);
const finder = findPackageJson(__dirname);
const packageJsonFile = finder.next().filename;
if (!packageJsonFile) throw new Error("Unable to locate package.json");

const packageJsonPath = parse(packageJsonFile).dir;

Plop.prepare(
  {
    completion: argv.completion,
    configPath: path.join(__dirname, "plopfile.mjs"),
    cwd: argv.cwd,
    preload: argv.preload || [],
  },
  (env) =>
    Plop.execute(env, (env) => {
      const options = {
        ...env,
        dest: packageJsonPath,
      };
      return run(options, undefined, true);
    }),
);
