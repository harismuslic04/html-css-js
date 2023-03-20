// JavaScript Array Iteration //

// Array Iteration metode prolaze kroz svaki element niza.

// forEach() metoda poziva callback funkciju za svaki element niza.

const niz = ["tarik", "hamed", "emin", "bakir", "dzenan"];

// forEach() moze imati 3 parametra:
// 1. element niza
// 2. index niza
// 3. ceo niz
niz.forEach((element) => {
  console.log(element);
});

niz.forEach((element, index) => {
  console.log(`${element} se nalazi na ${index + 1} mestu u nizu.`);
});

niz.forEach((element, index, arr) => {
  console.log(
    `${element} se nalazi na ${index + 1} mestu u nizu. Ceo niz je ${arr}.`
  );
});

// Ne moramo koristiti nazive od pre.
niz.forEach((student, pozicija) => {
  console.log(`${student} se nalazi na ${pozicija + 1} mestu u nizu.`);
});

// map() metoda kreira novi niz (iste duzine kao originalni) sa logikom predstavljenom unutar callback funkcije unutar date metode.

// Preko petlje napraviti novi niz koji ce imati sve elemente originalnog niza.

const niz2 = [];
for (let student of niz) {
  niz2.push(student);
}
console.log(niz2);

// const niz3 = niz.map(function (student) {
//   return student;
// });

const niz3 = niz.map((student) => student);
console.log(niz3);

// Preko map() metode napraviti novi niz gde ce imena svih studenata pocinjati velikim slovom.

const niz4 = niz.map((student) => student[0].toUpperCase() + student.slice(1));
console.log(niz4);

// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

// 4.
const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

const niz5 = niz.map((student) => student.toUpperCase());
console.log(niz5);

const niz6 = [1, 3, 5, 4, 8, 12];
const niz7 = niz6.map((broj) => Math.pow(broj, 2));
console.log(niz7);

const niz8 = brojevi.map((brojevii) => {
  if (brojevii < 0) {
    return Math.abs(brojevii);
  } else {
    return brojevii * brojevii;
  }
});
console.log(niz8);
