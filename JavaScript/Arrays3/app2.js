// Sortiranje nizova //

const voce = ["jagoda", "banana", "kruska", "ananas", "jabuka"];

// sort() metoda sortira niz abecedno.
// voce.sort();
// console.log(voce);

// reverse() metoda sorira niz obrnutim redosledom (u odnosu na predhodno stanje);
voce.sort().reverse();
console.log(voce);

// Ako zelimo da niz ide od "Z" do "A" koristimo reverse;

const brojevi = ["21", "1000", "9"]; // poredi indexe i to prve cifre od sva tri stringa 1 < 2 < 9
const brojevi2 = [9, -55, -99, 100, -3, 22, 44];
brojevi.sort().reverse();
console.log(brojevi);

// sort() metoda sama ne vrsi ispravno sortiranje kada se radi o brojevima.
// Za resavanje datog problema se kosristi callback fukncija unutar sort metoda.

// Funkcija koja se salje kao argument unutar neke druge funkcije se zove callback funkcija.

// function poredjaj(a, b) {
//   return a - b;
// }
brojevi.sort(function (a, b) {
  // anonimus funkcija ili callback
  return a - b;
});
console.log(brojevi);

brojevi2.sort((a, b) => a - b); // arrow funkcija dosta kraca
console.log(brojevi2);
brojevi2.sort((a, b) => b - a);
console.log(brojevi2);

// Ako zelimo da niz sortira brojeve random.

brojevi2.sort(() => 0.5 - Math.random()); // Math.random random broj izmedju 0 i 1
console.log(brojevi2);

// Domaci: Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju;
// Sortiranje niza od najmanjeg ka najvecem broju;
// Napraviti funkciju koja vraca najveci element niza;
// Napraviti funkciju koja vraca najmanji element niza (na dva nacina);
const niz = [-5, 6, 10, 45, 99, -44];

// 1.
niz.sort((a, b) => a - b);
console.log(niz);

// 2.
niz.sort((a, b) => b - a);
console.log(niz);

// 3.
const najveci = (niz) => {
  let veci = niz[0];
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > veci) {
      veci = niz[i];
    }
  }
  return veci;
};

console.log(najveci(niz));

// 4.
const najmanji = (niz) => {
  let manji = niz[0];
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] < manji) {
      min = niz[i];
    }
  }
  return manji;
};
console.log(najmanji(niz));
