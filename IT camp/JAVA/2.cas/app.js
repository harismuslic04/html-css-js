//Java Script moze prikazati podatke na nekoliko nacina:

//1. innerHTML
document.getElementById("p").innerHTML = "Paragraf";

//2. write()
document.write(); // najcesci nacin za testiranje nekog koda

//3.alert()
alert("Zdravo");

//4.console.log() p - ispitivanje u konzoli
console.log("Poruka za ispis u konzoli");

// Pravila nazivanja promenljivih:

//Promeljiva u JS mora poceti sa nekim od sledecih znakova:
//1.Slovo (veliko ili malo) A-Z,a-z
//2. $ moze biti pocetni karakter neke promenljive
//3, _ moze biti -||-

//Broj moze biti sadrzan u nazivu promenljive,ali promenljiva ne sme pocinjati brojem.
proseOcena = 4.14; //preporucljiv nacin zapisivanja promenljive
prosek_ocena = 4.14; //korektno
ProsekOcena = 4.14; //korektno

//postoje 4 nacina za deklarisanje neke promenljive:
//1. prom=12 -dodeljivanje vrednosti bez da smo prethodno izvrsili deklaraciju

//2. Koriscenjem var keyword(rezervisane reci)
// var je koriscena na starijim browserima (sve se manje koristi)
//var a=5

//3.koriscenjem let keyword (rezervisane reci) -
//let se najcesce koristi kada postoji sansa da se vrednost date promenljive menja.

//4.koriscenjem const keyword (rezervisane reci) -
//const se koristi za definisanje konstanti koje nece menjati vrednost

//Promenljive odnosno varijable predstavljaju kontejnere za skladistenje vrednosti.
