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

// toExponetional() - nam vraca string broja, zaokruzen na onoliko decimala, koliki je argument metode,
let z = 55.4758;
let w = z.toExponential(2);
console.log(w);
console.log(typeof w); // string

// toFixed() - metoda nam vraca string broja, koji ce biti zaokruzen na onoliko decimala koliko je zapravo argument.
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
function palindromNumber(num) {
  const numToStr = num.toString();
  const length = numToStr.length;
  let newStr = "";
  for (let i = length - 1; i >= 0; i--) {
    newStr += numToStr[i];
  }
  if (newStr === numToStr) {
    return `Broj jeste palindrom!`;
  } else if (numToStr !== newStr) {
    return `Broj nije palindrom!`;
  }
}
console.log(palindromNumber(20002));
//2.  Napraviti funkciju koja ocekuje trocifren broj, a vraca dvocifren (iskljuci cifra desetice).
const izbrisiDruguCifru = (brojj) => {
  const stringBroja = brojj.toString();
  const duzina = stringBroja.length;
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
// Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kome su zamenjene prva i treca cifra i druga i cetvrta cifra. 4752 => 5247 => Radi se tako sto uzmemo ostatak pri deljenju i odvajamo brojeve
const mojaFunkcija = (cetvorocifrenBroj) => {
  const stringBrojaa = cetvorocifrenBroj.toString();
  const duzina = stringBrojaa.length / 2;
  let noviString = "";
  if (stringBrojaa.length !== 4) {
    return "Mora sadrzati cetiri cifre!";
  }
  const prvaPolovina = stringBrojaa.slice(0, duzina); // (0, 2)
  const drugaPolovina = stringBrojaa.slice(duzina, stringBrojaa.length); // (2)
  const recenica = noviString.concat(drugaPolovina, prvaPolovina); // drugaPolovina.concat(prviDeo)
  return +recenica; // zbog plusa nema nule na primerima
};

console.log(mojaFunkcija(1234));
console.log(mojaFunkcija(123));
console.log(mojaFunkcija(1203));

// Global JavaScript methods //

// Globalne metode mogu biti primenjene na bilo koji tip podataka.

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

// 2. parseInt() - Analizira argument i vraca nam ceo broj ako je moguce.
console.log(parseInt("23")); // 23
console.log(typeof parseInt("23")); // number
// Krajnji razmaci ne prave problem
console.log(parseInt(" 23         ")); // 23
console.log(parseInt("23+5")); // 23 posle se pojavljuje neki znak koji je nista i ja uzimam sve do toga broja, i dozvoljava da stavimo uz broj nesto sto nije broj

// Razmaci jesu dozvoljeni kod parseInt() metode. S tim sto se uzima u obzir samo prvi broj koji se pojavljuje.
console.log(parseInt("23 56")); // 23
console.log(parseInt("ahsuh23 56")); // NaN
console.log(parseInt("23.56")); // 23 funkcionise kao Math.trunc() odstranjuje decimalni ostatak
console.log(parseInt("23,78")); // 23
console.log(parseInt("asjhgs")); // NaN
console.log(parseInt(true)); // NaN
console.log(parseInt(false)); // NaN
console.log(parseInt([])); // NaN
console.log(parseInt({})); // NaN

// 2. parseFloat() - analizira argumet i vraca realan broj sa decimalnim zapisom ako je moguce.
console.log(parseFloat("23")); // 23
console.log(typeof parseFloat("23")); // number
// Krajnji razmaci ne prave problem
console.log(parseFloat(" 23.55         ")); // 23.55
console.log(parseFloat("23+5")); // 23
// Razmaci nisu dozvoljeni kod parseFloat metode
console.log(parseFloat("23 56")); // 23
console.log(parseFloat("23.56")); // 23.56
console.log(parseFloat("23,78")); // 23
console.log(parseFloat("asjhgs")); // NaN
console.log(parseFloat(true)); // NaN
console.log(parseFloat(false)); // NaN
console.log(parseFloat([])); // NaN
console.log(parseFloat({})); // NaN
