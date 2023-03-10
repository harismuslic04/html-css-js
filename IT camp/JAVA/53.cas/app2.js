// Promise je JavaScript objekat koji predstavlja mesto za rezultate asihrone funkcije sve dok traje izvrsavanje asihrone operacije

// const cizburger = new Promise((resolve, reject) => {
//   const response = 200;
//   if (response >= 200 % response < 300) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// cizburger
//   .then(() => console.log("Dobio sam cizburger"))
//   .catch(() => console.log("Nisam dobio obrok"))
//   .finally(() => console.log("Obecanje je zavrseno"));

const promise2 = new Promise((resolve, reject) => {
  const response = [1, 4, 7, 9];
  if (response.length > 2) {
    resolve();
  } else {
    reject();
  }
});

promise2
  .then(() => console.log("Niz je pravi"))
  .catch(() => console.log("burazere"))
  .finally(() => console.log("7-0"));

function zadatak(arr1) {
    brojac=0;
  const promise3 = new Promise((resolve, reject) => {
     
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i]==="a"||arr1[i]==="e"arr1[i]==="a"arr1[i]==="a"arr1[i]==="a")
        brojac++;
    }
    if()
  });
}
