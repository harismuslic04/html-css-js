// JSON - Java Script Object Notation //

// JSON je format za skladistenje  i prenos podataka.
// Najcesce se koristi kada se podaci salju iz servera kad web stranici

// JSON podaci su vrlo slicni Java Script objektu i oni se zapisuju :

const person = {
  firstName: "Amer",
  lastName: "Honic",
  age: 19,
};

// keys/names zahtevaju duple navodnike,za razliku od JavaScript objekta.

// Dve metode za pretvaranje:
// 1.JSON.stringify()pretvara nas objekat  u JSON format pa JSON u string.
// Koristi se za slanje podataka

const strObject = JSON.stringify(person);
console.log(strObject);
console.log(typeof strObject);
// 2.JSON.parse()
// Analizira se neki string i u slucaju mogucnosti pretvara objekat(nama citljiv podatak)

const obj = JSON.parse(strObject);
console.log(obj);
