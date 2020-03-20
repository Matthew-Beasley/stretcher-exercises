const uniqueConsonant = (input) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const inputArr = input.split('');
  const output = inputArr.filter((letter) => {
    if (!vowels.includes(letter)) {
      return letter;
    }}).reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
  return output;
}

console.log(uniqueConsonant('abacubbca'));//[ 'b', 'c' ]
