//  Funkcija u javascriptu predstavlja blok koda koji se izvrsava samo prilikom pozivanja iste
// mozemo je definisati putem :
// 1.function keyworda
// 2. arrow funkcion sintakse

//1. function keyword

//pravimo funkciju koja sabira broj 3 i broj 5:
function zbirTriIpet() {
  const zbir = 3 + 5;
  return zbir;
}
console.log(zbirTriIpet());

//pravimo funkciju koja sabira dva broja:
function zbirDvabroja(par1, par2) {
  return par1 + par2;
}
console.log(zbirDvabroja(5, 11));

//Napraviti funkciju koja vraca zbir kvadrata dva broja.
function zbirkvadrata(par1, par2) {
  return par1 * par1 + par2 * par2;
}
console.log(zbirkvadrata(2, 3));

//defaultna vrednost nekog parametra
//napraviti funkciju koja vraca zbir kvadrata dva broja.Ako se izostavi drugi element funkcija ga racuna kao 0
//1.nacin
function zbirKvadrata2(a, b) {
  if (b === undefined) {
    return a ** 2;
  } else {
    return a ** 2 + b ** 2;
  }
}
console.log(zbirKvadrata2(4));
//2 nacin
function zbirKvadrata22(a, b = 0) {
  return a ** 2 + b ** 2;
}
console.log(zbirKvadrata22(5));
//jos jedan nacin definisanja funkcijepreko function keyword
const aritmetickaVrednost = function (par1 = 1, par2 = 1, par3 = 1) {
  return (par1 + par2 + par3) / 3;
};
console.log(aritmetickaVrednost(3, 4));

//napraviti funkciju povrsina koja uzima dve vrednosti.
//Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku
//ako su razlicite vrednosti da vraca povrsinu pravougaonika zu odredjenu poruku
function povrsina(a, b) {
  if (a == b) {
    return "Povrsina kvadrata je" + a ** 2;
  } else {
    return "povrsina pravougaonika je" + a * b;
  }
}
console.log(povrsina(2, 2));
