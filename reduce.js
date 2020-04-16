const reduce = (array, func, multi) => {
  let acc = multi;
  for (let i = 0; i < array.length; i++) {
    acc = func(acc, array[i])
  }
  return acc;
}


console.log(reduce([1, 2, 3], (acc, item) => {
  return item * acc;
}, 2));//12

console.log(reduce([1, 2, 3, 4], (acc, item) => {return item * acc;}, 10));//240