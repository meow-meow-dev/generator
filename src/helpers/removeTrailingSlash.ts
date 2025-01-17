export function removeTrailingSlash(dir: string): string {
  return dir.endsWith("/") ? dir.slice(0, -1) : dir;
}
