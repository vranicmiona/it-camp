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

// Object.seal(obj) cini objekat promenljivim s tim sto nema mogucnost dodavanja (brisanja) novih svojstava i metoda.
// Object.seal(person)
// person.age = 22;
// console.log(person);
// delete person.age; !!! cannot be delited when sealed !!!
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
  lastName: "Vranic",
};
const obj2 = {
  firstName: "Mitar",
  lastName: "Vranic",
};
const obj3 = obj1;
console.log(Object.is(obj1, obj2)); // false (objekti su referentni tip podatka), ne zanima ga sta je unutra, samo su lokacije porede, a lokacije su obj1 i obj2 razlicite, a obj1 i obj3 su na istom mestu u lokacijskoj memoriji
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

// Destructuring assignment

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
// 1. Idvoji sve elemente punoletne starosti.
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

function sort() {
  max = library[0].title.length; // 14
  for (i = 1; i < library.length; i++) {
    if (library[i].title.length > max) {
      max = library[i].title.length;
    }
  }
  for (i = 0; i < library.length - 1; i++) {
    for (j = i; j < library.length; j++) {
      for (k = 0; k < library.length; k++) {
        if (library[i].title[k] > library[j].title[k + 1]) {
          pom = library[i];
          library[i] = library[j];
          library[j] = pom;
        }
      }
    }
  }
  console.log(library);
}
console.log(sort());

// 2. NACIN:

const sort2 = (arr) => {
  const newArr = arr.map((element) => element.title);
  newArr.sort();
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.find((element) => element.title === newArr[i])) {
      // sve u if je jedan element
      finalArr.push(arr.find((element) => element.title === newArr[i]));
    }
  }
  return newArr;
};
console.log(sort2(library));

function sort3() {
  max = library[0].title.length;
  for (i = 1; i < library.length; i++) {
    if (library[i].title.length > max) {
      max = library[i].title.length; // samo da bi uzeli najduzi deo objekta
    }
  }
  for (i = 0; i < library.length - 1; i++) {
    // pristupamo indexu
    for (j = i; j < library.length; j++) {
      // pristupamo elemntu(1, 2, 3)
      for (k = 0; k < library.length; k++) {
        // pristupamo elementima(x) unutar elemnta(1, 2, 3)
        if (library[i].title[k] > library[j].title[k + 1]) {
          // ???
          pom = library[i];
          library[i] = library[j];
          library[j] = pom;
        }
      }
    }
  }
  return library;
}
console.log(library);

const sort4 = (arr) => {
  const newArr = arr.map((el) => el.title);
  newArr.sort();
  const finalArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr.find((element) => element.title === newArr[i])) {
      finalArr.push(arr.find((element) => element.title === newArr[i]));
    }
  }
  return finalArr;
};
console.log(library);
