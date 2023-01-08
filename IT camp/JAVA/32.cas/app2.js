// Sortiranje nizova //

const voce = ["jagoda", "banana", "kruska", "ananas"];

// sort() metoda sortira niz abacedno

voce.sort();
console.log(voce);

//reverse()metoda sortira niz obrnutim redosledom(u odnosu   na prethodno stanje)
voce.reverse();
console.log(voce);

const niz2 = [24, 31, 459, 10, 3, 92, 1, 22, 30, 100];
// niz2.sort();
// console.log(niz2);
// sort() metoda sama ne vrsi ispravno sortiranje kad se radi o brojevima
// za resavenje datog problema se koristi callback funkcija unutar sort metoda
// funkcija koja se salje kao argument unutar neke druge funkcije se zove callback funkcija
function poredjaj(a, b) {
  return a - b;
}
function poredjaj2(a, b) {
  return b - a;
}
// niz2.sort(poredjaj);
// console.log(niz2);

// niz2.sort(poredjaj2);
// console.log(niz2);
//ako hocemo random sortirane brojeve
niz2.sort(() => 0.5 - Math.random());
console.log(niz2);
