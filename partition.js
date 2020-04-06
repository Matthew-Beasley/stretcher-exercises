const partition = (array, callback) => {
  const trueArray = [];
  const falseArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      trueArray.push(array[i]);
    } else {
      falseArray.push(array[i]);
    }
  }
  return [trueArray, falseArray];
}


console.log(partition([1, 2, 3, 4], (x) => x % 2 === 1));//[ [ 1, 3 ], [ 2, 4 ] ]

console.log(partition([1, 2, 3, 4], (x) => typeof x === 'string'));//[ [], [ 1, 2, 3, 4 ] ]
console.log(partition([1, 'a', 'b', 2, 3, 4], (x) => typeof x === 'string'));//[ [ 'a', 'b' ], [ 1, 2, 3, 4 ] ]