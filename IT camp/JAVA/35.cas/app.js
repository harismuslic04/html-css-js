// Kvadrirati one brojeve koje imaju index 0,3,5.
let brojevi = [2, 5, 8, -3, 5, 9];
const brojevi1 = brojevi.map((element, index) => {
  if (index === 0 || index === 3 || index === 5) {
    return element ** 2;
  } else return element;
});
console.log(brojevi1);

// Napraviti novi niz koji sadrzi kvadrate parnih elemenata postojeceg niza. Dok za neparne elemente treba vratiti aritmeticku vrednost prethodnog elementa, datog, i narednog.
const numbers = [2, 5, 10, 3, 4, 8];

const numbers2 = numbers.map((element, index, arr) => {
  if (element % 2 === 0) {
    return element ** 2;
  } else {
    return +((arr[index - 1] + element + arr[index + 1]) / 3).toFixed(2);
  }
});

console.log(numbers2);

// Domaci:
// 1. Pomocu for petlje napraviti novi niz, koji ce sadrzati samo godine vece od 17.

// 2.
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

// 1.
const brojevidomaci = [2, 5, -2, 30, 11, -8];
const novi = [];
for (let broj of brojevidomaci) {
  if (broj > 17) novi.push(broj);
}
console.log(novi);

// 2.
// const DATA1 = [2, 26, 38, 75, 11, 29];
// const DATA2 = ["a", "b", "c", "d", "e"];
// const novi2 = [];
// const novi3 = [];
// function funkcija(niz1, niz2) {
//   novi2 = niz1.concat(niz2);
//   for (let broj of DATA1) {
//     if (broj % 2 == 0) novi3.push(broj);
//   }
//   novi3.splice(0, 0, 20);
//   novi3.splice(0, 0, 10);
//   console.log(novi2);
//   console.log(novi3);
// }
// console.log(funkcija(DATA1, DATA2));

// 2. nacin
const DATA3 = [2, 26, 38, 75, 11, 29];
const DATA4 = ["a", "b", "c", "d", "e"];
const task = (arr1, arr2) => {
  const pomocni1 = arr1.concat(arr2);
  const pomocni2 = [];
  for (let br of pomocni1) {
    if (br % 2 === 0) {
      pomocni2.push(br);
    }
  }
  pomocni2.unshift(10, 20);
  return [pomocni1, pomocni2];
};
console.log(task(DATA3, DATA4));
