// 3.	(20)
//  let recenica;
// recenica = “Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa”
//  Na osnovu date recenice napraviti i ispisati novu recenicu tako da:
 
// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	na kraju se doda ‘.’
// (iii)	ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”

let recenica = "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";
let novaRecenica = "";
let duzina = recenica.length;
console.log(duzina);
for(a = 1; a <= duzina; a++){
    if(recenica[a] !== "a" ||
       recenica[a] !== "e" ||
       recenica[a] !== "i" ||
       recenica[a] !== "o" ||
       recenica[a] !== "u"){
        novaRecenica += recenica[a].toUpperCase();
    } else if (a = duzina){
        novaRecenica += ".";
    } 
    else {novaRecenica += recenica[a];}
} console.log(novaRecenica);