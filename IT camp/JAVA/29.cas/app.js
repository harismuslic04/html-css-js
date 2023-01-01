//Metode za prikazivanje datuna:

const trenutno = new Date();
console.log(trenutno);

// 1. toString()
console.log(trenutno.toString());

// 2. toUTCString()
console.log(trenutno.toUTCString());

// 3. toDateString()
console.log(trenutno.toDateString());

// 4. toISOString()
console.log(trenutno.toISOString());

// 5. toTimeString()
console.log(trenutno.toTimeString());

// 6. toLocaleTimeString()
console.log(trenutno.toLocaleTimeString());

// Get metode:

// Koristimo ih za dobijanje informacija iz Date objekta.

// getFullYear()
console.log(trenutno.getFullYear());

// getMonth()
console.log(trenutno.getMonth() + 1);

// getDate()
console.log(trenutno.getDate());

// getDay()
let nedelja = new Date("2022 Dec 25");
console.log(nedelja.getDay());

// getHours()

// getMinutes()

// getSeconds()

// getMiliseconds()

// getTime()
console.log(trenutno.getTime());
//Vraca broj milisekundi od 1970. 1.januar

// Set metode:

// Dozvoljavaju menjanje nekih vrednosti koda Date objekta

// setDate()
trenutno.setDate(19);
console.log(trenutno);

// setFullYear()
trenutno.setFullYear(2015);
console.log(trenutno);

// setHours()
trenutno.setHours(10);
console.log(trenutno);

// setMinutes()

// setSeconds()

// setMiliseconds()

// setTime()
