//prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n
let n = +prompt("Unesite neki broj od [12,16)");
if (n < 12 || n > 16) {
  console.log("Uneli ste broj izvan domena");
} else if (n >= 12 && n < 16) {
  while (n >= 1) console.log(n);
  console.log(n * n);
  console.log(n - 25);
  n--;
}
