//write the fuzzyFilter function
/*
get passed an array and an object
filter objects in array that have all the properties of the second argument
note an object can have extra properties
*/

const fuzzyFilter = (objectArr, object) => {
  const retArr = [];
  for (let i = 0; i < objectArr.length; i++) {
    for (let key in objectArr[i]) {
      if (objectArr[i][key] === object[key]) {
        retArr.push(objectArr[i]);
      }
    }
  }
  return retArr;
}

console.log(fuzzyFilter([{ foo: 'bar', x: 3 }, { foo: 'bar' }, { foo: 'ba', y: 1 }], { foo: 'bar' }));//[ { foo: 'bar', x: 3 }, { foo: 'bar' } ]

console.log(fuzzyFilter([{ foo: 'bar', x: 3 }, { foo: 'bar' }, { foo: 'bar', y: 1 }], { foo: 'ba' }));//[]

