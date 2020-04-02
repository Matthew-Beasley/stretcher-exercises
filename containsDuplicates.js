/*
Write a function called containsDuplicates.
containsDuplicates has one parameter, an array that may containe numbers, strings, booleans.
containsDuplicates should return true if a value appears in the array two or more times, otherwise return false.
An ideal solution takes one iteration over the array.
For a challenge, allow the input array to contain objects, and use reference equality to determine whether an item is a duplicate.
*/

const containsDuplicates = (array) => {
  let store = [];
  for (let i = 0; i < array.length; i++) {
    if (store.includes(array[i])) {
      return true;
    } else {
      store.push(array[i]);
    }
  }
  return false;
}


console.log(containsDuplicates([1, 2])); // false
console.log(containsDuplicates([1, 2, 1])); // true
console.log(containsDuplicates(["a"])); // false
console.log(containsDuplicates(["a", "a"])); // true
console.log(containsDuplicates([true])); // false
console.log(containsDuplicates([true, true])); // true

