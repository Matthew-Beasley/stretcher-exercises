const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = arr.length / 2;
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  let results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }
  results = [...results, ...left, ...right];
  return results;
};
const arr = [];
while (arr.length < 10000) {
  arr.push(Math.random() * 100)
}
mergeSort(arr);
console.log(counter, Math.log2(10000) * 10000);