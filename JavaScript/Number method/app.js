// JavaScript Number methode //

// toString() method pretvara broj u string.
// Ova metoda pretvara bilo koji tip podatka u string.
let x = 22;
console.log(x);
console.log(typeof x);
let y = x.toString(); // number
console.log(y);
console.log(typeof y); // string
console.log(x + y);

// toExponetional() - nam vraca string broja, zaokruzen na onoliko decimala, koliki je argumen metode,
let z = 55.4758;
let w = z.toExponential(2);
console.log(w);
console.log(typeof w); // string

// toFixed() - metoda nam vraca string broja, koji ce biti zaokruzen n onoliko deecimala koliko je zapravo argument.
a = 12.1234;
b = +a.toFixed(2);
console.log(b);
console.log(typeof b);

// toPrecision() metoda nam vraca string broja, sa onoliko cifara koliki je argument funkcije. Ukupan broj cifara pre i posle decimalnog zareza
a = 12.1234;
b = +a.toPrecision(3);
console.log(b);
console.log(typeof b);

// valueOf() - nam vraca vrednost neke promenljive.
console.log(x.valueOf());

// Napomena.
// toString() i valueOf() metode vaze za sve tipove podataka u JavaScriptu.

// 1. Napraviti funkciju koja prima jedan argument (broj) i vraca poruku da li je dati argument palindrom
function isPalindrom(broj) {
  const stringBroja = broj.toStringBroja();
  const obrnutiBroj = "";
  for (i = stringBroja.length - 1; i >= 0; i++) {
    obrnutiBroj += stringBroja[i];
  }
  if (stringBroja === obrnutiBroj) {
    return `Obrnuti broj jeste palindrom`;
  } else {
    `Obrnuti broj nije palindrom`;
  }
}
console.log(isPalindrom(1234));
console.log(isPalindrom(12321));
//2.  Napraviti funkciju koja ocekuje trocifren broj, a vraca dvocifren (iskljuci cifra desetice).
const izbrisiDruguCifru = (brojj) => {
  const duzina = brojj.toString().length;
  const stringBroja = brojj.toString();
  if (duzina !== 3) {
    return `Argument mora imati tri cifre.`;
  } else {
    const noviBroj = stringBroja.replace(stringBroja[1], "");
    return +noviBroj;
  }
};
console.log(izbrisiDruguCifru(234));
console.log(izbrisiDruguCifru(6));

// Domaci zadatak:
// Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kome su zamenjene prva i treca cifra i druga i cetvrta cifra. 4752 5247

// Global JavaScript methods //

// Globalne metode mogu biti primenjene na bilo koji tip posataka.

// Predstavicemo 3 najcesce koriscene metode sa brojevima.

// 1. Number() - vraca broj konvertovan iz argumenta

console.log(Number("23")); // 23
console.log(typeof Number("23")); // number
// Krajnji razmaci ne prave problem
console.log(Number(" 23         ")); // 23
console.log(Number("23+5")); // NaN
// Razmaci nisu dozvoljeni kod Number metode
console.log(Number("23 56")); // NaN
console.log(Number("23.56")); // 23.56
console.log(Number("23,78")); // NaN
console.log(Number("asjhgs")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number([])); // 0
console.log(Number({})); // NaN
