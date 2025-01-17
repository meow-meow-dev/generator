import { addTrailingSlash } from "./addTrailingSlash.js";

export function extractRoute(name: string): {
  routePath: string;
  srcPath: string;
} {
  const splitPath = name.split("/");
  const routesIndex = splitPath.indexOf("routes");
  if (routesIndex == -1) throw new Error("routesIndex === -1");

  const srcPath = splitPath.slice(0, routesIndex + 1).join("/");
  const routePath = addTrailingSlash(
    splitPath.slice(routesIndex + 1).join("/"),
  );

  return { routePath, srcPath };
}
