const detectAnagram = (input) => {
  let tempWordA;
  let tempWordB;
  let outputCount = 1;
  const containsArr = [];
  let output = '';
  let set = new Set();

  for (let i = 0; i < input.length; i++) {
    tempWordA = null
    tempWordA = [...input[i]];
    tempWordA = tempWordA.sort().join('')
    containsArr.push(tempWordA);
  }

  for (let i = 1; i < input.length; i++) {
    tempWordB = null;
    tempWordB = [...input[i]];
    tempWordB = tempWordB.sort().join('')

    if (containsArr.includes(tempWordB)) {
      if (containsArr.indexOf(tempWordB) - containsArr.lastIndexOf(tempWordB) !== 0) {
        if (input[containsArr.indexOf(tempWordB)] !== input[i]) {
          output += `${outputCount}. ${input[containsArr.indexOf(tempWordB)]}, ${input[i]} \n`
          outputCount++;
        }
      }
    }
    containsArr.push(tempWordB)
  }
  return output;
}

/*
1. cat, act
2. a phrase, e hpsara
3. tape, pate
*/

const words = ['cat', 'act', 'ignore', 'a phrase', 'tape', 'pate', 'e hpsara'];

console.log(detectAnagram(words));
