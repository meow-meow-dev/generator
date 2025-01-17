export function addTrailingSlash(dir: string): string {
  return dir.endsWith("/") ? dir : `${dir}/`;
}
