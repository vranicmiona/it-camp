// Objekti su glavna stavar u JavaScript_u.

// const niz = ["Amer", "Bakir", "Aladin"];
//                0        1         2

// Objekti su promenljive koje sadrze vise vrednosti.
// Prikazuju se u key:value parovima.

const person = {
  firstName: "Nikola",
  lastName: "Bozovic",
  age: 18,
  adult: true,
};

console.log(person);

// Pristupanje odredjenim vrednostima objekta mozemo izvrsiti na dva nacina:
// Jedan key:value par se propety (svojstvo).

// 1. ObjectName.propertyName (person.firstName);

// 2. ObjectName["propertyName"];
console.log(person.firstName); // Nikola
const punoletnost = person.adult === true ? "jeste" : "nije";
console.log(`${person["firstName"]} ${punoletnost} jeste.`);

// Object Methods //
// Objekti takodje mogu imati metode.
// Metode su funkcije koje ce se izvrsiti na objektu.
// Metode su skladistene u svojstvima kao defincije funkcije.

const person2 = {
  firstName: "Alen",
  lastName: "Muslic",
  age: 17,
  adult: false,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person2.fullName());

// u JavaScriptu this je keyword (rezervisana rec) koja ukazuje na neki objekat.
// this nije promenljiva i ne mozemo promeniti vrednost this.

// this ukazuje na razlicit objekat u zavisnosti od toga gde se koristi.

// * U nekom objektu this ukazuje na taj objekat;
//  * U global scope this ukazuje na global object.

// Domaci:
// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u
// trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek
// datih ocena).

// Zad.
// Write a JavaScript program which returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

const subStr = (str) => {
  const subStrArr = [];
  for (let i = 0; i < str.length; i++) {
    for (let k = i; k < str.length; k++) {
      subStrArr.push(str.slice(i, k + 1));
    }
  }
  return subStrArr;
};
console.log(subStr("dog"));
