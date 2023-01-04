// Niz predstavlja strukturu podataka koja moze sadrzati vise od jedne vrednosti.

// Nizovi u JavaScriptu su heterogeni (mogu sadrzati elemente razlicitih tipova).

const niz = ["Mitar", "Vranic", 20, true];
console.log(niz);

// Dozvoljeno je, cesto i prakticnije pisati svaki element niza u novom redu.
// const niz = [
//     "Mitar",
//     "Vranic",
//     20,
//     true
//     ];

// Mozemo prvo kreirati prazan niz, pa nakon toga dodavati rucno elemente.

const automobili = [];
automobili[0] = "Audi";
console.log(automobili);
automobili[1] = "Passat";

automobili[5] = "Golf";
console.log(automobili);
console.log(automobili[3]);

// Istu sintaksu mozemo iskoristiti za promenu vrednosti elementa.
automobili[0] = "Mercedes";
console.log(automobili);

// Niz mozemo definisati preko new keyword:

const niz2 = new Array("Hasan", "Omar", "Emin");
console.log(niz2);

// Radi jednostavnosti, citljivosti koda i brzine izvrsavanja je bolje koristiti [] nego new.

const niz3 = [40];
console.log(niz3);
// new Array ce napraviti niz od 40 praznih mesta.
const niz4 = new Array(40);
console.log(niz4);

// Pristupanje elementima se vrsi preko indeksa:
console.log(automobili[1]);

// Postoje 2 nacina za ispitivanje dsa li je neka promenljiva niz:
console.log(typeof automobili);

// 1. Array.isArray(potencijalnoNiz)
console.log(Array.isArray(automobili));
console.log(Array.isArray("neki string"));

// 2. potencijalnoNiz instanceof Array
console.log(automobili instanceof Array);
console.log(25 instanceof Array);

// Elementi niza mogu biti bilo koje vrednosti:
// Date, Array, Boolean, Function, Number,....

// Za proveru duzine niza koristimo length:
console.log(automobili.length);
console.log(automobili);
// Za dodavanje elementa na kraju niza se koristi push() metoda.

const dani = ["ponedeljak", "utorak"];
dani.push("sreda");
console.log(dani);
// push() metoda nam omogucava dodavanje vise od jednog elementa na kraju niza.
// dani.push(...) varaca novu duzinu niza.
console.log(dani.push("cetvrtak", "petak"));
console.log(dani);

// da li neko ima ideju kako da dodamo element na poslednjem mestu u nizu ako ne znamo duzinu niza i ako ne koristimo push() metodu?
console.log(dani.length);
dani[dani.length] = "subota";
console.log(dani);

// Nizovi su zapravo vrsta objekata koji imaju brojevne indekse.

// Za pretvaranje niza u string mozemo iskoristiti 2 metode:
// 1. toString()
// 2. join()

// 1.
const daniStr = dani.toString();
console.log(daniStr);
console.log(typeof daniStr);
// Obrnuti postupak:
const noviNiz = daniStr.split(",");
console.log(noviNiz);

// 2.
// Klasicni primer:
const daniStr2 = dani.join();
console.log(daniStr2);
console.log(typeof daniStr2);
// Dobijanje stringa i stavljanje nekog znaka izmednju elemenata niza koji smo pretvorili u string.
const daniStr3 = dani.join("*");
console.log(daniStr3);

// pop() metoda brise poslednji element iz niza.

// dani.pop() varaca vrednost izbrisanog elementa.
const hari = dani.pop();
console.log(dani);
console.log(hari);

// Iz datog niza ispitati koliko elemenata je tipa string,
// koliko tipa number,
// koliko tipa boolean,
// koliko elemenata je zapravo niz?
const nizz = [
  "jagoda",
  25,
  true,
  "mandarina",
  [1, 2, 3],
  "ananas",
  49,
  694,
  "tresnja",
];
let stringovi = 0;
let numberi = 0;
let booleani = 0;
let arrayi = 0;
for (let i = 0; i < nizz.length; i++) {
  if (typeof nizz[i] === typeof "stringneki") {
    stringovi++;
  } else if (typeof nizz[i] === typeof true) {
    booleani++;
  } else if (typeof nizz[i] === typeof 23) {
    numberi++;
  } else if (typeof nizz[i] === typeof ["neki", "niz"]) {
    arrayi++;
  }
}
console.log(` ${stringovi} elementa su string, ${numberi} elementa su broj,
${booleani} elementa su boolean, ${arrayi} elementa su niz`);

const zadatak = (par3) => {
  let duzina = par3.length;
  for (let i = 0; i <= duzina; i++) {
    if (i % 2 === 0) {
      par3[i] = "paran broj";
    }
  }
  return par3;
};

console.log(zadatak([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));

//iz niza izdvojiti parne brojeve
function parniTask(par1) {
  const parni = [];
  for (let broj of par1) {
    if (broj % 2 === 0 && !isNaN(broj)) {
      parni.push(broj);
    }
  }
  return parni;
}
console.log(parniTask([-66, -67, -93, -22, -35, 2, 4, 5, 7, 9, 88]));

//iz niza izdvojiti neparne brojeve
function neparniTask(par2) {
  const neparni = [];
  for (let broj of par2) {
    if (broj % 2 !== 0 && !isNaN(broj)) {
      neparni.push(broj);
    }
  }
  return neparni;
}
console.log(neparniTask([-66, -67, -93, -22, -35, 2, "dfd", 4, 5, 7, 9, 88]));

//iz niza izdvojiti sve pozitivne brojeve
function pozitivniTask(par2) {
  const pozitivni = [];
  for (let broj of par2) {
    if (broj > 0 && !isNaN(broj)) {
      pozitivni.push(broj);
    }
  }
  return pozitivni;
}

console.log(pozitivniTask([-66, -67, -93, -22, -35, 2, "dfd", 4, 5, 7, 9, 88]));

// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi
niz1 = ["haris", "sumeja", "hasan", "muslic"];
niz3 = niz1.map((element) => {
  return `${element[0].toUpperCase()}${element.slice(1, element.length)}`;
});
console.log(niz3);
