export class SortNotSupportedError extends Error {
  constructor(key: string) {
    super(`Sort not supported for key: '${key}'`);
  }
}
