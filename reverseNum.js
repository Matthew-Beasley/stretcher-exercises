var reverse = function (x) {
  x = x.toString().split('');
  let j = x.length - 1;
  let i = 0;
  let neg = false;
  while (i < Math.floor(x.length / 2)) {
    const temp = x[i];
    x[i] = x[j];
    x[j] = temp;
    i++;
    j--;
  }
  if (x[x.length - 1] === '-') {
    neg = true;
    x.pop();
  }
  x = x.join('')
  if (neg === true) {
    x = x * -1
  }

  if (x > Math.pow(2, 31) - 1 || x < Math.pow(2, 31) * -1) {
    return 0;
  }
  return x;
}

console.log(reverse(-123));
