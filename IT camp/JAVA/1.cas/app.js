//tipovi podataka u javi
//za upotrebu tipa neke promenjlive (varijable) se koristi typeproof operator.
// primitivni tipova podataka

// 1.Stringovi - prestavljju niz karaktera koje je zapisan unutar navodnika
// (obicnih ili duplih).
// naucite java s knjiha obavezna
// you dont know js na engleski kniga
console.log("ovo neki string unutar obicnih navodnika");
//number predstavlja broj koji moze biti zapisan sa ili bez decimalnog zapisa
//ne pravi se razlika izmedju celih realnih i kompleksnih brojeva
console.log(typeof -5.67);
console.log(-5.67);

console.log(BigInt(4739182743812472184371894712));
console.log(typeof BigInt(4739182743812472184371894712));

//4. tip boolean - cesto se koristi

// boolean je logicki entitet koji ima dve vrednosti:true i false
//najcesce se koristi u kondicionalima i ima veliku primenu (if naredbe)

daLiPadaKisa = false;

console.log(true);
console.log(typeof true);
console.log(daLiPadaKisa);

// 5 undefined je tip podatka koji se javlja kada imamo definisanu neku promenljivu ali joj nismo dodelili vrednost .
// u tom slucaju i vrednost i tip promenljive je undefined

let prom1; //deklarisanje promenljive
prom1 = 54; // dodela vrednosti promenljivoj

// 6. null - je tip podatka za nepostojecu promenljivu ili za promenljivu
// kojoj smo dodelili nekorektnu vrednost
let skola;
console.log(typeof skola);

//7. Symbol-Novi tip podatka u JavaScriptu koji se koristi za dodeljivanje jedinstvene
//ili anonimne vrednost.

//primitivni tipovi podataka se koriste kada imamo promenljivu(varijablu)
//sa samo jednom vrednoscu

//NEPRIMITIVNI TIPOVI PODATAKA//

//Za promenljive (varijable) koje mogu skladistiti vise vrenosti ili neke
//kompleksne vrednosti se koriste neprimitivni tipovi podataka

//Kada ispitujemo tip podatka za neku neprimitivnu promenljivu u JavaScriptu
//dovijamo Object za tip.

//1. Nizovi (Arrays) - neprimitivni tip podatka koji sluzi za skladistenje vise vrednosti
//U Java Scriptu niz moze sadrzati elemente razlicitog tipa.

niz1 = ["Sumeja", "Haris", "Sumeja", "Haris", "Sumeja"];

niz2 = ["Hamed", 15, false];

//Jos jedan nacin definisanja niza:
niz3 = new Array("Sumeja", "Haris", "Sumeja", "Haris", "Sumeja");
console.log(niz3);

//2. Object (Objects) - su glavni neprimitivni tipovi podatka u JS.
//Objekti se zapisuju po principu name:value pair(ime:vrednost par)

obj1 = {
  ime: "Mehmed",
  prezime: "Kucevic",
  godine: 15,
  skola: "Dva Heroja",
  punoletstvo: false,
};
console.log(obj1.godine);

//3.Setovi (Sets) - slicni nizovima sa razlkkom da sene moze da sadrzi duplikate
set1 = new Set(["Alen", "nebitno", "nebitno2", "nebitno3"]);
console.log(set1);

//4.Mape(Maps) - su slicni objektima,sa nesto drugacijim nacinom definisanja

map1 = new Map([["jabuke", 50][("kruske", 50)][("jagode", 50)]]);
