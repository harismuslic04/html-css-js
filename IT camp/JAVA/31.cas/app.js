// Novi zapis for petlje,jihu se odnosi na sve iterirajuce objekte
// for (let i of nizz){
// console.log(i)
//}

// unshift() metoda dodaje na pocetku niza jedan ili vise elemenata
// unshift() prikazuje novu duzinu niza
const niz = ["cetvrtak", "petak", "subota"];
niz.unshift("sreda");
console.log(niz);

// shift() metoda brise prvi element niza i svim ostalim elementima smanjuje index zz 1
niz.shift();
console.log(niz);

// delete ketword za brisanje odredjenog elementa unutar niza
// brise se element ali ostaje rupa u nizu (empty item)

console.log(niz.length);

delete niz[2];
console.log(niz);

// concat() metoda se koristi za spajanje nizova,sa tim sto kkao argument mozemo poslati i string
//ne mora islkucivo biti niz

const crveni = ["liverpul", "arsenal"];
const plavo = ["celsi", "city"];
const grupa = crveni.concat(plavo, "brighton");
console.log(grupa);

// iz naseg niza grupa napraviti dva niza muskarci i devojke,s tim sto se Omar ne sme naci nigde
nizzz = ["Haris", "Aladin", "Alen", "Hatidza", "Merisa"];

function podeliNiz(niz) {
  const muskarci = [];
  const devojke = [];
  for (let osoba of niz) {
    if (osoba === "Omar") {
      continue;
    } else if (osoba[osoba.length - 1] === "a") {
      devojke.push(osoba);
    } else {
      muskarci.push(osoba);
    }
  }
} //????????

//napraviti funkciju koja pravi novi niz,koji ce sadrzati samo elemente koji su se nalazili na neparnim pozicijama unutar originalnog niza
function neparniTask(par2) {
  const neparni = [];
  for (let broj of par2) {
    if (broj % 2 !== 0) {
      neparni.push(broj);
    }
  }
  return neparni;
}
console.log(neparniTask([22, 34, 12, 51, 562, 15, 782, 91]));

//domaci isto ovo samo umesto neparnih parni
function pozitivniTask(par2) {
  const pozitivni = [];
  for (let broj of par2) {
    if (broj > 0) {
      pozitivni.push(broj);
    }
  }
  return pozitivni;
}

console.log(pozitivniTask([-2, 0, 22, 12, 51, 31, -21, -25, 1, -2]));
