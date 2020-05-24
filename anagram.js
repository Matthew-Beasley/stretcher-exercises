/* eslint-disable no-loop-func */

const detectAnagram = (input) => {
  let tempWordA;
  let tempWordB;
  let outputCount = 1;
  const containsArr = [];
  let output = '';

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

//const words = ['cat', 'act', 'ignore', 'a phrase', 'tape', 'pate', 'e hpsara'];

//console.log(detectAnagram(words));


const detectAnagramAgain = (input) => {
  const storage = {};
  let retStr = '';
  input.forEach(origStr => {
    const sortedStr = [...origStr].sort().join('').toLowerCase();
    if (storage.hasOwnProperty(sortedStr)) {
      storage[sortedStr].push(origStr);

    } else {
      storage[sortedStr] = [];
      storage[sortedStr].push(origStr);
    }
  });

  let count = 1;
  for (let key in storage) {
    if (storage[key] > 1) {
      retStr += `${count}. `;
      storage[key].forEach(word => {
        retStr += `${word} `
      });
      retStr += '\n';
      count++;
    }
  }
  return retStr;
}

/*
1. cat, act
2. a phrase, e hpsara
3. tape, pate
*/

const morewords = ['cat', 'act', 'ignore', 'a phrase', 'tape', 'pate', 'e hpsara'];

console.log(detectAnagramAgain(morewords));
