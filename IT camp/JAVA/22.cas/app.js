// function menjanje(recenica) {
//   let recenicaNova = " ";
//   for (i = 0; i < recenica.length; i++) {
//     if (recenica.length % 2 !== 0 && i === recenica.length - 1) {
//       recenicaNova += recenica[i];
//     } else if (i % 2 === 0) {
//       recenicaNova += recenica[i + 1];
//     } else {
//       recenicaNova += recenica[i - 1];
//     }
//   }
//   return recenicaNova;
// }
// console.log(menjanje("Haris nije dosao dva casa"));

// function drugi(recenica1, recenica2) {
//   const duzina1 = recenica1.length;
//   const duzina2 = recenica2.length;
//   const duzina = duzina1 > duzina2 ? duzina1 : duzina2;
//   let recenica3 = " ";
//   for (i = 0; i < duzina; i++) {
//     if (recenica1[i] !== undefined && recenica2[i] !== undefined) {
//       recenica3 += recenica1[i] + recenica2[i];
//     } else if (recenica1[i] === undefined) {
//       recenica3 += recenica2[i];
//     } else if (recenica2[i] === undefined) {
//       recenica3 += recenica1[i];
//     }
//   }
//   return recenica3;
// }
// console.log(drugi("Ovo je sada duzi string,sladoled"));
//POJAVLJUJE MI ERROR NA LENGTH RECENICA2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
