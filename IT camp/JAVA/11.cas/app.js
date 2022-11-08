//Napraviti novu recenicu koja ce imat isti tekst ali bez razmaka

let recenica = "Omare jesi li spremio test";
const duzina = recenica.length;
let novaRecenica = "";

for (let i = 0; i < duzina; i++) {
  if (recenica[i] !== " ") {
    novaRecenica += recenica[i];
  }
}
console.log(novaRecenica);

//napraviti novu recenicu gde ce se umesto slova "a" ispisivati "t".Dok ako se posle slova "a" nalazi slovo "n"
//pisace "d" umesto "a"
const recenica2 = prompt("Unesite recenicu");
let novaRecenica2 = "";
for (let i = 0; i < recenica2.length; i++) {
  if (recenica2[i] === "a" && recenica2[i + 1] === "n") {
    novaRecenica2 += "d";
  } else if (recenica2[i] === "a") {
    novaRecenica2 += "t";
  } else {
    novaRecenica2 += recenica2[i];
  }
}
console.log(novaRecenica2);
