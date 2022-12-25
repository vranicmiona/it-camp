// Nastavka Math metoda //
// Math.min() nam vraca najmanji broj od poslatih. Argumenata moze imati neograniceno.
console.log(Math.min(45, 76, 43, 55, -14, -66)); // -66

// Math.max() nam vraca najveci broj od poslatih. Argumenata moze imati neograniceno.
console.log(Math.max(34, 90, 99, 0, -3)); // 99

// Primema kod nizova:
const najmanji = Math.min.apply(null, [(19, 55, 90)]); // radi uz pomoc apply 90
console.log(najmanji);

// Math.random() nam daje broj izmedju 0(ukljucujuci) i 1(nije ukljucena). npr: - slice metoda
console.log(Math.random());

// Broj izmedju 0 i 1:
const izmedju = Math.round(Math.random());
console.log(izmedju);

// Broj izmedju 0 i 5:
const broj2 = Math.round(Math.random() * 5);
console.log(broj2);

// Broj izmedju 50 i 100:
// Mnozimo sa brojem koliki ce zapravo opseg biti, a dodajemo broj koji ce predstavlja pocetnu vrednost iz opsega.
const broj3 = Math.round(Math.random() * 50 + 50);
console.log(broj3);

// Math.log(x) - vraca vrednsot logaritma broja x za osnovu e
// Math.log2(x) - vraca vrednost logaritma broja x za osnovu 2
// Math.log10(x) - vraca vrednost logaritma broja x za osnovu 10

console.log(Math.log2(7));
console.log(Math.log2(0.36));
console.log(Math.log2(10));

// Zadatak 1. Izracunati rastojanje izmedju dve tacke u prostoru ako su zadate koordinate krajnjih tacaka.
function rastojanjeTacaka(x1, y1, x2, y2) {
  //   const stepen1 = (x2 - x1) ** 2;
  //   const stepen2 = (y2 - y1) ** 2;
  const stepen1 = Math.pow(x2 - x1, 2);
  const stepen2 = Math.pow(y2 - y1, 2);
  const total = Math.sqrt(stepen1 + stepen2);
  return total;
}
console.log(rastojanjeTacaka(2, 3, 9, 89));

// Zadatak 2. Bolji u dve discipline
function dvaTakmicara(m1, p1, m2, p2) {
  const ukupno1 = m1 + p1;
  const ukupno2 = m2 + p2;
  if (ukupno1 === ukupno2) {
    if (p1 > p2) {
      return `Pobednik je 1 takmicar.`;
    } else if (p2 > p1) {
      return `Pobednik je 2 takmicar.`;
    } else {
      return `Pobednik je 1 takmicar.`;
    }
  } else if (ukupno1 > ukupno2) {
    return `Pobednik je takmicar 1.`;
  } else if (ukupno2 > ukupno1) {
    return `Pobednik je takmicar 2.`;
  }
}
console.log(dvaTakmicara(40, 30, 40, 30));
console.log(dvaTakmicara(35, 30, 40, 25));
console.log(dvaTakmicara(49, 20, 20, 50));

// Whrite JavaScript function to get the greatest common division (NZD) of two intagers.

function division(num1, num2) {
  // const manji = num1 < num2 ? num1 : num2
  let manji = Math.min(num1, num2);
  let zeljeniBroj;
  while (manji >= 1) {
    if (num1 % manji === 0 && num2 % manji === 0) {
      zeljeniBroj = manji;
      break;
    }
    manji--;
  }
  return zeljeniBroj;
}
console.log(division(10, 15)); // 5
console.log(division(5, 10)); // 5
console.log(division(9, 4)); // 1

// Write a JavaScript function to get the least common multiple (NZS) of two numbers.
