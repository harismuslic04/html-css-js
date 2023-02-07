// Jos jedan nacin pravljenja objekata

const objectFunctions = {
  incrementScore: function () {
    this.score += 1;
  },
};

function createUser(firstName, lastName, score) {
  const newUser = Object.create(objectFunctions);
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.score = score;
  return newUser;
}

const haris = createUser("haris", "muslic", "19");
console.log(haris);
//izvuci samo cele brojeve i kvadriraj ih i ubaci u novi niz
const arr = [-3, 4.8, 5, 3, -3.2];

// ako ostatak deljenja broja sa 1 bude 0 onda je broj ceo.

// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function zadatak(ime, prop) {
  for (i = 0; i < contacts.length; i++) {
    if (ime == contacts[i].firstName && contacts[i][prop] !== undefined) {
      return contacts[i][prop];
    }
  }
  return `No such contacts.`;
}
console.log(zadatak("Kristian", "number"));
console.log(zadatak("Kristian", "hobby"));
