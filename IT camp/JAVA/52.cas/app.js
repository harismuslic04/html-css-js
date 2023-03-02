function User(ime, prezime) {
  this.ime = ime;
  this.prezime = prezime;
}
const bakir = new User("Bakir", "Ujkanovic");
console.log(bakir);

class Person {
  ime = "default";
  prezime;
  godine;

  constructor(ime, prezime, brGodina) {
    this.ime = ime;
    this.prezime = prezime;
    this.godine = brGodina;
  }

  imeIPrezime() {
    return `${this.ime} ${this.prezime}`;
  }
}

// const person1 = new Person();
// console.log(person1);
const person1 = new Person("Mehmed", "Kucevic", 15);
console.log(person1);
//person 1 moze pristupiti bilo kojoj metodi iz clase Person()
class Product {
  static IncreaseForTen = 1.1;
  constructor(name, price, desc, weight) {
    this.name = name;
    this.price = price;
    this.description = desc;
    this.weight = weight;
  }
  static IncreasePrice() {
    console.log(
      `This method will increase price for our product for 10% multiplaying current price by ${this.IncreaseForTen}`
    );
  }
}

const socks = new Product("white socks", 120, "100% cotton", 50);
console.log(socks);
console.log(Product.increaseForTen);
console.log(Product.IncreasePrice());
//ne mozemo pristupiti statickoj metodi iz objekta ,vec samo direktno preko klase
//console.log(socks.IncreasePrice)

//  Inheritance

class Person1 {
  constructor(ime, prezime, pol, starost) {
    this.ime = ime;
    this.prezime = prezime;
    this.pol = pol;
    this.starost = starost;
  }
  getInfo() {
    console.log(`${this.ime} ${this.prezime} ima ${this.starost} godina`);
  }
}
const person = new Person1("Mitar", "Vranic", "M", 20);
console.log(person1);
console.log(person.getInfo());

class Student extends Person1 {
  constructor(
    ime,
    prezime,
    pol,
    starost,
    brojIndeksa,
    godinaStudija,
    prosecnaOcena
  ) {
    super(ime, prezime, pol, starost);
    this.brojIndeksa = brojIndeksa;
    this.godinaStudija = godinaStudija;
    this.prosecnaOcena = prosecnaOcena;
  }
  getInfo() {
    console.log(
      `${this.ime} ima ${this.starost} godina.Trenutno je na ${this.godinaStudija} godini studija i prosecna ocena mu je ${this.prosecnaOcena}`
    );
  }
}

const student = new Student("Amer", "Honic", "M", 19, 123321, 1, 7.77);
console.log(student);
console.log(student.getInfo());
