const domaci = () => {
  const recenica = prompt("Unesite neku recenicu: ");
  let polaDuzine;
  //   if (recenica.length % 2 === 0) {
  //     polaDuzine = recenica.length / 2;
  //   } else {
  //     polaDuzine = Math.round(recenica.length / 2);
  //   }
  polaDuzine =
    recenica.length % 2 === 0
      ? recenica.length / 2
      : Math.round(recenica.length / 2);
  const prva = recenica.toUpperCase();
  const druga = recenica.toLowerCase();
  const prvaPol = recenica.slice(0, polaDuzine).toUpperCase();
  const drugaPol = recenica
    .substring(polaDuzine, recenica.length)
    .toLowerCase();
  //   const treca = prvaPol + drugaPol;
  const treca = prvaPol.concat(drugaPol);
  const cetvrta = recenica.replace(/skola/gi, "fakultet");
  const peta = recenica.substr(0, 10);
  const sesta = recenica.slice(-10);
  return prva.concat(
    "\n",
    druga,
    "\n",
    treca,
    "\n",
    cetvrta,
    "\n",
    peta,
    "\n",
    sesta
  );
};

// Izostavljajuci drugi argument kod slice() metode se uzima isecak do kraja stringa.
// const isecak = "Recenica za primenu slice metode jednim argumentom.".slice(12);
// console.log(isecak);
console.log(domaci());
