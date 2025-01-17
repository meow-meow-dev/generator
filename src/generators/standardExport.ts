export function standardExport(filePath: string): Record<string, string> {
  const filePathComponents = filePath.split("/");
  const srcIndex = filePathComponents.indexOf("src");
  const pathWithoutSrc = filePathComponents.slice(srcIndex + 1).join("/");
  const key = `./${pathWithoutSrc}`;
  const value = `./${filePath}/index.ts`;

  return { [key]: value };
}
