export class FilterNotSupportedError extends Error {
  constructor(key: string) {
    super(`Filter not supported for key: '${key}'`);
  }
}
