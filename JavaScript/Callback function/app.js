// callback function //

// callback funkcija predstvalja funkciju koju saljemo kao arument neke druge funkcije.
// Sam argument ne treba da bude izvrsavanje callback funkcije vec referenca na datu radnju

function glavnaFunkcija(func) {
  console.log("Radnja unutar glavne funkcije.");
  func();
  console.log("Kraj glavne funkcije.");
}
function callback() {
  console.log("Radnja unutar callback funkcije.");
}
glavnaFunkcija(callback);

// Napraviti glavnu funkciju unutar koje ce se desiti ispis sta ona predstavlja, a celu stvar ce da izvrsi callback funkcija. Callback funkcija ima 2 parametra, i ispisuje rezultat par1 stepenovan par2.
function mainFunction(callBack2) {
  console.log("Prvi broj stepenovan drugim je: ");
  callBack2(2, 3);
}
const callBack2 = (par1, par2) => {
  console.log(par1 ** par2);
};
mainFunction(callBack2);

// JavaScript Array Iteration //

// Array Iteration metode prolaze kroz svaki element niza.
// forEach() metoda poziva callback funkciju za svaki element niza.

const niz = ["tarik", "hamed", "emin", "bakir", "dzenan"];

// forEach() metoda moze imati 3 parametra:
// 1. element niza
// 2. index niza
// 3. ceo niz

niz.forEach((element) => {
  console.log(element);
});

niz.forEach((element, index) => {
  console.log(`${element} se nalazi na ${index + 1} mestu u nizu.`);
});

niz.forEach((element, index, arr) => {
  console.log(
    `${element} se nalazi na ${index + 1} mestu u nizu, a ceo niz je ${arr}`
  );
});

// Ne moramo koristiti nazive od pre:
niz.forEach((student, pozicija) => {
  console.log(`${student} se nalazi na poziciji ${pozicija + 1}`);
});

// map() metoda kreira novi niz (iste duzine kao orignalni) sa logikom postavljnom unutar callback funkcije unuta date metode.

// Preko petlje napraviti novi niz koji ce imati sve elemente originalnog niza.

const niz2 = [];
for (let student of niz) {
  niz2.push(student);
}
console.log(niz2);

// const niz3 = niz.map(function (student) {
//   return student;
// });

const niz3 = niz.map((student) => student);
console.log(niz3);

// Preko map() metode napraviti novi niz gde ce imena svih studenata pocinjati velikim slovom.

const niz4 = niz.map((student) => student[0].toUpperCase() + student.slice(1));
console.log(niz4);

// 2. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

const addSomething = (num) => {
  let newNum = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
      newNum += num[i] + "-";
    } else {
      newNum += num[i];
    }
  }
  return newNum;
};
console.log(addSomething("025468"));
