export interface FilterInterface<T> {
  // Filters can also apply to fields outside the direct scope of the resource
  // Example (date range): T has key createdAt but filters: createdBefore & createdAfter
  // Example (indirect): T belongs to employee but we filter on organization, which is not directly related
  key: Extract<keyof T, string> | string;
  value: any;
}
