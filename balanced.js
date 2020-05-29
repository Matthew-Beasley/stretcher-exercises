/* eslint-disable complexity */
const hasBalancedBrackets = (string) => {
  let curly = 0;
  let square = 0;
  let round = 0;
  const chars = string.split('');

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '{' || chars[i] === '}') {
      curly++;
      if (chars[i] === '{' && chars[i + 1] === ']' ||
        chars[i] === '{' && chars[i + 1] === ')') {
        return false;
      }
    } else if (chars[i] === '[' || chars[i] === ']') {
      square++;
      if (chars[i] === '[' && chars[i + 1] === '}' ||
        chars[i] === '[' && chars[i + 1] === ')') {
        return false;
      }
    } else if (chars[i] === '(' || chars[i] === ')') {
      round++;
      if (chars[i] === '(' && chars[i + 1] === ']' ||
        chars[i] === '(' && chars[i + 1] === '}') {
        return false;
      }
    }

  }
  if (curly % 2 === 0 && square % 2 === 0 && round % 2 === 0) {
    return true;
  } else {
    return false
  }
}

console.log(hasBalancedBrackets('[][(){}')); // false
console.log(hasBalancedBrackets('({)}')); // false
console.log(hasBalancedBrackets('({[]})')); // true
console.log(hasBalancedBrackets('text ( is allowed ){rwwrwrrww [] ()}')); // true
