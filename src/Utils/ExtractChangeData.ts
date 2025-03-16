// First, make sure you've defined and imported the ExtractChangeData function correctly
// It should look something like this:

export function ExtractChangeData<
  T extends Record<string, any>,
  U extends Record<string, any>,
>(newValues: T, originalValues: U): Partial<T> {
  const changedData: Partial<T> = {};

  Object.keys(newValues).forEach(key => {
    const typedKey = key as keyof T;

    // Skip if the key doesn't exist in the original object
    if (!(key in originalValues)) return;

    // Compare and add to changedData if different
    if (newValues[typedKey] !== (originalValues as any)[key]) {
      changedData[typedKey] = newValues[typedKey];
    }
  });

  return changedData;
}
