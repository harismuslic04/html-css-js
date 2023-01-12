// JavaScript array iteration //

// Array iteration metode prolaze kroz svaki element niza

// forEach() metoda poziva callback funkciju za svaki element niza
// forEach() metoda moze imati tri parametra
// 1. element niza
// 2. index niza
// 3. ceo niz
const niz = ["Haris", "amer", "aladin", "bakir"];
niz.forEach((element) => {
  console.log(element);
});
niz.forEach((element, index, arr) => {
  console.log(
    `${element} se nalazi na ${index + 1}.mestu u nizu.Ceo niz je ${arr}`
  );
});

// map() metoda kreira novi niz sa logikom predstavljenom unutar callback funkcije unutar date metode

// preko petlje napraviti novi niz koji ce imati sve elemente originalnog niza

const niz2 = ["haris", "amer", "bakir", "aladin"];
const noviniz = [];
duzina = niz.length;
for (i = 0; i < duzina; i++) {
  noviniz[i] = niz[i];
}
console.log(noviniz);

const niz3 = niz.map(function () {});
