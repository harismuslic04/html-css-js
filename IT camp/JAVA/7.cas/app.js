//while petlja nam omogucava iteraciju kroz neki objekat
//nekoliko puta uz potencijalno odredjene uslove
//kod while petlje je neophodno na kraju koda definisati povecanje iteratora(kako ne bi smo dobili beskonacnu petlju)

//Sintaksa

//Ispisati sve brojeve od 1 do 10 koji su parni
let i = 1;
while (i < 11) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}
//traziti od korisnika da unese neki broj.Na osnovu te vrednosti izvrsiti ispis
//kvadrata brojeva od 1 do tog unetog broja

const broj = +prompt("Unesite neki pozitivan broj:");
let iterator = 1;
while (iterator <= broj) {
  console.log(iterator ** 2);
  iterator++;
}

//korisnik unosi dva broja:
//na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja
//ispisuju se brojevi od manjeg ka vecem

//do while petlja predstavlja poseban slucaj while petlje,gde se prvo izvrsava kod pa tek onda proverava uslov.

//Sintaksa:

// do{
//blok koda za izvrsavanje
// } while(uslov)

//Ispisati sve brojeve od 1 do 5
let broj3 = 1;
do {
  console.log(broj3);
  broj3++;
} while (broj3 < 6);

//Nedostatak do while petlje kroz primer.
// Ispisati sve brojeve manje od 20,krenuvsi od broja koji unosi korisnik/
let broj4 = Number(prompt("Unesite neki broj:"));
do {
  console.log(broj4);
  broj4++;
} while (broj4 < 20);

//Domaci zadatak:
//Preko switch naredbe:
console.log(new Date().getDay());
//getDay()-daje vrednost 0-6
// switch (new Date().getDay())...
//Na osnovu vrednosti koju nam daje izraz iz switch naredbe,kroz case-ove i eventualno default ispisati poruku
// "Danas je 'radni dan'"
// "Ugodno provedite vikend"
