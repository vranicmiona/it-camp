// JavaScript Object Notation

// JSON je format za skladistenje i prenos podataka.
// Najcesce se koristi kada se podaci salju sa servera ka WEB stranici.

// JSON posaci su vrslo slicni JavaScript objectu i oni se zapisiuju:

// const person = {
// "firstname": "Amer",
// "lastname": "Honic",
// "age": "19",
// }
// keys/names zahtevaju duple navodnike za razliku od JavaScript objekta.

const person = {
  firstname: "Amer",
  lastname: "Honic",
  age: "19",
};

// Dve metode za pretvaranje:

// 1. JSON.stringify() - pretvara nas objekat u JSON format pa JSON u string.
// Koristi se za slanje podataka...

const strObject = JSON.stringify(person);
console.log(strObject);
console.log(typeof strObject); // string

// 2. JSON.parse() - analizira se neki string i u slucaju mogucnosti pretvara u objekat (nama citljiv podatak), moze da bude i niz i objekat.

const obj = JSON.parse(strObject);
console.log(obj);
