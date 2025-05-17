function merge(collection1: number[], collection2: number[]): number[] {
  let mergedCollection: number[] = [];
  let i = 0;
  let j = 0;

  while (i < collection1.length && j < collection2.length) {
    if (collection1[i] <= collection2[j]) {
      mergedCollection.push(collection1[i]);
      i++;
    } else {
      mergedCollection.push(collection2[j]);
      j++;
    }
  }

  // Add remaining elements from collection1, if any
  while (i < collection1.length) {
    mergedCollection.push(collection1[i]);
    i++;
  }

  // Add remaining elements from collection2, if any
  while (j < collection2.length) {
    mergedCollection.push(collection2[j]);
    j++;
  }

  return mergedCollection;
}

export { merge };
