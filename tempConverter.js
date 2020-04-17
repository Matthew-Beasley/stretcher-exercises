const tempConvertor = (tempObj) => {
  if (tempObj.scale === "C") {
    tempObj.degree = Math.trunc((tempObj.degree * 1.8) + 32);
    tempObj.scale = "F";
  } else {
    tempObj.degree = Math.trunc((tempObj.degree - 32) * 0.5556);
    tempObj.scale = "C";
  }
  return tempObj;
}


console.log(tempConvertor({ degree: 32, scale: "F" }));//{ degree: 0, scale: 'C' }
console.log(tempConvertor({ degree: 212, scale: "F" }));//{ degree: 100, scale: 'C' }
console.log(tempConvertor({ degree: 0, scale: "C" }));//{ degree: 32, scale: 'F' }
console.log(tempConvertor({ degree: 100, scale: "C" }));//{ degree: 212, scale: 'F' }
