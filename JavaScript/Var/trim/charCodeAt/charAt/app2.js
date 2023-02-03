// trim() metoda brise rzmake sa obe strane stringa.
const recenica = "    Da li vam je hladno?    ";
console.log(recenica);
const recenica2 = recenica.trim();
console.log(recenica2);
console.log(recenica2.length);

// Postoje 3 metode za ekstraktovanje (uzimanje) jednog karaktera nekog stringa:
// 1. chatAt(index) - vraca nam karakter nekoga stringa sa poslatim indexom.
// 2. charCodeAt(index) - vraca nam kod karaktera nekog stringa za poslatim indexom.
// 3. string[index] - vrlo slicno charAt metodi (sa jednom razlikom)

const novaRecenica = "Spava mi se."
const char1 = novaRecenica.charAt(3);
console.log(char1);
const char2 = novaRecenica.charCodeAt(3); // retko ce se primenjivati
console.log(char2);

const char3 = novaRecenica[3];
console.log(char3);

const char33 = novaRecenica.charCodeAt(46); // u consolei se ispisuje prazan string ""
console.log(char33);
const char46 = novaRecenica[33];
console.log(char46); // u consoli se ispisuje undefined
