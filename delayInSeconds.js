const now = new Date();
const elapsed = () => {
  console.log(`${(new Date() - now) / 1000} elapsed seconds`);
};

const delayInSeconds = (factor, message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(message)}, (1000 * factor));
  });
}

delayInSeconds(0.6, 'second')
  .then(d => {
    console.log(d)
    elapsed();
  });
delayInSeconds(0.7, 'third')
  .then(d => {
    console.log(d)
    elapsed();
  });
delayInSeconds(0.5, 'first')
  .then(d => {
    console.log(d)
    elapsed();
  });
  //times might differ slightly
/*
first
.503 elapsed seconds
second
.601 elapsed seconds
third
.706 elapsed seconds
*/

module.exports = { delayInSeconds };
