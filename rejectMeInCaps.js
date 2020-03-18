const rejectMeInCaps = (strVal) => {
  return new Promise((resolve, reject) => {
    reject(strVal.toUpperCase());
  })
} 


rejectMeInCaps('foo')
  .catch(result => console.log(result));//FOO

rejectMeInCaps('bar')
  .catch(result => console.log(result));//BAR

module.exports = { rejectMeInCaps };
