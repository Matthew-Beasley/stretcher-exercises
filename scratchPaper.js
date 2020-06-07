
const addsubarray = (sub) => {
  let total = 0;
  for (let i = 0; i < sub.length; i++) {
    total += sub[i];
  }
  return total;
}

const maxSubArray = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }
  let max = 0;
  let head = nums[1];
  let tail = nums[0];
  let current = nums[0];
  let subArr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (current < max) {
      while (addsubarray(subArr(subArr) < ))
      
    }
  }
  return max;
};

console.log(maxSubArray([-1]))
