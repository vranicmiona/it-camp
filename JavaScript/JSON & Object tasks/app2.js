// JS objekti su mutable (promenljive) //

const dzenan = {
  ime: "Dzenan",
  prezime: "Mecinovic",
  godine: "19",
};
const dzenan2 = dzenan;
console.log(dzenan2);
dzenan2.prezime = "Kosuta";
dzenan2.godine = "26";
console.log(dzenan2);
console.log(dzenan);

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

// Zadatak:
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
  trenutnaBrzina: 0,
  maksimalnaBrzina: 260,
};
