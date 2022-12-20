// // Napraviti funkciju koja ocekuje cetvorocifren broj,a vraca broj kojem su zamenjene prva i treca cifra,poslednja i druga.
// // 4752
// // 5247

// function domaci(broj) {
//   if (broj > 9999 || broj < 1000) {
//     return "Mora cetvorocifren broj da se unese.";
//   } else {
//     const cifraJedinice = broj % 10;
//     const cifraDesetice = Math.trunc((broj % 100) / 10);
//     const cifraStotina = Math.trunc((broj % 1000) / 100);
//     const cifraHiljada = Math.trunc(broj / 1000);
//     // const cifraJedan = cifraJedinice.toString()
//     // const cifraDeset = cifraDesetice.toString()
//     // const cifraSto = cifraStotina.toString()
//     // const cifraHiljadu = cifraHiljada.toString()
//     return (
//       cifraDesetice.toString() +
//       cifraJedinice.toString() +
//       cifraHiljada.toString() +
//       cifraStotina.toString()
//     );
//   }
// }
// console.log(domaci(42));
// console.log(domaci(4752));

function menjajCifre(broj) {
  const strBroja = broj.toString;
  if (strBroja.length != 4 || isNaN(strBroja)) {
    return "Dati argument mora biti cetvorocifren broj!";
  } else {
    const prviDeo = strBroja.slice(0, 2);
    const drugiDeo = strBroja.slice(2);
    const treciDeo = drugiDeo.concat(prviDeo);
    return +treciDeo;
  }
}
console.log(menjajCifre(4752));
