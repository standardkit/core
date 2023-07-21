export class SearchNotSupportedError extends Error {
  constructor(key: string) {
    super(`Search not supported for key: '${key}'`);
  }
}
