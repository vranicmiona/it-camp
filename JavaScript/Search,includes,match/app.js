// search() meotda nam daje poziciju (index) nekoga stringa argumenta metode

const recenica = "Desila se neocekivana poseta";
const position = recenica.search("poseta");
console.log(position); // pocinje nabrajanje od 0 do prvog slova reci ciju smo poziciju trazili

// Razlika izmedju indexOf() i search() metode:
// indexOf() metoda dozvoiljava drugi argument (pozicija odakle krece trazenje stringa);
// search() metoda dozvoljava Regular Expressions.

const recenica2 =
  "Danas su pocela cetvrtfinala svetskog prvnstva u fudbalu, takodje je danas bila dodela sertifikata.";
const position2 = recenica2.search(/danas/i);
console.log(position2);

// match() metoda nam vraca niz.
const matchingDanas = recenica2.match("danas"); // vraca nam danas na 69 poziciji prvog pocetnog slova
const matchingDanas2 = recenica2.match(/danas/gi); // vraca nam sve moguce vrednosti danas
console.log(matchingDanas);
console.log(matchingDanas2);

// includes() metoda nam vraca boolien u zavisnosti od toga da li se argument nalazi u stringu na koju prmenjujemo metodu

const isPresence = recenica2.includes("Omar");
const isPresence2 = recenica2.includes("danas");
console.log(isPresence); // ispisuje u consoli false
console.log(isPresence2); // ispisuje u consoli true

// includes() metoda dozvoljava drugi argument sto zapravo predstavlja poziciju od koje ce se traziti dati string

const isPresence3 = recenica2.includes("danas", 60);
console.log(isPresence3); // vraca nam true

// startsWith() & endsWith() metode nam vracaju boolien u zavisnosti od toga da li dati string pocinje (zavrsava) argumetom metodom.

const startsWithDanas = recenica2.startsWith("Danas");
console.log(startsWithDanas); // true
const endsWithDanas = recenica2.endsWith("danas");
console.log(endsWithDanas); // false

// JavaScript Template Literals //
// Bolja praksa je koristiti ` ` za pisanje stringa

// Prednosti:
// 1. Mozemo koristiti navodnike (obicne ili duple) unutar stringa.
const reci = `Neki "dobri" ljudi.`;
// 2. Template literals dozvoljavaju multilne stringove, template literals omogucava mulitlne stingove
const recii = `AAJHAHSG DGIHSGD ndsdbs
sundsusu
cnuudcudcdcc bdbubcnu ucnio`;
console.log(recii);
// 3. Interpolacja - Omogucava laksi nacin interpolacije promenljivih (ili izraza) unutar nekog stringa.
let a = 5;
let b = 34;
const recenica4 = `Jedna flasa ima zapreminu ${a}l, ukupna kolicina limunade je ${b}l. Stoga mozemo napuniti ${Math.floor(
  b / a
)} flasa limunade.`;
console.log(recenica4);

// Napraviti funkciju koja ispituje argument.
// Ako se u recenici nadje rec "skola", neka se vrati pozicija prvog pojavljivanja date reci.
// Ako recenica pocinje sa recju "Automobil" neka se vrati boolean true;
// Ako je recenica parne duzine neka se vrati broj pojavljivanja reci "kuca".
function mojaFunkcija(recenica5) {
  if (recenica5.includes("skola")) {
    return recenica5.indexOf("skola");
  } else if (recenica5.startsWith("Automobil")) {
    return recenica5.includes("Automobil");
  } else if (recenica5.length % 2 === 0) {
    let brojac = 0;
    if (recenica5.includes("kuca")) {
      for (let i = 0; i <= recenica5.length - 1; i++) {
        if (recenica5.includes("kuca", i)) {
          brojac++;
          i += 3;
        }
        i++;
      }
    }
    return `Broj pojavljivanja reci kuca unutar datog stringa je ${brojac}`;
  }
}
console.log(
  mojaFunkcija("skola je uticala da Alen i Hatidza spavaju za vreme casa.")
);
console.log(mojaFunkcija("Automobil je prodat!"));
console.log(mojaFunkcija("Ja zivim u stanu."));
console.log(mojaFunkcija("kuca kucakuca kuca kuca."));

// Domaci zadatak:
function limunada(par1, par2) {
  const ukupnoFlasa = Math.floor(par2 / par1);
  if (par1 > 5 || par1 <= 0 || isNaN(par1)) {
    return "Zapremina flase mora biti izmedju 0l i 5l.";
  } else if (par2 > 50 || par2 <= 0 || isNaN(par2)) {
    return "Zapremina limunade mora biti izmedju 0l i 50l.";
  } else {
    return (
      "Sa datim zapreminama mozemo napuniti " + ukupnoFlasa + " flasa limunade."
    );
  }
}

console.log(limunada(1.5, 10));
console.log(limunada(1.5, 60));
console.log(limunada(6, 40));
