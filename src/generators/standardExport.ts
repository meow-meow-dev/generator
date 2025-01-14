export function standardExport(path: string): Record<string, string> {
  const key = `./${path}`;
  const value = `./src/${path}/index.ts`;

  return { [key]: value };
}
