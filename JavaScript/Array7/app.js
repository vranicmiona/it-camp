// PRICA O PROBLEMU ZA APLIKACIJE
const prom1 = 55; // thruty
const prom2 = !55; // falsy kontrira boolean
const prom3 = !!55; // thruty daje boolean kao uslov, ako je thruty dobicemo true, ako je falsy dobicemo false

const prom4 = !!true; // true
const prom5 = !""; // true
const prom6 = !(55 + ""); // false
console.log(prom1);
console.log(prom2);
console.log(prom3);
console.log(prom4);
console.log(prom5);
console.log(prom6);

// Kako se ponasa HOISTING kod funkcije
// Hoisting za let i const ne vazi, a za var vazi

add(10, 15);
function add(a, b) {
  console.log(a + b); // 25
}

hello("Mehmede");
const hello = (par) => {
  console.log(`Hello ${par}`); // ne moze da pristupi hello pre inicijalizacije
};
