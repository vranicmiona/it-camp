// TRUTHY AND FALSY VALUES
const isSunny = false;
// Kraca sintaksa!
if (isSunny) {
    console.log("Napolju je suncano");
} else {
console.log("Napolju je kisa");
}
// Postoji samo 8 FALSY vrednosti i one su:
// 1. false
// 2. "" prazan string je FALSY vrednost, a da imamo neko slovo, recenisu, space to je TRUTHY vrednost
// 3. 0
// 4. -0
// 5. 0n
// 6. undefined 
// 7. null
// 8. NaN
// Npraviti funkciju gde se trazi unos od strsane kosrisnika i vreca poruku da li je
// uneta vrednost TRUTHY ili FALSY vrednost.
function recenica() {
    let recenica2 = +prompt(""); 
    if(recenica2){
        return ("Truthy");
    } else {
        return ("Falsy");
    }

}; console.log(recenica());
