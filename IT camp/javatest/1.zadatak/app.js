let broj1 = +prompt("Unesite neki broj:");
if (isNaN(broj1) || broj1 < 1) {
  console.log("Niste uneli broj");
}
for (let i = 1; i <= broj1; i++) {
  console.log(broj1 * broj1);
}
