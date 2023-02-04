const niz = [4, 5, 5, 6, 4, 9, -1, 5];
//klonirati niz
const niz1 = [];
for (let i = 0; i < niz.length; i++) {
  niz1.push(niz[i]);
}
console.log(niz1);

// soread operator (...)
// Pomocu njega kloniramo niz ili objekat

const niz3 = [...niz];
console.log(niz3);

const obj = {
  firstName: "Haris",
  lastName: "Muslic",
  status: "samo liveprul",
};

const obj2 = { ...obj, status: false, age: 19 };
console.log(obj2);
