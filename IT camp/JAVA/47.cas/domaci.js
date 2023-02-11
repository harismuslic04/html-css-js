const nthlargest = (arr, position) => {
  arr.sort((a, b) => b - a);
  return arr;
};

console.log(nthlargest([45, 78, 21, 123, 345, 62, 123, 634, 123, 538]));

const person = {
  firstName: "Bakir",
  lastName: "Ujkanovic",
  age: 19,
};
const keysToValues = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const newObj = {};
  for (let i = 0; i < values.length - 1; i++) {
    newObj[values[i]] = keys[i];
  }
  return newObj;
};
console.log(keysToValues(person));

const lengthOfObjects = (obj) => {
  const length = Object.keys(obj).length;
  return length;
};
console.log(lengthOfObjects(person));

function brutalno(nizA, nizB) {
  const nizD = [];
  const nizC = [];
  for (let i = 0; i < nizB.length; i++) {
    if (nizB[i] <= nizA.length) {
      nizD.push(nizB[i]);
    }
  }
  for (j = 0; j < nizA.length; j++) {
    nizC[j] = nizA[nizD[j]];
  }
  return nizC;
}

console.log(brutalno([23, 52, 38, 44], [3, 1, 1, 2, 5]));

function izi(nizA) {
  let brojac = 0;
  for (i = 0; i < nizA.length; i++) {
    if (nizA[i] === nizA[i - 1] * 2 && nizA[i] === nizA[i + 1] - 10) {
      brojac++;
    }
  }
  return brojac;
}
console.log(izi([10, 20, 30, 40, 50]));
