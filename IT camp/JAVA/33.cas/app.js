// Indexof() vraca poziciju elementa koji predstavlja argument date metode.Ukoliko nema tog elementa -> vraca -1

const niz = ["haris", "sumeja", "hasan", "lejla"];

const sumeja = niz.indexOf("sumeja");
console.log(sumeja + 1);

const omar =
  niz.indexOf("Omar") === -1 ? "nije dolazio" : niz.indexOf("Omar") + 1;
console.log(omar);

//prvi argument u zagradi predstavlja koji se element trazi,a drugi element predstavlja index od kojeg pocinje da se trazi

// lastIndexof() vraca poziciju elementa koji predstavlja argument date metode.Ukoliko nema tog elementa -> vraca -1

const lastLejla = niz.lastIndexOf("lejla") + 1;
console.log(lastLejla);

// Array.from() nam vraca niz,koji se pravi od nekog objekta koji ima length\
const noviNiz = Array.from("SVAKO SLOVO CE BITI POSEBAN ELEMENT NIZA");
console.log(noviNiz);

// includes() metoda vraca nam boolean u zavisnosti od toga da li se argument nalazi u nizu

console.log(niz.includes("hari"));

// keys() metoda vraca Array Iterator Object sa kljucevima (indeksima) nekog niza
const indeksi = niz.keys();
console.log(indeksi);

for (let index of indeksi) {
  console.log(index);
}

// entries() metoda vraca Arrat Iterator Object sa key\value parovima nekog niza
const entries = niz.entries();
console.log(entries);

for (let entrie of entries) {
  console.log(entrie);
}

//write a javascript function to get the first element of an array.Passing a aparameter 'n' will return the first 'n' elements of array

function funkcija(niz, n) {
  if (n > niz.length) {
    return niz;
  } else if (n === undefined) {
    return niz[0];
  } else {
    return niz.slice(0, n);
  }
}
console.log(funkcija([1, 5, 2, 9, 1], 20));
