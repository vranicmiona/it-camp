// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

// 1.
const niz = [
  "analiticka hemija",
  "fizicka hemija",
  "organska hemija",
  "opsta hemija",
  "neorgansak hemija",
];
const niz1 = niz.map(
  (predmeti) => predmeti[0].toUpperCase() + predmeti.slice(1)
);
console.log(niz1);

// 2.
const num = [2, 8, 5, 10, 22, 12];
const num2 = num.map((broj) => broj ** 2);
console.log(num2);

// 3.
const sqrt = [4, 64, 25, 100, 484, 144];
const sqrt2 = sqrt.map((broj) => Math.sqrt(broj));
console.log(sqrt2);

// 4.
const brojevi = [-5, 4, 3, 10, 14, -5];
const brojevi2 = brojevi.map(function (broj) {
  const total = broj < 0 ? broj * -1 : broj ** 2;
  return total;
});
console.log(brojevi2);
