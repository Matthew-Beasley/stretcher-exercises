/*const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    let j = i;

    while (j >= 1 && nums[j - 1] > current) {
      nums[j] = nums[j - 1];
      j--;
    }

    nums[j] = current;
  }
}*/

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {}
}


const nums = new Array(20);

for (let i = 0; i < 20; i++) {
  nums[i] = 20 - i;
}

console.log(nums);


insertionSort(nums);
console.log('did insertion sort')

console.log(nums);
