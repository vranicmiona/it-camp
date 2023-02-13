// split() *podeliti* metoda nam vraca niz na osnovu nekog stinga na koji je primenljiv
// // Ako se kod split() metode izostavi argument, dobicemo niz od jendog elementa. Vraca niz, ako primenimo, const words = str.split(' ');
// console.log(words[3]);
// // expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // expected output: "k"

const recenica =
  "Ovde je prilicno hladno, ali smo dobili obecanje da ce uskoro poceti grejanje.Ako se to ne desi, bice odlaganja casova.";
const niz = recenica.split();
console.log(niz);

const niz2 = recenica.split(",");
console.log(niz2);

const niz3 = recenica.split("*");
console.log(niz3);

// Napraviti niz od stringa tako da se elementi niza prave do svake reci "decembar".Rec "decembar ne sme biti deo nijednog niza"

const recenica2 =
  "Decembar je poslednji mesec u godini. U decembar pocinje zima, decembar je najhladniji mesec u godini.";
const niz4 = recenica2.split(/decembar/i);
console.log(niz4);
const niz10 = recenica2.split(/mesec/i);
console.log(niz10);

// Search metode:

// indexOf() metoda nam vraca poziciju gde zapravo pocinje poslati argument to moze biti jedan ili vise  kada se radi argmenata jednom ili vise stringu.
const pozicija = recenica2.indexOf("j");
console.log(pozicija);

const pozicija2 = recenica2.indexOf("mesec");
console.log(pozicija2);

// Ako trazimo poziciju nepostojeceg stinga unutar nase recenice, rezultat ce biti broj -1.
const pozicija3 = recenica2.indexOf("Omar");
console.log(pozicija3);
// Drugi argument predstavlja poziciju od koje krecemo sa trazenjem datog stringa
const pozicija4 = recenica2.indexOf("mesec", 30);
console.log(pozicija4);

// lastIndexOf() metoda nam vraca poslednju poziciju gde se zapravo nalazi poslati argument (jedan ili vise karaktera) kada se radi o nekom stringu
const pozicija6 = recenica2.lastIndexOf("mesec");
console.log(pozicija6);
const pozicija7 = recenica.lastIndexOf("ima li ovo");
console.log(pozicija7);

// Napraviti koja na osnovu parametara ispituje pojavljivanje reci "ko osvaja".
// Ako se pojavljuje vise puta dati string vratiti prvo i poslednje pojavljivanje, ako se pojavljuje jednom, vratiti poziciju pojavljivanja, dok ako se ne pojavljuje vratiti poruku "nismo pronasli dati string".

function position(sentence) {
  const firstApp = sentence.indexOf("ko osvaja");
  const lastApp = sentence.lastIndexOf("ko osvaja");
  if (firstApp === -1) {
    return "Nismo pronasli dati string";
  } else if (firstApp === lastApp) {
    return "Reci 'ko osvaja' se nalaze jednom u datoj recenici.";
  } else if (firstApp !== lastApp) {
    return (
      "Prvo pojavljivanje reci 'ko osvaja' se nalazi na " +
      firstApp +
      1 + //???
      " poziciji. \nPoslednje pojavljivanje reci 'ko osvaja' se nalazi na " +
      lastApp +
      1 + //???
      " poziciji."
    );
  }
}
console.log(
  position("'ko osvaja' svetsko prvenstvo ove godine. Stvarno 'ko osvaja'")
);
console.log(position(" svetsko prvenstvo ove godine. Stvarno 'ko osvaja'"));
console.log(position(" svetsko prvenstvo ove godine. Stvarno"));

// Domaci zadatak:
// Napisati funkciju koja ima ceo broj kao parametar i koja kao rezultat vraca zbir cifaratog celog broja. Npr ako parametar iznosi 367, funkcija vraca broj 16 (3+6+7).
function zbirCifara(number) {
  let zbir = 0;
  while (number > 0) {
    zbir += number % 10; // ovde je upisano 7 kao zaseban broj
    number = Math.floor(number / 10);
  }
  return zbir;
}
console.log(zbirCifara(36747)); // 27 ovo radi za bilo koji primer ne samo trocifrene brojeve

// Ovaj zadatak treba znati definitivno
function cetvorocifreniBr(broj) {
  let zbir = 0;
  while (broj > 0) {
    zbir += broj % 100;
    broj = Math.floor(broj / 100);
  }
  return zbir;
}
console.log(cetvorocifreniBr(4113)); // 54
