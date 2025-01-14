import { getPackageJson } from "./getPackageJson.js";

export function getPackageJsonName(): string {
  const { content, fileName } = getPackageJson();

  const name = content.name;
  if (typeof name === "string") return name;

  throw new Error(
    `Unable to determine package name from package.json as '${fileName}'`,
  );
}
