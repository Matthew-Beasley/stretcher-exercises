const resolveMeInUpperCase = (word) => {
  return new Promise((resolve, reject) => {
    if (!word || typeof (word) !== 'string') {
      reject(new Error('invalid parameter'));
    } else {
      resolve(word.toUpperCase());
    }
  })
}

resolveMeInUpperCase(123)
  .then(response => console.log(response))
  .catch(err => console.log(err));

Promise.all([
  resolveMeInUpperCase('foo'),
  resolveMeInUpperCase('bar')
])
  .then(responses => {
    console.log(responses[0]);
    console.log(responses[1]);
  })
  .catch(err => console.log(err));
