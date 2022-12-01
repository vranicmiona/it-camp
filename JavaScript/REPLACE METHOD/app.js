// Replace metoda vrsi zamenu nekoliko karaktera datog stringa. Ima 2 argumenta.
// Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa
const recenica50 = "Danas smo podelili sertifikate za HTML CSS i JavaScript."
let recenica2 = recenica50.replace("Danas", "Juce");
console.log(recenica2);
recenica2 = recenica50.replace("s", "t");
console.log(recenica2);
// Za promenu svih pronalazenja datog stringa cemo koristiti Regular Expressions:
// 1. g (global)
recenica2 = recenica50.replace(/s/g, "t");
// 2. i (insensitive)
recenica2 = recenica50.replace(/s/gi, "A");
console.log(recenica2);

// Metoda za pretvaranje celog stringa u velika slova toUpperCase()
console.log(recenica50.toUpperCase());
// Za pretvaranja celog stinga u mala slova toLowerCase()
console.log(recenica50.toLowerCase());
console.log(recenica50);

// Concatenation concat() vrsi spajanje dva ili vise stringova
let a = "Danas je 16. cas JavaScript.";
let b = "Bice JavaScripta i preko 50 casova.";
// Varijanta bez concat()
let c = a + " " + b;
console.log(c);

c = a.concat(b, "e", ".");
console.log(c);
c = a.concat(" ", b,"\nNakon toga cemo raditi React biblioteku");
console.log(c);

// Napomena.
// Sve string metode prave novu promenljivu (jer su stringovi immutable vrednosti).

// Domaci zadatak: 

// Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// Ako dati string ima vecu duzinu od 9:
// Pravi novi string koji ce biti isecak od pola do kraja originalnong stringa. Nakon toga novom stringu menjamo sva mala slova "a" sa velikim slovom "B", i funkcija ce vratiti dati novi string koji je savstavljen od "Ovo je novodobjena recenica," i posledjneg izmenjenog isecka.
// Ako string ima manju duzinu <= 9:
// Funkcija treba vratiti poruku:
// argument + {njena duzina} + "nedovoljno za dalje ispitivajne".

const domaci = () => {
  const recenica = prompt("Unesite neku recenicu: ")
  const prva = recenica.toUpperCase();
  const druga = recenica.toLowerCase();
  let polaDuzina;
// if(recenica.length % 2 === 0){
//   polaDuzine = recenica.length / 2;
// }else{
//   polaDuzina = Math.round(recenica.length / 2 === 0); // i u prvoj i drugoj metodi ce da nam bude ceo broj sto ce nam trebati za drugi deo zadatka

polaDuzina = recenica.length % 2 === 0 ? recenica.length / 2 : Math.round(recenica.length / 2);
const prvaPol = recenica.slice(0, polaDuzina).toUpperCase()// ne uzima polaDuzine kao vrednost samo prvu
const drugaPol = recenica.substring(polaDuzina, recenica.length).toLowerCase() // ne mora da ide do kraja, ne mora recenica.length
// const treca = prvaPol + drugaPol;
const treca = prvaPol.concat(drugaPol);
const cetvrta = recenica.replace(/skola/gi, "fakultet");
const peta = recenica.substr(0, 10);
const sesta = recenica.slice(-10);
return (
  prva.concat("\n", druga, "\n", treca, "\n", cetvrta, "\n", peta, "\n", sesta)
);}
   console.log(domaci());

  // Izostavljajuci drugi argument kod slice() metode uzima isecak do kraja stringa.
  const isecak = "Recenica za primer slice metode jednim argumentom".slice(12);
  console.log(isecak);