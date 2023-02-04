// JS objekti su mutable (promenljive) //

const dzenan = {
  ime: "Dzenan",
  prezime: "Mecinovic",
  godine: "19",
};
const dzenan2 = dzenan;
console.log(dzenan2); // ispisuje isto sto i za dzenan
dzenan2.prezime = "Kosuta";
dzenan2.godine = "26";
console.log(dzenan2);
console.log(dzenan); // ispisuje promenu za kao i za dzenan2

// Brisanje svojstava iz objekta :
const mitar = {
  ime: "Mitar",
  prezime: "Vranic",
  godine: "20",
  skola: "Prva tehnicka",
};

// delete obj.property brise i key i value
delete mitar.skola;
console.log(mitar); // bez skole

// 2. nacin:
delete mitar["skola"];

// Napomena.
// Vrednosti nekog objekta mogu biti:
// Objekti,
// Nizovi,
// Funkcije...

// Konvertovanje objekta u niz:
// Object.values(obj)
const niz = Object.values(mitar);
console.log(niz); // samo vrednosti

// Dodavanje novih svojstava:
mitar.punoletnost = true;
console.log(mitar);

// // Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).
const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;

myCar.povecanjeBrzine = function (ubrzanje) {
  if (this.trenutnaBrzina + ubrzanje > this.maksimalnaBrzina) {
    return `Nije moguce voziti preko maksialne brzine.`;
  } else {
    return (this.trenutnaBrzina += ubrzanje);
  }
};
console.log(myCar.povecanjeBrzine(90)); // 90
myCar.smanjenjeBrzine = function (smanjenje) {
  if (this.trenutnaBrzina - smanjenje < 0) {
    return `Ne mozete smanjiti brzinu za tu vrednost.`;
  } else {
    this.trenutnaBrzina -= smanjenje;
    return { trenutnaBrzina: this.trenutnaBrzina };
  }
};
console.log(myCar.smanjenjeBrzine(60)); // trenutnaBrzina: 30;

myCar.koci = function () {
  this.trenutnaBrzina = 0;
};
myCar.koci();
console.log(myCar);

// JavaScript su mutable promenljive, sto znaci da ako imamo dve promenjive smestene na istoj lokaciji u memoriji one su jednake po vrednostima, i kada zamenimo jednu menjmo i drugu. Dok su primitivni tipovi podataka immutable promenljive. Dodavanje i menjanje novih svojstva i brisanje ide preko delete. Property u objektu predstvaljaju key - eve, a vrednosti su value. Pretvaranje objekta u niz pomocu Object.values() bulit in metode koja nam vraca niz od samo vrednosti datoga objekta tj (values) bez kljuceva , sto nije slucaj okd entries.
