export function expectQueryData<T>(value: T | undefined): asserts value is T {
  if (value !== undefined) return;

  throw new Error(
    "Query data is undefined. This should not happen with suspense enabled, unless the query is disabled",
  );
}
