const processor = (people, items, thingsKey, idKey, userIdKey) => {
  const processedObjs = [];

  for (let i = 0; i < people.length; i++) {
    const processedObj = { [idKey]: people[i].id, name: people[i].name, [thingsKey]: [] };

    for (let k = 0; k < items.length; k++) {
      const itemObj = {};
      if (items[k][userIdKey] === people[i][idKey]) {
        itemObj[idKey] = items[k][idKey];
        itemObj[userIdKey] = items[k][userIdKey];
        itemObj.name = items[k].name;
        processedObj[thingsKey].push(itemObj);
      }
    }

    processedObjs.push(processedObj);
  }
  return processedObjs;
}


const users = [
  { id: 'x', name: 'Moe' },
  { id: 'y', name: 'Larry' },
];

const things = [
  { id: 'a', userId: 'x', name: 'foo' },
  { id: 'b', userId: 'x', name: 'bar' },
  { id: 'c', userId: 'y', name: 'bazz' },
];

const processed = processor(users, things, 'things', 'id', 'userId');
console.log(JSON.stringify(processed, null, 2));

module.exports = { processor };

/*
[
  {
    "id": "x",
    "name": "Moe",
    "things": [
      {
        "id": "a",
        "userId": "x",
        "name": "foo"
      },
      {
        "id": "b",
        "userId": "x",
        "name": "bar"
      }
    ]
  },
  {
    "id": "y",
    "name": "Larry",
    "things": [
      {
        "id": "c",
        "userId": "y",
        "name": "bazz"
      }
    ]
  }
]
*/