const resolveMeInUpperCase = (word) => {
  return new Promise((resolve, reject) => {
    if (!word || typeof (word) !== 'string') {
      reject(console.log('invalid parameter'));
    } else {
      resolve(word.toUpperCase());
    }
  })
}

Promise.all([
  resolveMeInUpperCase('foo'),
  resolveMeInUpperCase('bar')
])
  .then(responses => {
    console.log(responses[0]);
    console.log(responses[1]);
  })

//resolveMeInUpperCase(123);
