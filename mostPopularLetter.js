const mostPopularLetter = (words) => {
  const counts = {};
  const letters = words.split("");
  let max = 0;
  let letter;
  if (letters.length === 0) {
    return undefined;
  }
  for (let i = 0; i < letters.length; i++) {
    if (Object.keys(counts).includes(letters[i])) {
      counts[letters[i]]++;
    } else {
      counts[letters[i]] = 1;
    }
  }
  for (let key in counts) {
    if (counts[key] > max) {
      max = counts[key];
      letter = key;
    }
  }
  return letter;
}

console.log(mostPopularLetter("foo"));//o
console.log(mostPopularLetter("foobarbazbz"));//b
console.log(mostPopularLetter(""));//undefined
