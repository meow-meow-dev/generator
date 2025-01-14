export function extractRoute(name: string): string {
  const prefix = "src/routes";

  const index = name.indexOf(prefix);
  if (index == -1) throw new Error("Index === -1");

  let route = name.slice(index + prefix.length);
  // remove leading & trailing slash
  if (route.startsWith("/")) route = route.slice(1);
  if (route.endsWith("/")) route = route.slice(0, -1);

  return route;
}
