// Stringovi su immutable promenljive, nije moguce vrsiti modifikaciju postojeceg stringa
// Alternativa je da napravimo novi string i tada je moguce dodavati vrdenosti kada god zelimo.

let rec1 = "Petak";
console.log(rec1[2]);

// toUpperCase() - metoda koja pretvara ceo string u velika slova.

let PETAK = rec1.toUpperCase()
console.log(PETAK);
// moguce je console.log(rec1.toUpperCase);

// toLowerCase() - metoda koja pretvara ceo string u mala slova.

let petak = rec1.toLowerCase()
console.log(petak);

const recenica0 = "zelIMO DAtu RECEnicu PriKAZATI malIm sovima."
let recenica1 = recenica0.toUpperCase()
console.log(recenica1);
let recenica2 = recenica1.toLowerCase()
// console.log(recenica2);
console.log("Recenica maim slovima ce biti: \n" + recenica1 + "dok ce recenica velikim slovima biti: \n" + recenica2);

// Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom
const recenica = "sledece subote cemo imati test koji predstavlja kraj prvog ciklusa. nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it campa."

let novaRecenica = "" // da bi 
// u nju dodavali nove stvari
// let novaRecenica2 = " "
// console.log(Boolean(novaRecenica2));
// console.log(Boolean(novaRecenica));
// for (i = 0; i < recenica.length; i++){
    // if (i === 0) {
    //    novarecenica += recenica[i].toUpperCase();
    // } else if (recenica[i-1] === ""){
        // novaRecenica += recenica[i].toUpperCase();
    // } else {
        // novaRecenica += recenica[i];
    // }
// }console.log(novaRecenica);

// Ispisati novu recernicu gde ce svaka rec da zavrsi velikim slovom

const first = "sledece subote cemo imati test koji predstavlja kraj prvog ciklusa. nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it campa"

let second = "";
for (a = 0; a < first.length; a++) {
    if (a === first.length - 1 || first[a + 1] === "." || first[a + 1] === ",") {
        second += first[a].toUpperCase();
    } else if (recenica[a + 1] === " ") {
        second += first[a].toUpperCase();
    } else {
        second += first[a];
    }
} 
console.log(second);