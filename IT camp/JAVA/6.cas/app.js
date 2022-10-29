//ispisati prvih deset brojeva u konzoli,jedan ispod drugog
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//Petlja (loop) predstavlja nacin da se neki kod ispise uz odredjene uslove vise puta

//for petlja - Sintaksa :
// for (statement1; statement2; statement3) {
//kod za izvrsavanje u svakoj iteraciji
// }

//statement1 predstavlja definisanje promenljive koja predstavlja iterator
//statement2 predstavlja uslov ili granicu do koje vrednosti ce taj iterator da ide
//statement3 predstavlja povecanje ili smanjenje iteratora koje se desi na kraju svake iteracije.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Ispisati brojeve od 1-10 izuzev broja 2 i 5

//1.nacin
for (let i = 1; i < 11; i++) {
  if (i === 2 && i !== 5) {
    console.log(i);
  }
}

// continue keyword(rezervisana rec) ako se nadje u nekoj ineraciji,zapravo oznacava da se ta iteracija
// zanemari i da se nastavi sa sledecom

//2.nacin
for (let i = 1; i < 11; i++) {
  if (i === 2 || i === 5) {
    continue;
  } else {
    console.log(i);
  }
}

// break keyword(rezervisana rec) predstavljha da od tog trenutka for petlja prestaje sa radom

//ispisati sve brojeve od 1 do 10 ako je neki broj deljiv sa 7 neka se prekine petlja

for (let i = 1; i < 11; i++) {
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}

//1.nacin
for (let i = 1; i < 21; i++)
  if (i % 2 === 1 || i % 2 === 2) {
    continue;
  } else {
    console.log(i);
  }

//2.nacin
for (let i = 1; i < 21; i++)
  if (i % 2 === 0) {
    console.log(i);
  }

//DOMACIII
//1.nacin
for (let i = 1; i < 21; i++)
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
//2.nacin
for (let i = 1; i < 21; i++)
  if (i % 2 === 1 || i % 2 === 2) {
    console.log(i);
  }

//2.zadatak
for (let i = 50; i < 101; i++)
  if (i % 5 === 0) {
    console.log(i);
  }

// 3.zadatak

// for (let i = 6; i < 15; i++)
//   if (i * i === 49) {
//     console.log(i);
//   }

for (let i = 6; i < 15; i++) console.log(i ** 2);

//4 zadatak
let sum = 0;
for (let i = 10; i < 20; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(sum);
