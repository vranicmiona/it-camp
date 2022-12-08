// 1. prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju iskljucivo engleskoj abecedi.
function malaSlova(recenica) {
let duzina = recenica.length;
let counter = 0;
for (i = 0; i < duzina; i++){
    if(recenica[i] !== recenica[i].toUpperCase()){ // moze i recenica[i] !== " " da napravimo space ko koristimo recenica[i] === recenica[i],toUpperCase
        counter++;
    }
}
return counter;}
console.log(malaSlova("HSJGSJSGm xnj JHH"));

// 2. Ispitati da li u unetom stringu ima vise malih ili velikih slova koja se koriste u stringu.Slova su po abecedi 
const recenica2 = "HHHnnn"
let mala = 0;
let velika = 0;
for (w = 1; w < recenica2.length; w++) {
            if(recenica2[w] >= "a" && recenica2[w] <= "z") {
                mala++;
            } else if(recenica2[w] >= "A" && recenica2[w] <= "Z"){
                velika++;
            } else if(mala > velika) {
                console.log("Vise ima malih slova");
            } else if(velika < mala) {
                console.log("Vise ima velikih slova");
            } else if(mala === velika) {
                console.log("PODJEDNAKO IH IMA");
            } 
        } console.log("Velikih ima " + velika  + " i ima " + mala + " malih slova.");

    // II nacin: kuci uraditi
    function kojihVise(recenica3) {
        let brojacMalih = 0;
    }









    // 4. Sva velika slova u stringu treba sbesti na mala slova. Npr. za uneto 'WEBnSTUDY.com', dobija se novi string ''

function zadatakCetiri(recenica5){
    let recenica6 = ""
    let duzina1 = recenica5.length;
    for(s = 0; s < duzina1; s++){
        recenica6 += recenica[s].toLowerCase();
}
    return recenica6
};
console.log(zadatakCetiri("MOJA RECENICA  lalallalkakka"));

const toLower2 = (recnicaa) => {
    return recenicaa.toLowerCase();
}; console.log(toLower2("ISPISI sve mala slova"));

// Zadatak 4.
const lastSpace = (string) =>{
    const index = string.IndexOf(" ");
    if(index === -1){
        return `U datom stringu nema razmaka`
    }
    return `Poslednji razmak se nalazi na ${index} mastu.`;
};
console.log(lastSpace("Sta ako ima vise razmaka"));
console.log(lastSpace("string"));

// Zadatak 5. 
// I NACIN:
const duzinaPrveReci = function (recenica0){
    const index2 = recenica.search(" ");
    return `Prva rec ima ${index2} karaktera.`;
};
console.log(duzinaPrveReci("PRVA"));

// II NACIN:
const duzinaPrveReci2 = function (string3){
    brojac6 = 0;
    for (r = 0; r < string3.length; r++){
        if (recenca[r] === " "){
            break;
        } else{
            brojac++;
        }
    } return `Prva rec ima ${brojac6} karaktera`;
}; console.log(duzinaPrveReci2("koliko karaktera ima prva rec?"));

// Zadatak 6.
const prvihN = (recenica8, n) => {
    if(n > recenica8.length){
        return recenica8;
    } else{
        return recenica8.substr(0, n);
    }
}; console.log(prvihN("Treba vratititi prvihN 10 karaktera.", 10));
console.log(prvihN("Treba vratititi prvihN 100 karaktera.", 100));

