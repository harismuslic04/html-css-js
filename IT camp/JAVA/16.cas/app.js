// replace()metoda vrsi zamenu nekoliko karaktera datog stringa.Ima 2 argumenta
// Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa

const recenica = "Danas smo podelili sertifakte za HTML,CSS i JavaScript.";

// const recenica2 = recenica.replace("Danas", "juce");
// console.log(recenica2);

let recenica2 = recenica.replace("Danas", "Juce");
console.log(recenica2);
recenica2 = recenica.replace("s", "t");
console.log(recenica2);
//za promenu svih pronalazenja datog stringa cemo koristiti regular expressions
//1. g (global)
recenica2 = recenica.replace(/s/g, "t");
console.log(recenica2);

//napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece :
//ako dati string ima vecy duzinu od 9 pravi novi string koji ce biti isecak od pola do kraja originalnog stringa.
//nakon toga novom stringu menjamo sva mala slova a sa slobom B i funkcija ce vratiti novi string koji je sastavljen od
//"ovo je novodobijena recenica," i poslednjeg izmenjenog isecka
//ako string ima duzinu <=9
//funkcija treba vratiti poruku:
// argument + {njena duzina}+"nedovoljno za dalje ispitivanje"
const Mojafunkcija = function (recenica) {
  if (recenica.length > 9) {
    let polaDuzine;
    if (recenica.length % 2 === 0) {
      poladuzine = recenica.length / 2;
    } else if (recenica.length % 2 !== 0) {
      polaDuzine = Math.ceil(recenica.length / 2);
    }
    polaDuzine =
      recenica.length % 2 === 0
        ? recenica.length / 2
        : Math.ceil(recenica.length / 2);
    const isecak = recenica.slice(polaDuzine, recenica.length);
    const novaRecenica = isecak.replace(/a/g, "B");
    const konacno = "Ovo je novodobijena recenica,".concat(novaRecenica);
    return konacno;
  } else {
    const recenica2 = recenica.concat(
      recenica.length,
      "nedovoljno za dalje ispitivanje"
    );
    return recenica2;
  }
};
console.log(Mojafunkcija("Kraj casa"));
