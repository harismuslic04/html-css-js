// 2.  Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B, tako što se kombinuju prvi sa prvim, drugi sa drugim, treći sa trećim znakom itd. Ako je jedan string duži od drugog, na kraju samo dodati znakove viška. Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled".

const drugi = (recenica1, recenica2) => {
  const duzina1 = recenica1.length;
  const duzina2 = recenica2.length;
  //   let duzina;
  //   if (duzina1 > duzina2) {
  //     duzina = duzina1;
  //   } else {
  //     duzina = duzina2;
  //   }
  const duzina = duzina1 > duzina2 ? duzina1 : duzina2;
  let recenica3 = "";
  for (let i = 0; i < duzina; i++) {
    if (recenica1[i] !== undefined && recenica2[i] !== undefined) {
      recenica3 += recenica1[i] + recenica2[i];
    } else if (recenica1[i] === undefined) {
      recenica3 += recenica2[i];
    } else if (recenica2[i] === undefined) {
      recenica3 += recenica1[i];
    }
  }
  return recenica3;
};
console.log(drugi("PERA", "sladoled"));
console.log(drugi("OVO JE SADA DUZI STRING", "sladoled"));

// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
// console.log(protectEmail("robin_singh@example.com"));
// "robin...@example.com"

const protectEmail = (email) => {
  let index = 0;
  for (let i = 0; i < email.length; i++) {
    if (
      email[i] === "." ||
      email[i] === "_" ||
      email[i] === "1" ||
      email[i] === "0" ||
      email[i] === "2" ||
      email[i] === "3" ||
      email[i] === "4" ||
      email[i] === "5" ||
      email[i] === "6" ||
      email[i] === "7" ||
      email[i] === "8" ||
      email[i] === "9"
    ) {
      index = i;
      break;
    }
  }
  const indexAt = email.indexOf("@");
  const prviDeo = email.slice(0, index);
  const drugiDeo = email.slice(indexAt);
  const noviEmail = prviDeo.concat("...", drugiDeo);
  return noviEmail;
};

console.log(protectEmail("dzenan_kosuta@hotmail.com"));
console.log(protectEmail("dzenan.mecinovic@hotmail.com"));
console.log(protectEmail("dzenan5zecic@hotmail.com"));
