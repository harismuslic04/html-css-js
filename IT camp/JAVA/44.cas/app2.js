// Consturction function for Objects:

function User(firstName, lastName, score) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.score = score;
}

const nikola = new User("Nikola", "Bozovic", 4);
console.log(nikola);

// Svi objekti u JavaScriptu su povezani sa nekim Prototype Objektom.Tako da mozemo reci da svaki objekat ima Prototype
// Prototype je objekat koji sadrzi odredjena svojstva i metode

User.prototype.incrementScore = function () {
  this.score += 1;
};
nikola.incrementScore();
console.log(nikola);

// pravljenje objekta preko keyword
const obj3 = new Object({
  name: "Aladin",
  age: 19,
});
console.log(obj3);

// Napraviti funkciju koja vraca novi niz, gde je svaki element objekat sa vrednostima title i budget.
const movies = [
  { title: "Inception", rating: 8, budget: "230M" },
  { title: "Interstelar", rating: 5, budget: "200M" },
  { title: "Godfather", rating: 9, budget: "280M" },
  { title: "Home Alone", rating: 4, budget: "300M" },
  { title: "Bad boys", rating: 8, budget: "180M" },
];
console.log(movies[1].title);

const movies2 = movies.map((element) => {
  return {
    title: element.title,
    budget: element.budget,
  };
});
console.log(movies2);

const zadatak = [
  { title: "polozio", rating: 8, budget: "230M" },
  { title: "Interstelar", rating: 5, budget: "200M" },
  { title: "Godfather", rating: 9, budget: "280M" },
  { title: "Home Alone", rating: 4, budget: "300M" },
  { title: "Bad boys", rating: 8, budget: "180M" },
];
const movies22 = movies.map((element) => {
  if (element.title == "Interstelar") {
    return {
      title: element.title,
      budget: element.budget,
    };
  }
});
console.log(movies22);
