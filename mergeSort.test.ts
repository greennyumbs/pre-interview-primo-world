import { merge } from "./mergeSort";

describe("merge function", () => {
  it("merges two sorted arrays", () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [2, 4, 6, 8];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("merges arrays with different lengths", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6, 8];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 8]);
  });

  it("merges arrays with duplicate values", () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [2, 4, 6, 6, 8];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 6, 7, 8]);
  });
});
