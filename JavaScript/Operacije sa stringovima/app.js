let recenica = "Danas cemo raditi neke operacije sa stringovima!";
console.log(recenica);
// console.log(typeof recenica);
let omar = "Omar";

// Pristupanje nekom karakteru stringa se vrsi preko indexa.
// Indexiranje ide od !!!
// U SVAKOM INDEXIRAJUCEM OBJEKTU, POSLEDNJI KARAKTER IMA INDEX.
// (ukupna duzina stringa) -1 !!!

console.log(omar[0]);
console.log(omar[2]);

// Metoda za racunanje duzina stringa je lenght --->

let duzinaRecenice = recenica.length;
console.log(duzinaRecenice);
console.log(omar.length);

// Primer ---> Za svaki karakter neke recenice neka se ispise jedna ispod drugoga
//Kod ovakvih zadataka iterator predstavlja index pomocu koga pristupamo arakteru stringa

recenica = "Danas cemo raditi neke zadatke";
const duzina = recenica.length;
for (let i = 0; i < duzina; i++) {
    console.log(recenica[i]);
}
// Na osnovu unete recenice od strane koroisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog. Dok ako je neki karakter = "a", neka se ispise broj 5, a u slucaju da je karakter jednak "s" neka se ne ispise nista

const rec = prompt("Unesite neku recenicu: ");
const duz = rec.length;
for (let r = 0; r < duz; r++) {
    if (rec[r] === "a"){
        console.log(5);
    }
 else if (rec[r] === "s"){
    continue;
} else{console.log(rec[r]);
}}