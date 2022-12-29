// Date Objects //

// Kreiranje datuma //
// Kreiranje datma mozemo izvrsiti na 4 nacina:
// Datumski objekat sadrži vremenski podatak koji uključuje datum i vreme do preciznosti od jedne milisekunde (hiljaditi deo sekunde). U jednom satu ima 3,600,000 milisekundi, a u jednom danu 86.400.000 milisekundi

// 1. new Date()
const trenutnoVreme = new Date();
console.log(trenutnoVreme);

// 2. new Date(year, mounth, day, hours, minutes, seconds, miliseconds)
// Meseci se racunaju od 0 do 11
// Ako pravimo datume na ovaj nacin mozemo iamti minimum 2 argumenata i maximum 7

const datumRodjenja = new Date(2001, 24, 10, 2002, 2023, 1, 1);
console.log(datumRodjenja);
let datum = new Date(2022, 12);
console.log(datum);

// 3. Slanjem jednog arumenta unutar Date().
// Ovako napravljen datum je dodat broj milisekundi na 1.1.1970.
// Defaultna vrednost za datume u JavaScriptu je 1.1.1970.T00:00:00.milices.

datum = new Date(2022);
console.log(datum);

// 4. Slanjem Stringa u Date() kao argument. Strin ce biti parsiran i dibicemo datum na osnovu toga.

datum = new Date("2001 October 24");
console.log(datum);

// Jedna i dve cifre ce biti interpretirane kao:
// 19xx ili 190x

datum = new Date(86, 0);
console.log(datum);
datum = new Date(6, 0);
console.log(datum);

// Date.now() je metoda koja nam vraca broj od milisekundi od 1.1.1970. do trenutnog vremena.
const datum2 = Date.now();
console.log(datum2);

// Date.parse(neki datum) nam vraca broj milisekudni od 1.1.1970. do poslato vremena.
console.log(Date.parse(datumRodjenja));

// Domaci: Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
// "1999-05-24" i "2004-09-15" (1000 * 3600 * 24)
const dvaDatuma = (dan1, dan2) => {
  const razlika = Date.parse(dan1) - Date.parse(dan2);
  const razlika2 = Date.parse(dan2) - Date.parse(dan1);
  const veci = dan1 > dan2 ? razlika : razlika2;
  const total = veci / 86400000;
  return total;
};
console.log(dvaDatuma("1999-05-24", "2004-09-15")); // 1941

function funkcija(par1, par2) {
  return (Date.parse(par1) - Date.parse(par2)) / 86400000;
}
console.log(funkcija("2004 sep 15", "99 may 24")); // 1941
