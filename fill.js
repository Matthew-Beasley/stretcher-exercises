const fill = (len, val) => {
  const result = [];
  for (let i = 0; i < len; i++) {
    if (typeof (val) === "object") {
      result.push({ ...val });
    } else {
      result.push(val);
    }
  }
  return result;
}


const a1 = fill(3, true);
console.log(a1);//[true, true, true];
const a2 = fill(4, 42);
console.log(a2);//[42, 42, 42, 42];

const x = { foo: "bar" };
const a3 = fill(2, x);
console.log(a3);//[ { foo: 'bar' }, { foo: 'bar' } ]
console.log(a3[0] === a3[1]);//false
