const groupByDataType = (data) => {
  const obj = data.reduce((acc, item) => {
    const key = typeof (item);
    if (!acc.hasOwnProperty(key)) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
  return JSON.stringify(obj);
}


console.log(groupByDataType([1, 2, 3]));
//{ number: [ 1, 2, 3 ] }


console.log(groupByDataType([1, 'a', 'b', true, false, [], new Date(), true, {}]));
/*
{
  string: [ 'a', 'b' ],
  boolean: [ true, false, true ],
  object: [ [], 2020-03-03T20:54:30.720Z, {} ]
}
  */
  //date will be current date!

module.exports = { groupByDataType }
