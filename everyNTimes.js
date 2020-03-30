
const everyNTimes = (iterations) => {
  let counter = 1;
  return (param) => {
    return new Promise((resolve, reject) => {
      if ((counter % iterations) === 0) {
        resolve(param);
      } else {
        reject(param);
      }
      counter++;
    });
  }
}


const everyOther = everyNTimes(2);

everyOther('a').catch(r => console.log(`NO ${r}`));
everyOther('b').then(r => console.log(`YES ${r}`));
everyOther('c').catch(r => console.log(`NO ${r}`));
everyOther('d').then(r => console.log(`YES ${r}`));
const everyThree = everyNTimes(3);
everyThree('1').catch(r => console.log(`NO ${r}`));
everyThree('2').catch(r => console.log(`NO ${r}`));
everyThree('3').then(r => console.log(`YES ${r}`));
everyThree('4').catch(r => console.log(`NO ${r}`));
everyThree('5').catch(r => console.log(`NO ${r}`));
everyThree('6').then(r => console.log(`YES ${r}`));
/*
NO a
YES b
NO c
YES d
NO 1
NO 2
YES 3
NO 4
NO 5
YES 6
*/