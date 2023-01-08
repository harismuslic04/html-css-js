// splice() metoda je najmocnija alatka kod nizova u JavaScriptu.
// Omogucava nam promene u nizu na zeljenoj poziciji
// 1. Mozemo dodati (koliko hocemo) elemenata na nekom mestu
// 2. Mozemo izbrisati  (koliko hocemo) elemenata na nekom mestu

const niz = [
  "aladin",
  "dzenan",
  "haris",
  "bakir",
  "amer",
  "samra",
  "hatidza",
  "merisa",
];

// splice() metoda uzima minimum dva argumenta:
// prvi argument predstavla poziciju od koje ce se vrisiti neke promene
// drugi argument predstavlja broj elemenata koje  brisemo iz niza
// nakon brisanja elementi drze isti index koji su imali u starom nizu
// niz.splice(2, 6);
// console.log(niz);
// treci argument predstavlja vrednost koja ce se dodati na mestu koje smo definisali prvim argumentom
// niz.splice(2, 0, "tarik");
// console.log(niz);

// iz niza izbrisati sve devojke
// iz niza izbrisati sve muskarce
// na petom elementu dodati "tarik",a na kraju niza dodati "omar"
// niz.splice(5, 3);
// console.log(niz);
// niz.splice(5, 0, "tarik");
// console.log(niz);
// splice()metoda nam vraca elemente koji su izbrisani

//slice()metoda nam vraca neo niza:
const niz2 = niz.slice(2, 4);
console.log(niz2);
// slice() metoda nam vraca novi niz sa uzetim delom originalnog niza
//kada se izostavi drugi argument on od prvog argumenta brise pa sve do kraja
