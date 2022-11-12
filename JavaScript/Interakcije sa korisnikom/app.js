// INTERAKCIJE SA KORISNIKOM //

// prompt() metoda nam sluzi za komunikaciju sa korisnikom.

const ime = prompt("Unesite vase ime: ");
console.log(ime);

// Sve sto korisnik unese je typa string
const godine = prompt("Unesite svoju starost: ");
console.log(typeof godine);
// Sada je nepohodno prevesti godine u broj:

// Postoje 2 nacina za prevodjdenje stringa u broj:
// 1. Number(variabla)
const brGodina = Number(godine);
console.log(brGodina);
console.log(typeof brGodina);

// 2. +variabla
const brGodina2 = +godine;
console.log(brGodina2);
console.log(typeof brGodina2);

const visina = +prompt("Unesite svoju visinu u cm: ");
console.log(visina);























