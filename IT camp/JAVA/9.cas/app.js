// let recenica = "Danas cemo raditi neke operacije sa stringovima.";
// console.log(recenica);
// // console.log(typeof recenica);
// let omar = "Omar";

// Pristupanje nekom karakteru stringa se vrsi preko indeksa.
// INDEKSIRANJE IDE OD NULE.
// U SVAKOM ITERIRAJUCEM OBJEKTU, POSLEDNJI KARAKTER IMA INDEX:
// (UKUPNA DUZINA STRINGA) - 1
// console.log(omar[0]);
// console.log(omar[2]);

// Metoda za dobijanje ukupne duzine stringa je length:
// let duzinaRecenice = recenica.length;
// console.log(duzinaRecenice);
// console.log(omar.length);

// Primer. Svaki karakter neke recenice neka se ispise jedan ispod drugog.

// Kod ovakvih zadataka iterator predstavlja index pomocu kojeg pristupamo karakteru stringa.

// recenica = "Danas cemo raditi neke operacije sa stringovima.";
// const duzina = recenica.length;
// for (let i = 0; i < duzina; i++) {
//   console.log(recenica[i]);
// }

// Na osnovu unete recine od strane korisnika ispisati recenicu tako da svaki karakter ide
// jedan ispod drugog. Dok ako je neki karakter = "a",
//neka se ispise broj 5. A u slucaju da je karakter jednak "s", neka se ne ispise nista.
// let recenica1 = +prompt("Unesite recenicu");
// let duzina = recenica1.length;

// for (let i = 0; i < duzina; i++) {
//   console.log(recenica1[i]);
// }
const recenica = prompt("Unesite neku recenicu: ");
const duzina = recenica.length;
for (let i = 0; i < duzina; i++) {
  if (recenica[i] === "a") {
    console.log(5);
  } else if (recenica[i] === "s") {
    continue;
  } else {
    console.log(recenica[i]);
  }
}
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FIZZ BUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }
}
// let recenica15 =
//   "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa.";
// let recenica13 = "";
// for (i = 0; i <= recenica15.length; i++) {
//   if (
//     recenica15[i] === "a" ||
//     recenica15[i] === "e" ||
//     recenica15[i] === "i" ||
//     recenica15[i] === "o" ||
//     recenica15[i] === "u"
//   ) {
//     recenica13 += recenica15[i].toUpperCase();
//   } else if (recenica15[i - 71] === " ") {
//     recenica13 += ".";
//   } else {
//     recenica13 += recenica15[i];
//   }
// }

// console.log(recenica13);
