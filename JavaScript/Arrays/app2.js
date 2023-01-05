// Niz predstvalja stukturu podataka koja moze sadrzati vise od jedne vrednosti //;
// Nizovi u JavaScriptu su heterogeni (mogu sadrzati elemente razlicitih tipova.)

const niz = ["Mitar", "Vranic", 20, true];
console.log(niz);
// Dozvoljeno je, cesto i prakticnije pisati svaki elemnt niza u novom redu. Ceesca je situacija sa objektima nego sa nizovima.
// Mozemo prvo kreirati prazan niz nakon toga dodavati rucno elemente.

const automobili = [];
automobili[0] = "Audi";
automobili[1] = "Passat";
automobili[5] = "Golf";
console.log(automobili); // <3 empty items> sto nije dobro moze da nam napravi probeleme
console.log(automobili[3]); // undefined

// Istu sintaksu mozemo iskoristiti za promenu vrednosti elemenata.
automobili[0] = "Mercedes";
console.log(automobili); // Audi --> Mercedes

// Niz mozemo definisati preko new keyworda:
const niz2 = new Array("Hasan", "Omar", "Emin");
console.log(niz2); // Isto se dobija kao gore, i moze da se na ovaj nacin definise niz

// Radi jednostavnosti, citljivosti koda i brzine izvrsavanja je bolje kosristiti [] nego new. U pozadini ima nesto sto meri brzinu i jos jedna nedostatak je
const niz3 = [40];
console.log(niz3);
const niz4 = new Array(40); // dobijamo <40 empty items> imamo 40 praznih mesta, ato ne zelimo
console.log(niz4);

// Pristupanje se vrsi prek indexa
console.log(automobili[1]); // Passat

// Tip niza, sve u JavaScriptu je object, posto je takodje dva nacina za proveravanje da li je neka promenljiva niz: (ne ide samo sa typeof) u ovim sledecim slucajevima mozemo da zaboravimo
console.log(typeof automobili); // Object

// 1. Array.isArray(potencijalnoNiz)
console.log(Array.isArray(automobili)); // true
console.log(Array.isArray("neki string")); // false

// 2. Da li je neka promenljiva instanceof Array
console.log(automobili instanceof Array); // true
console.log(25 instanceof Array); // false

// Elementi niza mogu biti bilo koje vrednosti:
// Date, Number, String, Boolean, Function, Array...

// Za proveru duzine niza kosristimo lenght
console.log(automobili.length); // 6

// Za dodavanje elementa na kraju niza se koristi push() metoda - pitanje na testu
const dani = ["Ponedeljak", "Utorak", "Sreda"];
dani.push("Cetvrtak");
console.log(dani); // dobijamo ih sve ispisane i cetvrtak na kraju
// push() metoda nam omogucava dodavanje vise od jednog elementa na kraju niza.
dani.push("petak", "subota");
console.log(dani);
// dani.push(...) vraca novu duzinu niza nam vraca sa ova dva nova dodata elementa.
console.log(dani.push("petak", "subota")); // 8
dani[dani.length] = "nedelja";
console.log(dani);

// Nizovi su vrsta objekata koji imaju brojevne indexe.

// Za pretvaranje niza u string mozemo iskoristiti dve metode
// 1. toString()
// 2. join()
const daniStr = dani.toString();
console.log(daniStr);
console.log(typeof daniStr); // String
console.log(daniStr.split(","));
// 2.
// const daniStr2 = daniStr.join();
// console.log(daniStr2);
// console.log(typeof daniStr2);
// Dobijanje stringa i stavljanje nekog znaka izmedju elemenata niza koji smo pretvorili u string.
const daniStr3 = dani.join("*");
console.log(daniStr3);

// pop() metoda brise poslednji element iz niza.
dani.pop(); // bez argumenta
console.log(dani); // dobijamo sve dane osim nedelje
// dani.pop() nam vraca tu izbrisanu vrednost
const subota = dani.pop();
console.log(subota);

// Domaci: Iz datog niza ispitati koliko elemenata je tipa string. a koliko tipa number, koliko tipa boolean, koliko elemenata je zapravo niz?
const nizz = [
  "jagoda",
  25,
  true,
  "mandarina",
  [1, 2, 3],
  49,
  694,
  "ananas",
  "tresnja",
  555,
];

function proveraTipa(nizz) {
  let countS = 0;
  let countB = 0;
  let countN = 0;
  let countA = 0;
  for (i = 0; i < nizz.length; i++) {
    if (typeof nizz[i] === "string") {
      countS++;
    } else if (typeof nizz[i] === "boolean") {
      countB++;
    } else if (typeof nizz[i] === "number") {
      countN++;
    } else if (Array.isArray(nizz[i])) {
      countA++;
    }
  }
  return `Ukupan broj Stringova je ${countS}.
          Ukupan broj Number je ${countN}.
          Ukupan broj Boolean je ${countB}.
          Ukupan broj Array je ${countA}.`;
}
console.log(proveraTipa(nizz));

const nizzz = [
  56,
  "danas",
  "fakultet",
  10,
  true,
  false,
  [1, 10, 10],
  "skola",
  "znanje",
  ["jagoda", 10, 10],
];

const tip = (nizzz) => {
  brojac1 = 0;
  brojac2 = 0;
  brojac3 = 0;
  brojac4 = 0;
  for (let i = 0; i < nizzz.length; i++) {
    if (typeof nizzz[i] === "string") {
      brojac1++;
    } else if (typeof nizzz[i] === "boolean") {
      brojac2++;
    } else if (typeof nizzz[i] === "number") {
      brojac3++;
    } else if (Array.isArray(nizzz[i])) {
      brojac4++;
    }
  }
  return `Stringova: ${brojac1}.
  Boolean: ${brojac2}.
  Number: ${brojac3}.
  Array: ${brojac4}.`;
};
console.log(tip(nizzz));
