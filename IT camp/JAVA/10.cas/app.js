// const recenica = prompt("Unesite neku recenicu: ");
// const duzina = recenica.length;
// for (let i = 0; i < duzina; i++) {
//   if (recenica[i] === "a") {
//     console.log(5);
//   } else if (recenica[i] === "s") {
//     continue;
//   } else {
//     console.log(recenica[i]);
//   }
// }

//Stringovi su immutable promenljive,nije moguce vrsiti modifikaciju postojeceg stringa.
//Alternativa je da napravimo novi string i tada je moguce dodavati vrednosti kad god zelimo
let rec1 = "Petak";
console.log(rec1[2]);
//toUpperCase() -metpda koja pretvara ceo string u velika slova

let PETAK = rec1.toUpperCase();
console.log(PETAK);

//toLowerCase()- metoda koja pretvara ceo string u mala slova
let rec2 = "HARIS";
let haris = rec2.toLowerCase();
console.log(haris);

const recenica0 =
  "ZelImo dAtu recenicU PRIKazati malim,Isto tAKO i velikIM SLOVima";
const recenica01 = recenica0.toLowerCase();
const recenica02 = recenica0.toUpperCase();
console.log("Recenica ispisana malm slovima ce bitit : \n" + recenica01 + ".");

const recenica =
  "sledece subote cemo imati test,koji predstavlja kraj prvog ciklusa.nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it campa";
//ISPISATI NOVU RECENICU GDE CE SVAKA REC POCINJATI VELIKIM SLOVOM
let novaRecenica = "";
for (let i = 0; i < recenica.length; i++) {
  if (
    i === recenica.length - 1 ||
    recenica[i + 1] === "." ||
    recenica[i + 1] === ","
  ) {
    novaRecenica += recenica[i].toUpperCase();
  } else if (recenica[i + 1] === " ") {
    novaRecenica += recenica[i].toUpperCase();
  } else {
    novaRecenica += recenica[i];
  }
}
console.log(recenica);
console.log(novaRecenica);

//1. Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).Npr za string "Mama ima momu",dobija se rezultat 5

//2.Prebrojati koliko ima znakova koji su cifre u unetom stringu.
