// NUMBERS //
// Kada se radi o decimalnim brojevima ne smemo se oslonti na JavaScript.
// const x = 0.1;
// const y = 0.2;
// const z = x + y;
// console.log(z);
// I JS poznaje smao tip podatka brojeve. U pitanju je number tip podatka i oni mogu biti zapisani sa ili bez decimalnog zareza.

// Veliki brojevi mogu biit zapisani sa tzv. exponent oznakom:

const petica = 5e6;
console.log(petica);
const noviBroj = 555e-5; // 555 podeljeno sa 5000000
console.log(noviBroj);

// + operator:
console.log("10" + 10); // "1010" String

console.log("10" - 2); // 8 NaN

// NaN - Not a Number
// NaN je JavaScript rezervisana rec koja ukazuje da broj nije korektan. NaN je tipa number!
// Za proveru da li je neka vrednost korektan broj se koristi !isNaN().
console.log(isNaN(100 / "Apple")); // true
// Infinity (ili -Infinity) je vrednost koju cemo da dobijemo kada rezultat premasi  (bude veoma mali broj)
// najveci broj JavaScriptu.
const a = 25;
const b = 0;
const d = -1;
const c = a / b;
console.log(c); //Infinity
console.log(c / b); // -Infinity
console.log(typeof -Infinity); //number
console.log(typeof Infinity); // number

// rgb(0, 255, 123)
// #12ab33
// (18,171,51)
// 12 = 1*16 + 2*1 = 18
// ab = 10*16 + 11*1 = 171
// 33 = 3*16 + 3*148 + 3 = 51

// Hexadecimal numbers:
// Ako su brojevi napisani prefiksom 0xFF rezultat ce biti 255.
const r = 0xff;
console.log(r); // 255

// Pored osnovnog nacina dodeljivanja vrednisti nekoj promenljivoj mozmo uraditi preko new keyworda:
const k = 22;
const l = new Number(33); // nije dobra praksa, mora da se koristi kod Setova kod mapa
console.log(k);
console.log(l);
console.log(typeof k); // number
console.log(typeof l); // object

// Napraviti funkciju koja pretvara: a) KM U M; b) inchi u cm
function kmToM(km) {
  return km * 1000;
}
const inchToCm = (inch) => inch * 2.54;
console.log(kmToM(4.68));
console.log(inchToCm(43));
