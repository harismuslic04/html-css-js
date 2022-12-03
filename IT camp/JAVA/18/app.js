//napraviti niz od stringa,tako da se elementi niza prave od svake reci "decembar".Rec "Decembar" ne
//sme biti deo nijednog elementa niza.
const recenica2 =
  "Decembar je poslednji mesec u godini. u decembar pocinje zima,decembar je najhladniji mesec u godini";
const niz = recenica2.split(/decembar/i);
console.log(niz);

//search metode:

//indexOf()metoda nam vraca prvu poziciju gde zapravo pocinje poslati argument(jedan ili vise karaktera)
//kada se radi o nekom stringu

const pozicija = recenica2.indexOf("j");
console.log(pozicija);

//ako trazimo poziciju nepostojeceg stringa rezultat ce biti -1
//Drugi element predstavlja poziciju od kojeg krecemo sa trazenjem stringa
const pozicija2 = recenica2.indexOf("mesec", 30);
console.log(pozicija2);

//lastindexOf()metoda nam vraca poslednju poziciju gde se zapravo nalazi poslati argument (jedan ili vise karaktera)
//kada se radi o nekom stringu
//ako trazimo poziciju nepostojeceg stringa rezultat ce biti -1

//Napraviti funkciju koja na osnovu parametra ispituje pojavljivanje reci "ko osvaja"
//Ako se pojavljuje vise puta dati string,vratiti poziciju prvog i poslednjeg pojavljivanja,ako se pojavljajuje jednom,vratiti poziciju pojavljivanja,dok ako se ne pojavljuje dati string vratiti poruku : "nismo pronasli dati string"

function position(sentence) {
  const firstApp = sentence.indexOf("ko osvaja");
  const lastApp = sentence.lastIndexOf("ko osvaja");
  if (firstApp === -1) {
    return "Nismo pronasli dati string";
  } else if (firstApp === lastApp) {
    return "Reci 'ko osvaja' se nalaze jednom u datoj recenici";
  } else if (firstApp !== lastApp) {
    return (
      "Prvo pojavljivanje reci 'ko osvaja' se nalazi na" +
      firstApp +
      "poziciji.\nPoslednje pojavljivanje reci 'ko osvaja se nalazi na'" +
      lastApp +
      "poziciji"
    );
  }
}
console.log(
  position("ko osvaja svetsko prvenstvo ove godine.Stvarno ko osvaja")
);
