function pozitivniTask(par2) {
  const pozitivni = [];
  for (let broj of par2) {
    if (broj > 0 && !isNaN(broj)) {
      pozitivni.push(broj);
    }
  }
  return pozitivni;
}

//iz niza izdvojiti neparne brojeve
function neparniTask(par2) {
  const neparni = [];
  for (let broj of par2) {
    if (broj % 2 !== 0 && !isNaN(broj)) {
      neparni.push(broj);
    }
  }
  return neparni;
}
//iz niza izdvojiti parne brojeve
function parniTask(par1) {
  const parni = [];
  for (let broj of par1) {
    if (broj % 2 === 0 && !isNaN(broj)) {
      parni.push(broj);
    }
  }
  return parni;
}
