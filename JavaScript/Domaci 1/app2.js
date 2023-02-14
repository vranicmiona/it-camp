// Ispisati prvih 10 brojeva u consoli, jedan ispod drugog.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10); // itekako nije prakticno

// Petlja predtavlja (LOOP), nacin da se neki kod izvrsi (uz odredjen uslove) vise puta.

// FOR petlja - Sintaksa:

// for (statment1; statment2; statment3)
// kod za izvrsavanje u svakoj iteraciji.
// SVI USLOVI SU OBAVEZNI
// statment1 predstavlja definisanje promenljive koja predstavlja iterator
// statment2 predstavlja uslov (granicu) do koje vrednosti ce taj iterator da ide
// statment3 predtavlja povecanje ili smanjenje iteratora, koje se desi na kraju svake iteracije

// I NACIN:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Ispisati brojeve od 1 do 10 izuzev broja 2 i broja 5.

for (let i = 1; i < 11; i = i + 1) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

// continue keyword (rezerbisana rec) ako se nadje u nekoj iteraciji, zapravo
// oznacava da se ta iteracija zanemari i da se nastavi dalje sa sledecom.
// II NACIN:
// for (let  d = 1; d < 11; d = d + 1) {
// if (d === 2 || d === 5) {

// }else {
// console.log(i);

// break keyword (rezervisana rec) predstavlja da od tog trenutka for pretlja prestaje sa radom.

// Ispisati sve brojeve od 1 do 10. Ako je neki broj deljiv sa 7 neka se prekine petlja

for (let c = 1; c <= 10; c = c + 1) {
  if (c % 7 === 0) {
    break;
  } else {
    console.log(c); // else ne uzim auslov nego kaze inace neka se desi to
  }
}
//  Ispisati sve parne brojeve od 1 do 20 na dva nacina

for (let broj = 1; broj <= 20; broj++) {
  if (broj % 2 == 0) {
    console.log(broj);
  }
}

for (let broj = 2; broj < 21; broj = broj + 2) {
  console.log(broj);
}
