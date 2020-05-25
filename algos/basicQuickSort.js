/*function quickSortBasic(array) {
  if (array.length < 2) {
    return array;
  }
  var pivot = array[0];
  var lesserArray = [];
  var greaterArray = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > pivot) {
      greaterArray.push(array[i]);
    } else {
      lesserArray.push(array[i]);
    }
  }
  return quickSortBasic(lesserArray).concat(pivot, quickSortBasic(greaterArray));
}*/
function quickSortBasic(input) {
  if (input.length < 2) {
    return input;
  }
  const pivot = input[0];
  const greater = [];
  const lesser = [];
  for (let i = 1; i < input.length; i++) {
    if (input[i] > pivot) {
      greater.push(input[i]);
    } else {
      lesser.push(input[i]);
    }
  }
  return quickSortBasic(lesser).concat(pivot, quickSortBasic(greater));
}

const nums = [3, 2, 6, 4, 8, 1];

console.log(quickSortBasic(nums))
