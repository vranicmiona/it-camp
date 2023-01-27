// 1. Fibonacijev niz cije vrednosti ne prelaze 4 miliona, pronaci sumu parnih brojeva
// Fibonacijev niz je sastavljen na nacin da je element jednak zbiru predhodna dva

const niz = [1, 1];
let i = 2;
while (niz[i - 2] + niz[i - 1] <= 4000000) {
  niz.push(niz[i - 2] + niz[i - 1]);
  i++; // da ne bi otisli u beskonacnu petlju mora iterator
}
const parni = niz
  .filter((element) => element % 2 === 0)
  .reduce((previous, current) => previous + current);
console.log(niz);
console.log(parni);

// 2. Broj palindrom se cita isto sa obe strane. Najveci palindrom napravljen od proizvoda dva dvocifrena broja je 9009 = 91 x 99.
//  Pronaci najveci palindrom napravljen od proizvoda dva trocifrena broja.
// I - NACIN:
function isPalindrom(broj) {
  const strBroj = broj.toString();
  let newStrBroj = "";
  for (i = strBroj.length - 1; i >= 0; i++) {
    newStrBroj += strBroj[i];
  }
  if (strBroj === newStrBroj) {
    return true; // ako jesu palindrom funcija vraca true, ako nisu vraca false
  } else {
    return false;
  }
}
const maxPalindrom = () => {
  const niz = [];
  for (i = 100; i < 1000; i++) {
    for (k = i; k < 1000; k++) {
      if (isPalindrom(i * k) && !niz.includes(i * k)) {
        niz.push(i * k);
      }
    }
  }
  return Math.max.applay(null, niz);
};
console.log(maxPalindrom());
// II - NACIN:
// const maxPalindrom2 = () => {
//   for (i = 999; i > 99; i--) {
//     for (k = 999; k > 99; k--) {
//       if (isPalindrom(i * k)) {
//         return i * k;
//       }
//     }
//   }
// };
// console.log(maxPalindrom2());
