// STRINGOVI //
// Stringovi su immutable vrednosti (nepromenljive).
// Sto znaci ako hocemo da dobijemo neki novi string moramo napraviti novi.

// Metode // predstavlja neku (funkciju) koja obavlja neki posao, primenjujemo ih za datu promenljivu
// length metoda nam sluzi za dobijanje duzine stringa.
const recenica = "Kamerun dobijamo!";
console.log(recenica.length);

// Pristupanje odredjenom karakteru ide preko indexa.
// Indexiranje ide od (0 do ukupna duzina stringa - 1)

console.log(recenica[6]);
// Koriscenje \ (backslash) karaktera
// String zapisujemo na tri nacina:
// 1. " "
const string1 = "Danas je 'lepo' vreme.";
// \ :
const string4 = 'Danas je "lepo" vreme';
// 2. ' '
const string2 = 'Danas je "lepo" vreme';
// 3. ` `
const string3 = `Danas je lepo vreme`;
// Kombinacija dublih i obicnih navodnika za recenicu koja zeli sa ma navodnike
// Primena \ operatora na kraju reda:
const string5 =
  "Ovo ce da bude jedan dugacki string cela poenta je da \
prikazemo jedan te isti string u istom redu:";
console.log(string5);
// \n prikazive datog stringa gde god da ga iskoritimo
const strng6 =
  "Ovo ce da bude jedan \ndugacki string cela poenta je da prikazemo \njedan te isti \nstring u istom redu:";
// Postoje tri metode za ekstraktovanje(uzimanje dela stringa) stringa:
// 1. slice(start, end) end nije ukljucen u range (opseg)
// 2. substring(start, end) razlika u odnosu na slice je da substring ne prihvata negativne indexe.
// 3. substr(prvi argument predstavlja start, length duzina do koliko ce da traje to parce stringa)
// console.log(string7.slice(0, 5));
// Racunanje ide od 0.
const string7 = "Danas je bilo lepo vreme.";
console.log(string7.slice(-10, -1));
console.log(string7.substring(0, 5));
console.log(string7.substr(0, 10)); // kreni od 0, a njena duzina ce da bude 8
