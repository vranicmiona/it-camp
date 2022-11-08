// 1. Napisite funkciju koja ima jedan string parametar i koja vraća string koji se dobija sledećom promenom parametra:
        // - svi samoglasnici (a, e, i, o ,u) se pretvaraju u velika slova.
        // - svi suglasnici moraju biti mala slova
        // - svi ostali znaci u stringu ostaju nepromenjeni
const recenica = "Danas je ponedeljak, a sutra utorak.";
let novaRecenica = ""
for (a = 0; a <= recenica.length; a++) {
    if(
        recenica[a] !== "a" ||
        recenica[a] !== "e" ||
        recenica[a] !== "i" ||
        recenica[a] !== "o" ||
        recenica[a] !== "u" 
    ){novaRecenica += recenica.toUpperCase();}
    else if (recenica[a-71] === "") {
novaRecenica += "."
}
 else {
novaRecenica += recenica[a];
}}

console.log(novaRecenica);
// 2.  Napraviti novu recenicu gde ce umesto slova "a" pisati "t". Dok ako se posle slova "a"
//  nalazi slovo "n" pisace "d" umesto a.
const first = "Banana je omiljeno voce Talibovo. Banana nam stize iz Paname. I banane su jako zdrave.";
let duzina = first.length;
let second = ""
for (i = 0; i <= duzina; i++) {
    if (first[i] === a && first[i + 1] === n) {
        second += "t";
    } else {
        second += first[i];
    }
}
