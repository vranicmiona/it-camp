// Object bulit in Methods //

const person = {
  firstName: "Hamed",
  lastName: "Medjedovic",
  age: 16,
};
// Object.freeze(obj) metoda cini objekat nepromenljivim.
person.age = 17;
console.log(person);
Object.freeze(person);
person.age = 22;
console.log(person);

// Object.seal(obj) cini objekat promenljivim s tim sto nrma mogucnost dodavanja (brisanja) novih svojstava i metoda.
// Object.seal(person);
// person.age = 22;
// console.log(person);
// delete person.age;
// console.log(person);

// Object.keys(obj) vraca niz kljuceva:
console.log(Object.keys(person));

// Object.entires(obj) vraca niz nizova:
// Svaki podniz je niz od dva elementa.
const entries = Object.entries(person);
console.log(entries);

const newArr = entries.flat().filter((element) => typeof element === "string"); // filter metoda uzima callback funkciju
console.log(newArr);

// Object.is(obj1, obj2) vrsi poredjenje dva objekta
const obj1 = {
  firstName: "Mitar",
  lastName: "Vanic",
};
const obj2 = {
  firstName: "Mitar",
  lastName: "Vanic",
};
const obj3 = obj1;
console.log(Object.is(obj1, obj2)); // false (objekti su referentni tip podatka), ne zanima ga sta je unutra, samo su lokacije porede, a lokacije su obj1 i obj2 razlicite, a obj1 i obj3 su na istom mestu u lokacijskooj memoriji
console.log(Object.is(obj1, obj3)); // true

const ime = "Bakir"; // vrednost
const prezime = "Ujkanovic";
const godine = 19;

const person2 = {
  ime, // kljuc
  prezime,
  godine,
};

console.log(person2);

// Destructuring

const person3 = {
  firstName: "Hasan",
  lastName: "Mujanovic",
  age: 18,
};

const firstNamee = person3.firstName;
console.log(firstNamee); // Hasan

const { firstName, age } = person3;
console.log(firstName); // Hasan
console.log(age); // 18

// Zadaci vezbanje:
// 1.
const godinee = [
  { starost: 19 },
  { starost: 19 },
  { starost: 22 },
  { starost: 17 },
  { starost: 8 },
  { starost: 4 },
  { starost: 14 },
  { starost: 11 },
  { starost: 10 },
];
const newArr2 = godinee.filter((element) => element.starost > 17);
console.log(newArr2);

// Domaci:

// 2. Write a JavaScript program to sort an array of JavaScript objects.
var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
