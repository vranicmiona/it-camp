// JavaScript Math Obejct //

// Math Object nam dozvoljavaju da izvrsimo neke dodatne radnje sa brojevima.

// Math Properties (konstante)

// Sintaksa je Math.Property.

// Math konstanti ima 8.

// Math.E vraca Ojlerov broj
console.log(Math.E); // 2.718281828459045

// Math.PI vraca broj PI
console.log(Math.PI); // 3.141592653589793

// Math.SQRT2 vraca vrednost kvadratnog korena broja 2
console.log(Math.SQRT2); //1.4142135623730951

// Math.SQRT1_2 vraca vrednost kvadratnog korena broja 2
console.log(Math.SQRT1_2); // 0.7071067811865476

// Math.LN2 vraca nam vrednost logaritma osnove e broja 2
console.log(Math.LN2);

// Math.LN10 vraca nam vrednost logaritma osnove e za broj 10
console.log(Math.LN10);

// Math.LOG2E vraca nam vrednost logaritma osnove 2 za broj e
console.log(Math.LOG2E);

// Math.LOG10E vraca nam vrednost logaritma osnove 10 za broj e
console.log(Math.LOG10E);

// Math Methods //

// Sintaksa je Math.metod(number)

// Number to Integer:

// 1. Math.round() - Vraca blizi ceo broj
console.log(Math.round(22.32)); // 22
console.log(Math.round(22.74)); // 23

// 2. Math.ceil() - Vraca sledeci ceo broj
console.log(Math.ceil(33.33)); // 34
console.log(Math.ceil(89.66)); // 90

// 3. Math.floor() - Vraca nam prethodni ceo broj
console.log(Math.floor(23.78)); // 23
console.log(Math.floor(76.22)); // 76

// 4. Math.trunc() - Vraca nam broj bez decimalnog zapisa
console.log(Math.trunc(234.78)); // 234
console.log(Math.trunc(78.9)); // 78

// 5. Math.sign(number) - Vraca -1, 0, 1 u zavisnosti od kog je znka broj
console.log(Math.sign(22)); // 1
console.log(Math.sign(-22)); // -1
console.log(Math.sign(0)); // 0

// 6. Math.pow(number,power) - Vraca number stepenovan na power
console.log(Math.pow(5, 10)); // 9765625
console.log(Math.pow(2, 3)); // 8

// 7. Math.sqrt(number) - Vraca nam kvadratni koren broja number
console.log(Math.sqrt(4)); // 2

// 8. Math.abs(number) - Varca absolutnu vrednost broja number
console.log(Math.abs(-7)); // 7
console.log(Math.abs(7)); // 7

// 9. Math.sin(radians) - vraca vrednost sinusa (1 i -1). Argument se posmatra kao vrednost u radijanima.
console.log(Math.sin(0)); // 0
console.log(Math.sin(Math.PI / 2)); // 1

// 10. Math.cos(radians) - vraca vrednost kosinusa (izmedju 1 i -1). Argument se posmatra kao vrednost u radijanima.
console.log(Math.cos(0)); // 1
console.log(Math.cos(Math.PI / 2)); // 6.123233995736766e-17

// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function bliziSto(num1, num2) {
  const razlika1 = Math.abs(100 - num1);
  const razlika2 = Math.abs(100 - num2);
  const bliziBroj =
    razlika1 > razlika2 ? num2 : razlika1 < razlika2 ? num1 : null;
  if (bliziBroj === null) {
    return `Brojevi su jednako udaljeni od broja 100.`;
  } else {
    return `Blizi broj je broj ${bliziBroj}.`;
  }
}
console.log(bliziSto(120, 89));
console.log(bliziSto(120, -120));
console.log(bliziSto(99, 101));
console.log(bliziSto(0, 200));

//  Domaci:
// 1. Napraviti funkciju koja izracunava obim kruga, gde se
//  poluprecnik unosi od strane korisnika.
function obimKruga(r) {
  const vrednost = 2 * r * Math.PI;
  return vrednost;
}
console.log(obimKruga(6));

// 2. Napraviti funkciju koja izracunava povrsinu kruga, gde
//  precnik predstavlja argument funkcije.
function povrsinaKruga(R) {
  const r = R / 2;
  const stepen = Math.pow(r, 2);
  const vrednost = stepen * Math.PI;
  return vrednost;
}
console.log(povrsinaKruga(5));

// 3. Napraviti funkciju za pretvaranje radijana u stepene. 1rad = (180 / PI) = 57.295
radStepeni = function (rad) {
  const convertor = rad * 57.295;
  return convertor;
};
console.log(radStepeni(4));
