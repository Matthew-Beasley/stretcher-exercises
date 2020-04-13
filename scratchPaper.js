
// containsDuplicates takes an array and determines if there are any duplicate items.
// Equality is determined by `===`.

// write the function containsDuplicates
// try to get a "brute force" solution, and then something more efficient

const containsDuplicates = (array) => {
  const test = [];
  for (let i = 0; i < array.length; i++) {
    if (test.includes(array[i])) {
      return true;
    }
    test.push(array[i]);
  }
  return false;
}

const containsDuplicates = (array) => {
  for (let i = 0; i < array.length)
}

console.log(containsDuplicates([1, 2, 3])); // false
console.log(containsDuplicates([1, 2, 4, 1])); // true

const obj = { random: "value" };

console.log(containsDuplicates([obj, 1, 2, obj])); // true
console.log(containsDuplicates([obj, 1, 2])); // false

