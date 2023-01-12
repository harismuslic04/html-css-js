// callback funkcije //
//callback funkcija predstavlja funkciju koju saljemo kao argument neke druge funkcije
// function glavnaFunkcija(func) {
//   console.log("radnja unutar glavne funkcije");
//   func();
//   console.log("kraj glavne funkcije");
// }

// function callback() {
//   console.log("radnja unutar callback funkcije");
// }

// glavnaFunkcija(callback);

function glavnaFunkcija2(callback) {
  console.log("ovo predstavlja glavna funkcija");
  callback(2, 3);
  console.log("ovde se zavrsava funkcija");
}
function callback(par1, par2) {
  console.log(par1 ** par2);
}
glavnaFunkcija2(callback);
