// Funkcija u JavaScriptu predstavlja blok koda koji se izvrsava samo pozivanjem iste:
// Mozemo je definisati putem
// 1. finction keyworda
// 2. arrow function sintakse

// 1. Function keyword:
// Pravimo funkciju koja sabira 3 i 5 i
function zbirTriPet() {
    const zbir = 3 + 5;
    return zbir;
    // return 25 sve nakon returna se zamenjuje u function scopru 
} console.log(zbirTriPet());

// Pravimo funkcija koja sabira dva broja
function zbriDvaBroja(par1, par2) {
// par1 i par2 predstavlaju parametre funkcije
return par1 + par2;
} console.log(zbriDvaBroja(9, 4));
// Defaultna vrednost nekog parametra
// Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi drugi argument funkcija ga racuna kao 0.
// I nacin:
function zbirKvadrata(a, b) {
    if (b === undefined) {
        return a ** 2 + b ** 2;
    }
    };
    console.log(zbirKvadrata(2, 7));
    console.log(zbirKvadrata(2));
    // II nacin: DEFAULTNA VREDNOST SE STAVLJA NA KRAJU
    function zbirKvadrata3 (a, b = 0) {
        return a ** 2 + b ** 2;
    } console.log(zbirKvadrata3(5));
      console.log(zbirKvadrata3(5, 1));
    // Jos jedan nacin definisanja funkcije preko keyworda:
    const aritmetickaSredina = function (par1 = 1, par2 = 1, par3 = 1) {
        return (par1 + par2 + par3) / 3;
    } 
    console.log(aritmetickaSredina(4, 5, 3));
    console.log(aritmetickaSredina(4, 5));
    console.log(aritmetickaSredina());
    // Napraviti funkciju povrsina koja uzima dve vrednosti.Ako su te dve vrednosti jednake da vraca povrsinu 
    // kvadrata uz odredjenu poruku, dok ako su razlicite vrenosti da vraca povrsinu pravougaonika uz odredjenu poruku.
    const povrsina = function (a, b) {
        if (a === b) {
            return "Povrsina kvadrata " + a * b;
        } else {
            return "Povrsina pravougaonika iznosi " + a * b;
        }
    } 
    console.log(povrsina(4, 6));
    console.log(povrsina(5, 5));