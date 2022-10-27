//1. var
var x; //deklarisanje promenljive x (obezbedjivanje lokacijske memorije za promenljivu x)
x = 15; //inicijalizacija promenljive x(dodela vrednosti unapred deklarisanoj promenljivoj x)
//var x=15
console.log(x);

var x; //redaklarisanje promenljive x definisane putem var keyword je dozvoljeno bilo gde u prostoru
x = 22; //reinicijalizacija promenljive x definisane putem var keyword je dozvoljeno bilo gde u prostoru

//2.let
// let y=14 definisanje promenljive za koju postoji mogucnost promene vrednosti
let y; //deklarisanje promenljive x (obezbedjivanje lokacijske memorije za promenljivu y)
y = 14; //inicijalizacija promenljive x(dodela vrednosti unapred deklarisanoj promenljivoj y)
console.log(y);

//redaklarisanje promenljive definisane putem let keyword nije dozvoljeno ako se radi o istom prostoru
//reinicijalizacija promenljive definisane putem let keyword je dozvoljeno u bilo kom prostoru
y = 12;
console.log(y);

//promenljive koje su definisane putem let ili const keyword nam obezbedjuju Block Scope
{
  //prepoznaje se promenljiva iz Global Scopa
  let y = 19;
  console.log(y); //redaklaracija promenljive definisane putem let, u drugom polju je dozvoljena
}
//ispusuje se 12 odnosno poslednje dodeljena vrednost unutar Global scope
console.log(y);

//3.const, moraju odjednom biti deklarisane i inicijalizovane
const z = 26;
console.log(z);

//const z=26; //redeklarisanje promenljive putem const nije dozvoljeno kada se radi o istom prostoru
n;
//Sve karakteristike vaze za promenljive definisane putem let u block scope,vaze i za promenljive definisane putem const keyloga
