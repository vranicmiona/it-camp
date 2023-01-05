// unshift() method dodaje na pocetku niza jedan ili vis elemenata.
// unshift() prikazuje novu duzinu niza. Duzinu nam vracaju one metode koje dodaju element.

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

// Napraviti funkciju koja pravi nov niz, koji ce sadrzati samo elemente koji su se nalazili na neparnim pozicijama unutar originalnog niza.
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// [1, 3, 5, 7, 9, 11, 13]

function pozitivniBr(niz) {
  let noviNiz = [];
  for (i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      return niz[i];
    }
  }
  return;
}
console.log(pozitivniBr([1, -2, 4, -7, -9, 8, 0]));
