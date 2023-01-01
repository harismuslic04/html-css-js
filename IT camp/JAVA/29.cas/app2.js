// 1. Osnovni tipovi podataka
// (primitivni tipovi podataka)
// (vrednosni tipovi podataka)

// 2. (referentni tipovi podataka)
// neprimitivni tipovi podataka

let brojGodina = 26;
let brojTvojihGodina = brojGodina;

console.log(brojTvojihGodina);

brojTvojihGodina = 22;
console.log(brojTvojihGodina);

console.log(brojGodina);

let godine = [20, 21, 18, 17, 17, 19, 18, 17, 18, 19];
let noveGodine = godine;

console.log(noveGodine);
noveGodine.push(34);

console.log(noveGodine);
console.log(godine);
//kod neprimitivnih tipova podataka promena kod jednog utice i na drugu vrednost tj. u ovom slucaju na nizu
//dok kod primitivnih tipova podataka nije taj slucaj
