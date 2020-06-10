const sort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }
  const high = [];
  const low = [];
  const pivot = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      low.push(nums[i]);
    } else {
      high.push(nums[i]);
    }
  }
  return sort(low).concat(pivot, sort(high));
}

const find = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((high + low) / 2)
    if (nums[mid] === target) {
      return mid;
    }
    else if (nums[mid] > target) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return null;
}

const arr = [5, 3, 7, 1, 2, 3, 8, 7, 6, 10];
const sorted = sort(arr);
console.log(sorted)
console.log(find(sorted, 5));
