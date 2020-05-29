
const sort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const high = [];
  const low = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      high.push(arr[i]);
    } else {
      low.push(arr[i]);
    }
  }
  return sort(low).concat(pivot, sort(high));
}

const findMedianSortedArrays = (nums1, nums2) => {
  const combined = nums1.concat(nums2);
  const sorted = sort(combined);
  if (combined.length % 2 === 0) {
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  } else {
    return sorted[Math.floor(sorted.length / 2)];
  }
};

const nums1 = [1, 2];
const nums2 = [3, 4];

//const nums1 = [3]
//const nums2 = [-2, -1];
//const nums = [3, 2, 6, 4, 8, 1, 1, 3, 2, 4, 5, 7, 5, 3, 4, 7, 9, 10, 33, 43, 2, 5, 6, 90];

//console.log(sort(nums))

console.log(findMedianSortedArrays(nums1, nums2));
