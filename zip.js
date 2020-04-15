const zip = (...args) => {
  const result = [];
  for (let i = 0; i < args[0].length; i++) {
    result.push([]);
  }
  let count = 0;
  let moveon = 0;
  for (let j = 0; j < result.length; j++) {
    for (let i = 0; i < args.length ; i++) {
      if (count % args[0] === 0) {
        moveon++
      }
      count++;
      result[j].push(args[i][moveon]);
    }
  }
  return result;
}

console.log(zip(["a", "b"], [1, 2], [true, false]));
// => [['a', 1, true], ['b', 2, false]]
