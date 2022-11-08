// Prebjoati i sabrati deljive brojeve sa 5 u intervalu od 1 do n

// Iteracija od br 99 do -99
// Ispisati zbir broja deljivog sa 4 i broja 14
let number = 3
let counter = 0
let sum = 0
while (number < 18){
if (number % 3 === 0){
    counter++
    sum += number
}
number++
}
console.log("Aritmenticka sredina deljivih brojeva sa 3, iz intervala [3, 17] je: " + sum / counter);

// 1. Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo). Npr. za string "Mama ima momu" , dobija se rezultat 5.

const recenica = "Mama ima momu.";
let duzina = recenica.length;
let brojac = 0;
for (i = 1; 1 <= duzina; i++) {
    if (recenica[i] === "M" || recenica[i] === "m") {
        brojac++;
    } console.log("Unasem datom stringu ima " + brojac + "velikih i maloh slova m.");
}
