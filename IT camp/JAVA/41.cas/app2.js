// JS objekti su mutable(promenljivi)//

const dzenan = {
  ime: "Dzenan",
  prezime: "Mecinovic",
  godine: 19,
};
dzenan2 = dzenan;
console.log(dzenan2);
dzenan2.prezime = "Kosuta";
dzenan2.godine = 26;
console.log(dzenan2);
console.log(dzenan);

// Brisanje svojstava iz objekta:

const mitar = {
  ime: "Mitar",
  prezime: "Vranic",
  godine: 20,
  skola: "Prva tehnicka",
};
delete mitar.skola; // delete keyword se koristi za brisanje elemeneta
//delete obj.property brise i key i value
console.log(mitar);

// 2. nacin
// delete mitar["skola"]

// Napomena.
// Vrednosti nekog objekta mogu biti
// Objekti
// Nizovi
// Funkcije...

// Konvertovanje objekta u niz:
// Object.values(obj)
const niz = Object.values(mitar);
console.log(niz);

// Dodavanje novih svojstava
mitar.punoletnost = true;
console.log(mitar);

// Domaci zadatak:
// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;
myCar.povecanjeBrzine = function (ubrzanje) {
  if (this.trenutnaBrzina + ubrzanje > this.maksimalnaBrzina) {
    return `nije moguce voziti preko maksimalne brzine`;
  } else {
    this.trenutnaBrzina += ubrzanje;
  }
};

myCar.povecanjeBrzine(30);
console.log(myCar);

myCar.smanjenjeBrzine = function (smanjenje) {
  if (this.trenutnaBrzina - smanjenje < 0) {
    return `Ne mozete smanjiti brzinu za tu vrednost`;
  } else {
    this.trenutnaBrzina -= smanjenje;
  }
};

console.log(myCar.smanjenjeBrzine(40));
myCar.smanjenjeBrzine(25);
console.log(myCar);

// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezeika
// 5. setNickName - metoda sastavljen od prva dva slova imena i prva dva slova prezimena

const objekat = {};

firstname = "haris";
lastname = "muslic";
lang = "bosanski";
pricam = "srpski";
jezik = function () {
  return (lang = pricam);
};
imeprezime = function () {
  return (
    this.firstname[0] + this.firstname[1] + this.lastname[0] + this.lastname[1]
  );
};

console.log(imeprezime());
console.log(jezik());
