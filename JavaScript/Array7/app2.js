// Rekurzija u definiciji funkcije ce da pozove samu sebe da se izvrsi. Poziva izvrsenje same sebe unutar funkcije.
// Efekat petlje mozemo postici rekurzivnom funkcijom.

// Ispisati brojeve od 10 do 1;
for (i = 10; i >= 1; i--) {
  console.log(i);
}
const ispisivanje = (n) => {
  console.log(n);
  if (n - 1 > 0) {
    ispisivanje(n - 1);
  }
};
ispisivanje(10);

// Write a JavaScript program which prints the element of the following arrray. Go to editor
let a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

// 2.
const leapYears = (from, to) => {
  const leapYears = [];
  for (let i = from; i <= to; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 100 === 0 && i % 400 === 0)) {
      leapYears.push(i);
    }
  }
  return leapYears;
};
console.log(leapYears(2000, 2012));
