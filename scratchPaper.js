const basicSort = (arr) => {
  const pivot = arr[0];
  const high = [];
  const low = [];

  if (arr.length < 2) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      high.push(arr[i]);
    } else {
      low.push(arr[i]);
    }
  }
  return basicSort(low).concat(pivot, basicSort(high));
}

const nums = [4, 2, 7, 5, 9, 10, 55, 3, 5, 2, 0];
const sorted = basicSort(nums);
console.log(sorted);

const biSearch = (list, val) => {
  let hi = list.length - 1;
  let low = 0;
  let mid;

  while (low <= hi) {
    mid = Math.floor((hi + low) / 2);
    if (list[mid] === val) {
      return mid;
    } else if (list[mid] > val) {
      hi = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

console.log(biSearch(sorted, 9));
