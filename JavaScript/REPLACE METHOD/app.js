// Replace metoda vrsi zamenu nekoliko karaktera datog stringa. Ima 2 argumenta.
// Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa
const recenica = "Danas smo podelili sertifikate za HTML CSS i JavaScript."
let recenica2 = recenica.replace("Danas", "Juce");
console.log(recenica2);
recenica2 = recenica.replace("s", "t");
console.log(recenica2);
// Za promenu svih pronalazenja datog stringa cemo koristiti Regular Expressions:
// 1. g (global)
recenica2 = recenica.replace(/s/g, "t");
// 2. i (insensitive)
recenica2 = recenica.replace(/s/gi, "A");
console.log(recenica2);

// Metoda za pretvaranje celog stringa u velika slova toUpperCase()
console.log(recenica.toUpperCase());
// Za pretvaranja celog stinga u mala slova toLowerCase()
console.log(recenica.toLowerCase());
console.log(recenica);

// Concatenation concat() vrsi spajanje dva ili vise stringova
let a = "Danas je 16. cas JavaScript.";
let b = "Bice JavaScripta i preko 50 casova.";
// Varijanta bez concat()
let c = a + " " + b;
console.log(c);

c = a.concat(b, "e", ".");
console.log(c);
c = a.concat(" ", b,"\nNakon toga cemo raditi React biblioteku");
console.log(c);

// Napomena.
// Sve string metode prave novu promenljivu (jer su stringovi immutable vrednosti).

// Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// Ako dati string ima vecu duzinu od 9:
// Pravi novi string koji ce biti isecak od pola do kraja originalnong stringa. Nakon toga novom stringu menjamo sva mala slova "a" sa velikim slovom "B", i funkcija ce vratiti dati novi string koji je savstavljen od "Ovo je novodobjena recenica," i posledjneg izmenjenog isecka.
// Ako string ima manju duzinu <= 9:
// Funkcija treba vratiti poruku:
// argument + {njena duzina} + "nedovoljno za dalje ispitivajne".

const mojaFunkcija = function(recenica) {{
    if(recenica.lenght > 9){
    //     if(recenica.lenght % 2 === 0)
    //         polaDuzine = rcenica.lenght / 2;
    //      else if(recenica.lenght % 2 !== 0)
    //         polaDuzine = Math.ceil(recenica.lenght / 2);
    //     
        // const isecak = 
        polaDuzine = recenica.lenght % 2 === 0 ? recenica.lenght / 2 : Math.ceil(rcenica.length / 2);
        const isecak = recenica.slice(polaDuzine, recenica.lenght);
        const novaRecenica = isecak.replace(/a/, "B");
        const konacno = "Ovo je novodobjena recenica,".concat(novaRecenica)
        return konacno;
    } else {
  const recernica2 = recenica.concat(rcenica.length, "nedovoljno za dalje ispitivajne. ");
  return recenica;
    }
}
console.log(mojaFunkcija("Kraj casa."));
console.log(mojaFunkcija("Kraj 2. casa rada sa stringovima."));