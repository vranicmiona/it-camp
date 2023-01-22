// flat() metoda se koristi kada unutar niza imamo element koji je niz, i zelimo da sve podelemente izvucemo na nacin da oni predstvljaju elemente glavnog niza.

const niz = [
  ["jabuka", "ananas", "jagoda", "kruska"],
  ["krompir", "luk"],
  ["pite", "razna jela"],
];
const niz2 = niz.flat();
console.log(niz2);
