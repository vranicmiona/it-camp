// indexOf() metoda vraca poziciju elementa koji predstavlja argument date metode. A ko ne moze da nadje index vraca -1.
const niz = ["Hatidza", "Bakir", "Amer", "Bakir", "Alen"];
const bakir = niz.indexOf("Bakir");
console.log(bakir + 1); // 2

const omar =
  niz.indexOf("Omar") === -1 ? "nije dolazio" : niz.indexOf("Omar") + 1;
// uslov: Omar se nalazi na poziciji 1  // ako nije -1 dobijamo neki drugi broj
console.log(omar);

const hatidza = niz.indexOf("Hatidza", 1);
console.log(hatidza); // -1

// lastIndexOf() metoda vraca poziciju poslednjeg pojavljivanja elementa koji predstavlja argument date metode. Vraca -1 ako se neki element ne nalazi u nizu.
const lastBakir = niz.lastIndexOf("Bakir");
console.log(lastBakir);

// Array.from() vraca niz, koji se pravi od nekoga objekta koji ima length.
const noviNiz = Array.from("SVAKO SLOVO CE BITI POSEBAN ELEMENT NIZA");
console.log(noviNiz);

// includes() metoda vraca Boolean u zavisnosti od toga da li se element nalazi u nizu
console.log(niz.includes("Emin")); // false

// keys() metoda vraca Array Iterator Object sa kljucevima (indexima) nekog niza. Mnogo ima vise smisla kod objekata.
const indexi = niz.keys(); // 0 1 2 3 4
console.log(indexi);

for (let index of indexi) {
  console.log(index);
}

// entries() metoda vraca Array Iterator Object sa key\value parovima nekog niza.

const entries = niz.entries();
console.log(entries);

for (let pair of entries) {
  console.log(pair);
  // [ 0, 'Hatidza' ]
  // [ 1, 'Bakir' ]
  // [ 2, 'Amer' ]
  // [ 3, 'Bakir' ]
  // [ 4, 'Alen' ]
}

// 3. zadatak
function element(niz, n) {
  let nizz = [];
  if (n > niz.length) {
    return niz;
  } else {
    return (nizz = niz.slice(0, n));
  }
}
console.log(element([2, 3, 4, 8], 2));

const getElements = (niz, n = undefined) => {
  // n je undefined ako se ne posalje
  if (n > niz.length) {
    return niz;
  } else if (n === undefined) {
    return niz[0];
  } else {
    return niz.slice(0, n);
  }
};
console.log(getElements(niz, 4));
console.log(getElements(niz));
console.log(getElements(niz, 10));

const niz2222 = ["Miona", "Mitar", "Marija", "programiranje", 7, true];
const uzmiElement = (niz2222, n = undefined) => {
  if (n > niz2222.length) {
    return niz2222;
  } else if (n === undefined) {
    return niz2222[0];
  } else {
    return niz2222.slice(0, n);
  }
};
console.log(uzmiElement(niz2222, 6)); // ceo niz vraca
console.log(uzmiElement(niz2222, 3 + 1)); // Miona, Mitar, "Marija", "programiranje"
console.log(uzmiElement(niz2222, 1)); // Miona
