const randomList = (list, count) => {
  const randVals = [];
  while (randVals.length <= count) {
    const ordinal = Math.floor(Math.random() * (list.length));
    const val = list[ordinal]
    if (!randVals.includes(val)) {
      randVals.push(val);
    }
  }
  return randVals;
}


console.log(randomList([1, 1, 2, 2, 3, 3], 2));//[1, 2] or [2, 1] or [1, 3] etc.
console.log(randomList(['foo', 'bar', 'bazz', 'quq'], 2));//a random choice of 2 out of 4, with no repeats
