const linearSearch = (vals, target) => {
  for (let i = 0; i < vals.length; i++) {
    if (vals[i] === target) {
      return true;
    }
  }
  return false;
}

const quickSort = (vals) => {
  const pivot = vals[0];
  const high = [];
  const low = [];

  if (vals.length < 2) {
    return vals;
  }

  for (let i = 1; i < vals.length; i++) {
    if (vals[i] < pivot) {
      low.push(vals[i]);
    } else {
      high.push(vals[i]);
    }
  }
  return quickSort(low).concat(pivot, quickSort(high));
}

const binarySearch = (vals, target) => {
  let hi = vals.length - 1;
  let low = 0;
  let mid;

  while (low <= hi) {
    mid = Math.floor((hi + low) / 2);
    if (vals[mid] == target) {
      return mid;
    }
    else if (vals[mid] > target) {
      hi = mid;
    } else {
      low = mid;
    }
  }
  return null;
}

let nums = [3, 2, 6, 4, 8, 1, 1, 3, 2, 4, 5, 7, 5, 3, 4, 7, 9, 10, 33, 43, 2, 5, 6, 90];
let arr = [1, 2, 4, 3, 6, 5, 9, 7, 8, 10]
const val = 2;
nums = quickSort(nums);

console.log(nums);
console.log(binarySearch(nums, val));
//console.log(binarySearch(nums, 3));

//console.log(linearSearch(nums, val))
