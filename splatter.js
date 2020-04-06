const x = { a: 1 };
const y = { b: 2 };
const z = { c: 3, d: 4 };


const splatter = (...args) => {
  let splatted = {};
  args.forEach(obj => {
    splatted = { ...splatted, ...obj }
  });
  return splatted;
}


const splat = splatter(x, y, z);
console.log(splat);
console.log(x);
console.log(y);
console.log(z);
/*
{ a: 1, b: 2, c: 3, d: 4 }
{ a: 1 }
{ b: 2 }
{ c: 3, d: 4 }
*/