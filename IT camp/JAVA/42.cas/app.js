// object built in methods //

const person = {
  firstName: "Hamad",
  lastName: "Medjedovic",
  age: 16,
};
// Object.freeze(obj) metoda cini objekat nepromenljivim.
person.age = 17;
console.log(person);
Object.freeze(person);
person.age = 22;
console.log(person);
//consola poslednju vrednost pre freeza

// Object.seal(obj) cini objekat promenljivim s tim sto nema nmogucnost dodavanja (brisanja) novih svojstava i motoda
Object.seal(person);
person.age = 22;
console.log(person);
delete person.age;
console.log(person);

// object.keys(obj) vraca niz kljuceva
console.log(Object.keys(person));

// Object.entries(obj) vraca niz nizova
// Svaki niz je niz od dva elementa
const entries = Object.entries(person);
console.log(entries);

const newArr = entries
  .flat()
  .filter((element) => typeof element == typeof "string");
console.log(newArr);

// Object.is(obj1,obj2)

const obj1 = {
  ime: "Mitar",
  prezime: "Vranic",
};
const obj2 = {
  ime: "Mitar",
  prezime: "Vranic",
};

console.log(Object.is(obj1, obj2)); // ne zanima ga sta je unutar objekta vec samo ime objekta
const obj3 = obj1;
console.log(Object.is(obj1, obj3));

const ime = "Bakir";
const prezime = "Ujkanovic";
const godine = 19;

const person2 = {
  ime,
  prezime,
  godine,
};
console.log(person2);

// Destructuring

const person3 = {
  firstName: "Hasan",
  lastName: "Mujanovic",
  age: 18,
};

// const FirstName = person3.firstName;
// console.log(FirstName); //ovo je peske

const { firstName, age } = person3;
console.log(firstName);
console.log(age);

// Napraviti novi niz(punoletni) koji ce sadrzato one elemente(objekte) cija je vrednost starost veca od 17
