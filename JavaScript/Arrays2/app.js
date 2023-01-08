// unshift() method dodaje na pocetku niza jedan ili vis elemenata.
// unshift() prikazuje novu duzinu niza. Duzinu nam vracaju one metode koje dodaju element. Pristupanje bilo kojoj vrednosti elementa vrsi se preko indexa.

const niz = ["cetvrtak", "petak", "subota"];
niz.unshift("sreda"); // moze da se dodaje koliko hocemo elemenata i svis epomeraju za po jedan index
console.log(niz);
console.log(niz.unshift("ponedeljak", "utorak")); // 6 duzina niza
console.log(niz);

// shift() method brise prvi element i svm ostalim elemntima samnjuje index za 1.

console.log(niz.shift()); // vraca nam izbrisan element kao kod pop() method.
console.log(niz);

// delete keyword za brisanje odredjenog elementa unutar niza:
// Preko delite keyworda mozemo izbrisati bilo koji eement iz niza ali na taj nacin ostavljamo rupe u nizu!!!
delete niz[4];
console.log(niz); // <1 empty item>

// concat() method se koristi za spajanje nizova. concat() metoda pravi novi niz. S tim sto kao argument mozemo poslati i string, ne mora iskljucivo biti niz.

const muskarci = ["Mitar", "Tarik", "Dzenan"];
const devojke = ["Miona", "Merisa", "Hatidza"];
const grupa = muskarci.concat(devojke, "Mehmed", "Omar");
console.log(grupa);

// Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim se Omar ne sme naci nigde.

const podeliNiz = (niz) => {
  const muskarci = [];
  const devojke = [];
  for (let osoba of niz) {
    if (osoba === "Omar") {
      continue;
    } else if (osoba[osoba.length - 1] === "a") {
      devojke.push(osoba);
    } else {
      muskarci.push(osoba);
    }
  }
  return `Muskarci su ${muskarci},
  devojke su ${devojke}.`;
};
console.log(podeliNiz(grupa));
// Napraviti funkciju koja pravi nov niz, koji ce sadrzati samo elemente koji su se nalazili na neparnim pozicijama unutar originalnog niza.
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// [1, 3, 5, 7, 9, 11, 13]

const neparnePozicije = (niz) => {
  const neparni = [];
  for (let i = 0; i < niz.length; i += 2) {
    neparni.push(niz[i]);
  }
  return neparni;
};
console.log(neparnePozicije([1, 3, 5, 7, 9, 11, 13]));

// Domaci:
// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na parnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [2,4,6,8,10,12,14]
const parnePozicije = (niz) => {
  const parni = [];
  for (let i = 0; i < niz.length; i++) {
    // i = pozicija
    if (i % 2 === 0) {
      parni.push(niz[i]);
    }
  }
  return parni;
};
console.log(parnePozicije([1, 2, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14]));
// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)
const parniBr = (niz) => {
  const parni = [];
  for (let broj of niz) {
    if (broj % 2 === 0) {
      parni.unshift(broj);
    }
  }
  return parni;
};
console.log(parniBr([2, 4, 1, 6, 34, 80, 77, 3, 88]));
// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)
const neparniBr = (niz) => {
  const neparni = [];
  for (let broj of niz) {
    if (broj % 2 === 1) {
      neparni.unshift(broj);
    }
  }
  return neparni;
};
console.log(neparniBr([0, 1, 7, 8, 4, 22, 90, 505, 25, 3]));
// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)
function pozitivniBr(niz) {
  let pozitivni = [];
  for (let broj of niz) {
    if (broj > 0) {
      pozitivni.unshift(broj);
    }
  }
  return pozitivni;
}
console.log(pozitivniBr([1, -2, 4, -7, -9, 8, 0]));
