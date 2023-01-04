// Fudbalski teren dimenzija dxs treba ograditi pravougaonom ogradom tako da je rastojanje stranica ograde
// od linije terena r. Napisi program koji oderedjuje duzinu ograde.
//  * d - duzina terena u metrima (90 <= d <=120)
//  * s - sirina terena u metrima (45 <= s <= 90)
//  * r - rasojanje ograde od terena u metrima (2 <= r <= 10)

const d = +prompt("Unesite duzinu ograde: ");
const s = +prompt("Unesite sirinu terena: ");
const r = +prompt("Unesite rastojanje ograde od terena: ");

if (isNaN(d) || isNaN(s) || isNaN(r)) {
  console.log("Unete vrednosti moraju biti brojevi! ");
} else if (d <= 90 || d >= 120) {
  console.log("Duzina mora biti izmedju 90 i 120 metara!");
} else if (s <= 45 || s >= 90) {
  console.log("Sirina mora biti izmedju 45 i 90 metara!");
} else if (r <= 2 || r >= 10) {
  console.log("Uneta vrednost za rastojanje mora biti izmedju 2 i 10!");
} else {
  const obimOgrade = 2 * d + 2 * s;
  const obimTerena = obimOgrade + 8 * r;
}
console.log("Potrebno je, " + obimTerena + "m za ogradjivanje terena ogradom!");

// Domaci zadaci:
// 1. Korisnik unosi dva broja: na osnovu toga koji je broj manji, iteracija se izvrsava od njega do veceg broja. Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.

let x = +prompt("Unesite prvi broj: ");
let y = +prompt("Unesite drugi broj: ");
let counter = 0;
let sum = 0;
if (isNaN(x) || isNaN(y)) {
  console.log("Moraju biti brojevi u pitanju: ");
} else if (x < y) {
  while (a <= b) {
    if (x % 5 === 0) {
      counter++;
      sum += x;
    }
    a++;
  }
  console.log(sum / counter);
} else if (x > y) {
  while (a >= b) {
    if (y % 5 === 0) {
      counter++;
      sum += y;
    }
    y++;
    console.log(sum / counter);
  }
} else if (a === b) {
  console.log("Brojevi moraju biti razliciti! ");
}
// 2. Nacin:

let broj1 = +prompt("Unesite prvi broj: ");
let broj1ZaIpis = broj1;
let broj2 = +prompt("Unesite druugi broj: ");
let broj2ZaIspis = broj2;
let brojac = 0;
let suma = 0;
if (isNaN(broj1) || isNaN(broj2)) {
  console.log("Morate uneti brojeve! ");
} else if (broj1 === broj2) {
  console.log("Brojevi moraju biti razliciti! ");
} else if (broj1 < broj2) {
  while (broj1 <= broj2) {
    if (broj1 % 5 === 0) {
      brojac++;
      suma += broj1;
    }
    broj1++;
  }
  console.log(
    "Aritmeticka sredina brojeva, od broja " +
      broj1ZaIspis +
      " do broja " +
      broj2 +
      " iznosi" +
      suma / brojac +
      "."
  );
} else if (broj1 > broj2) {
  while (broj1 >= broj2) {
    if (broj2 % 5 === 0) {
      brojac++;
      suma += broj2;
    }
    broj2++;
  }
  console.log(
    "Aritmeticka sredina broja " +
      broj2ZaIspis +
      " do broja" +
      broj1 +
      " iznosi" +
      suma / brojac +
      "."
  );
}

// Korisnik unosi broj iz intervala [12,6).
// Na osnovu unetog broja iteracija se vrsi od njega do 1(ukljucujuci)
// Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja umanjenu za 25

let f = +prompt("Unesti neki broj: ");
const fZaPrikaz = f;
for (let f; f >= 1; f--) {
  console.log(f);
  console.log(f ** 2);
  console.log((f -= 25));
}

// Prebrojati i sabrati brojeve deljive sa 5 u intervali od 1 do n
const n = +prompt("Uneti neki broj");
zbir = 0;
coun = 0;
for (i = 1; i <= n; i++) {
  if (i % 5 === 0) {
    coun++;
    zbir += i;
  }
}
console.log(
  "Ukupno ima brojeva, " +
    coun +
    " koji su deljivi sa 5 " +
    " njihov zbir\n iznosi " +
    zbir +
    "."
);

// Neka se izvrsi iteracija od broja 99 do -99, ispisati zbir brojeva deljivh sa 4 i broja 14

for (let k = 99; k >= -99; k--) {
  if (k % 4 === 0) {
    console.log(k + 14);
  }
}
// II nacin
let iterator = 99;
while (iterator > -100) {
  if (iteratior % 4 === 0) {
    console.log(iterator + 14);
  }
  iterator--;
}

// Izracunati aritmeticku sredinu brojeva koji su deljiv sa 3. Iteracija se vrsi od 3 do 17

let num = 3;
let sabiraka = 0;
let brojanja = 0;
while (num <= 17) {
  if (num % 3 === 0) {
    brojanje++;
    sabiraka += num;
  }
  num++;
}
console.log(
  "Aritmentick sredina brojeva, kojih ima " +
    brojanje +
    "i njihov zbir je jednak " +
    sabiraka +
    ",sve to zajedno nam daje resenje " +
    sabiraka / brojanje +
    "."
);
