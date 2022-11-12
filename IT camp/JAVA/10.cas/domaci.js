// Domaci zadatak.
// 1.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo). Npr. za string 'Mama ima momu', dobija se rezultat 5.

// const recenica = prompt("Unesite neku recenicu.");
// let s = 0;
// let duzina = recenica.length;
// let i = 0;
// while (i < duzina) {
//   if (recenica[i] === "M") {
//     s++;
//   } else if (recenica[i] === "m") {
//     s++;
//   }
//   console.log(s);
//   i++;
// }

// 2.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.

// const recenica = prompt("Unesite neku recenicu za brojevima.");
// let duzina = recenica.length;
// let brojac = 0;
// for (let i = 0; i < duzina; i++) {
//   if (
//     recenica[i] === "0" ||
//     recenica[i] === "1" ||
//     recenica[i] === "2" ||
//     recenica[i] === "3" ||
//     recenica[i] === "4" ||
//     recenica[i] === "5" ||
//     recenica[i] === "6" ||
//     recenica[i] === "7" ||
//     recenica[i] === "8" ||
//     recenica[i] === "9"
//   ) {
//     brojac++;
//   } else {
//     continue;
//   }
// }
// console.log(brojac);

// for(let i=0;i< recenica2.length;i++)
// {
//     if (isNaN(recenica[i])) {
//         continue
//     } else{
//         brojac2++
//     }
// }
// console.log(brojac2);

// Na osnovu unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog. Dok ako je neki karakter = "a", neka se ispise broj 5. A u slucaju da je karakter jednak "s", neka se ne ispise nista.
let recenica3 = prompt("Unesite recenicu");
for (let i = 0; i < recenica3.length; i++) {
  if (recenica3[i] === "a") {
    console.log(5);
  } else if (recenica3[i] === "s") {
    continue;
  } else {
    console.log(recenica3[i]);
  }
}
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
