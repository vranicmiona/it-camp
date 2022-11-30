// Replace metoda vrsi zamenu nekoliko karaktera datog stringa. Ima 2 argumenta.
// Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa
const recenica50 = "Danas smo podelili sertifikate za HTML CSS i JavaScript."
let recenica2 = recenica50.replace("Danas", "Juce");
console.log(recenica2);
recenica2 = recenica50.replace("s", "t");
console.log(recenica2);
// Za promenu svih pronalazenja datog stringa cemo koristiti Regular Expressions:
// 1. g (global)
recenica2 = recenica50.replace(/s/g, "t");
// 2. i (insensitive)
recenica2 = recenica50.replace(/s/gi, "A");
console.log(recenica2);

// Metoda za pretvaranje celog stringa u velika slova toUpperCase()
console.log(recenica50.toUpperCase());
// Za pretvaranja celog stinga u mala slova toLowerCase()
console.log(recenica50.toLowerCase());
console.log(recenica50);

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

const mojaFunkcija = function (ispitivanaRecenica){
    if(ispitivanaRecenica > 9){
      let polaDuzine = ispitivanaRecenica.length % 2 === 0 ? 
      ispitivanaRecenica.length / 2 : Math.ceil(recenica.length / 2);
      const isecak = ispitivanaRecenica(polaDuzine, ispitivanaRecenica.length);
      const novaRE = ispitivanaRecenica.replace(/a/g, "B");
      const kraj = "Ovo je novo dobijena reecnica ".concat(novaRE);
      return kraj;
    } else {
      const novaRE = ispitivanaRecenica.concat(ispitivanaRecenica.length, "nedovoljno za ispisivanje");
      return novaRE;
    }
};
console.log(mojaFunkcija("Kraj casa"));
console.log(mojaFunkcija("Kraj drugog casa rada sa stringovima."));

// Domaci zadatak:
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca ,
// datu recenicu u vise oblika (spojenu u jedan string).
// 1. Recenicu ispisanu velikim slovima
// 2. Recenicu ispisanim slovima
// 3.Pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec skola neka bude zamenjena sa fakultet 
// Neka bude ispisano 10 karaktera poslednjih 10 karaktera unete recenice
const domaci = function () {
  let nekaRecenica = prompt("Unesite neku recenicu: ");
  let duzina = nekaRecenica.length;
  let polaDuzine = duzina / 2;
  let prviDeo = nekaRecenica.substr(0, polaDuzine).toUpperCase();
  let drugiDeo = nekaRecenica.substr(polaDuzine, duzina).toLowerCase();

  let prva = nekaRecenica.toUpperCase();
  let druga = nekaRecenica.toLowerCase();
  let treca = prviDeo.concat(drugiDeo);
  let cetvrta = nekaRecenica.replace(/skola/gi, "fakultet");
  let peta = nekaRecenica.substring(0, 10);
  let sesta = nekaRecenica.slice(-10, duzina);
  return prva.concat(
    "\n",
    druga,
    "\n",
    treca,
    "\n",
    cetvrta,
    "\n",
    peta,
    "\n",
    sesta
  );
};

console.log(domaci());

let recenica = "Recenica koju treba iseci.";

let prva = recenica.slice(4, 8);
let druga = recenica.substring(4, 8);
let treca = recenica.substr(4, 10)