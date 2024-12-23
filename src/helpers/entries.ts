export function entries<Object extends object, Key extends keyof Object>(object?: Object): [Key, Object[Key]][] {
  if (!object) return [];
  return Object.entries(object) as [Key, Object[Key]][];
}

export function fromEntries<Object extends object, Key extends keyof Object>(array: [Key, Object[Key]][]): Object {
  return Object.fromEntries(array) as Object;
}
