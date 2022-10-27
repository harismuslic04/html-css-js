//OPERATORI U JAVA SCRIPTU//
//Podelicemo operatore u 6 grupa:

// 1.Aritmeticki operatori(Artimetic operators)
// 2.Operatori dodele vrednosti(Assigment operators)
// 3.String operatori(String operators)
// 4.Operatori poredjenja(Comparison operators)
// 5.Logicki operator(Logical operators)
// 6.Tip operatori(Type operators)

// 1.Aritmeticki operatori (Artimetic operators)
// 1.1 +operator sabiranja
console.log(4 + 5);
//1.2 -operator oduzimanja
console.log(4 - 5);
//1.3 *operator mnozenja
console.log(4 * 5);
//1.4 /operator deljenja
console.log(20 / 5);
//1.5 **operator stepenovanja
console.log(2 ** 3);
//1.6 %  Modulo(ostatak pri deljenju dva broja)
console.log(9 % 3); //2
console.log(12 % 3); //0

//1.7 ++ Increment (povecava vrednost za 1)
let x = 5;
//postfiksni operator
x++; //x=x+1
console.log(x);

let y = 11;
//prefiksni operator
console.log(++y);

//1.8 --Decrement (smanjuje vrednost za 1)
let z = 99;
//posfiksni operator
z--;
console.log(z);

let w = 65;
//prefiksni operator
console.log(--w);

//2.Operatori dodele vrednosti(Assigment operators)
//2.1 = dodeljivanje vrednosti nekoj promenljivoj
//2.2 += primer: w+= dodavanje odredjene vrednosti na postojecu promenljivu
w += 5;
console.log(w);
//2.3 -=oduzimanje odredjene vrednosti na postojecu promenljivu
z -= 3;
console.log(z);
// 2.4 *=mnozenje odredjene vrednosti na postojecu promenljivu
z *= 2;
console.log(z);
//2.5 /= deljenje odredjene vrednosti na postojecu promenljivu
z /= 5;
console.log(z);
//2.6 modul odredjene vrednosti na postojecu promenljivu
x %= 2;
console.log(x);

//2.7 **= stepenovanje odredjene vrednosti na postojecu promenljivu
y **= 2;
console.log(y);

// 3.String operatori(String operators)

//Jedan od nacina za spajanje stringova je koriscenjem + operatora
let prviDeo = "danas je Omar";
let drugiDeo = "doneo pizzu";
console.log(Boolean(prviDeo + " " + drugiDeo));

// Neki slucajevi kod sabiranja:
console.log("Omar" + 3);
console.log(3 + "Omar");
console.log(typeof (3 + "Omar"));
console.log(3 + "2"); //ne sabira brojeve nego pravi string 32
console.log(4 - "2");
console.log(4 * "2");
console.log(4 / "2");
console.log(4 ** "2");

console.log(27 / "7dana"); //Nan je vrednost za nekorektan broj

// 4.Operatori poredjenja(Comparison operators)

//4.1 == - Poredjenje vrednosti
let a = 5;
let b = 7;
let c = a;
console.log(a == c);
console.log(a == b);
c += 2;
console.log(c);
console.log(a);

//4.2 === - Proverava jednakost tipa I jednakost vrednosti
let d = "5";
console.log(a == d);
console.log(a === d); // pritom proverava I tip

//4.3 != - proverava razlicitost vrednosti

console.log(b != c);

//4.4 !== - ispituje da li je razlicita vrednost ILI razlicit tip
console.log(a !== d);

//4.5 > da li je prva vrednost veca od druge
console.log(b > c);
//4.6 < da li je druga vrednost manja od druge
console.log(14 < -19);
//4.7 >= da li je prva vrednost veca ili jednaka drugoj
console.log(9 >= 9);
//4.8 <- da li je prva vrednost manja ili jednaka drugoj
console.log(9 <= 13);
//4.9 ? ternarni operator
//uslov ? (radnja koja se izvrsava ako je uslov zadovoljen)
//        :
//        (radnja koja se izvrsava ako uslov nije zadovoljen)
let isSunny = false;
isSunny
  ? console.log("Vreme je suncano." + "ponesite kisobran")
  : console.log("Vreme je kisovito." + "ponesite kisobran");

// 5.Logicki operator(Logical operators)
// && - and (i) -zahteva zadovoljavanje svih  uslova

let prom1 = 4;
let prom2 = 19;
let prom3 = -3;

prom1 > 0 && prom2 > 0 && prom3 > 0
  ? console.log("Sve tri promenljive su pozitivni brojevi")
  : console.log("Nisu sve promenljive pozitivni brojevi");

//5.2 || or (ili) -zahteva zadovoljavanje bar jednog od ponudjenih uslova
prom1 > 0 || prom2 > 0 || prom3 > 0
  ? console.log("Nasli smo bar jednu promenljivu vecu od 0")
  : console.log("Nema promenljive vece od 0");

console.log(!Boolean(prviDeo + " " + drugiDeo));
