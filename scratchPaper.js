const addMe = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') {
      return reject(new Error('not a number'));
    } else {
      resolve(a + b)
    }
  })
}

addMe(4, 5).then(res => console.log(res))

