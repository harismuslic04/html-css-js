// Задатак: Фудбалски терен
// Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
// од линије терена r. Напиши програм који одређује дужину ограде.
// Улаз: У три реда стандардног улаза налазе се три цела броја:
// • d - дужина терена у метрима (90 ≤ d ≤ 120)
// • s - ширина терена у метрима (45 ≤ s ≤ 90)
// • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)

// Domaci zadaci:
// 1.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, nljegov kvadrat i vrednost broja umanjenu za 25.

// 1.zadatak.

// let d = +prompt("Unesite duzinu terena d veca od 90 a manja od 120 metara");
// let s = +prompt("Unesite sirinu terena s veca od 45 a manja od 90 metara");
// let r = +prompt(
//   "Unesite rastojanje ograde od terena  veca od 2 a manja od 10 metara"
// );
// let Oo = 2 * (d + 2 * r) + 2 * (s + 2 * r);
// if (d <= 120 && d >= 90 && s <= 90 && s >= 45 && r >= 2 && r <= 10) {
//   console.log("Potrebno nam je" + Oo + "metara za ogradjivanje terena");
//   d++;
//   s++;
//   r++;
// } else {
//   console.log("Uneli ste vece/manje dimenzije od recenih");
// }
// 2. zadatak
// / Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.

let broj = Number(prompt("Unesite broj iz intervala [12,16)"));
