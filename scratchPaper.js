const sort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }
  const high = [];
  const low = [];
  const pivot = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > pivot) {
      high.push(nums[i]);
    } else {
      low.push(nums[i]);
    }
  }
  return sort(low).concat(pivot, sort(high));
}


const binary = (arr, val) => {
  let top = arr.length - 1;
  let bottom = 0;
  let mid;
  while (bottom <= top) {
    mid = Math.floor((bottom + top) / 2);
    if (arr[mid] === val) {
      return mid
    }
    if (arr[mid] > val) {
      top = mid;
    } else {
      bottom = mid;
    }
  }
  return null;
}

const nums = [3, 2, 6, 4, 8, 1, 1, 3, 2, 4, 5, 7, 5, 3, 4, 7, 9, 10, 33, 43, 2, 5, 6, 90];
const sortedArr = sort(nums);
console.log(sortedArr);
console.log(binary(sortedArr, 2))
