// Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi).
// Npr. 'anavolimilovana' je palindrom.

function novaFunkcija(recenica) {
  const string = recenica.split(" ").reverse().join(" ");
  return recenica === string ? "Jeste palindrom" : "Nije palindrom";
}
console.log(novaFunkcija("anavolimilovna"));
console.log(novaFunkcija("ana djordje"));
// Drugi nacin:
// PRAVLJENJE OBRNUTOG STRINGA
const funkcija = (recenica1) => {
  let recenica2 = "";
  for (let i = recenica1.length - 1; i >= 0; i--) {
    recenica2 += recenica1[i];
  }
  if (recenica2 === recenica1) {
    return "PALINDROM";
  } else {
    return "NIJE PALINDROM";
  }
};
console.log(funkcija("anavolimilovana"));
console.log(funkcija("anavoli djordja"));

// Za uneti string A treba kreirati novi string B koji se sastoji od prve i poslednje reči (odvojenih razmakom) unetog stringa. Npr. za A='Svuda pođi, kući dođi', dobija se B='Svuda dođi'. Podrazumeva se da uneti string nema vodeće ili prateće razmake
const drugaFunkcija = function (string4) {
  const firstSpace = string4.indexOf(" ");
  const firstWord = string4.slice(0, firstSpace);
  const secondSpace = string4.lastIndexOf(" ");
  const secondWord = string4.slice(secondSpace + 1);
  const string5 = firstWord.concat(" ", secondWord); // mora da radi concat
  return string5;
};
console.log(drugaFunkcija("Miona prezivam je Vranic"));
// Uzimanje dela stringa extraktovanje dela stringa se koriste slice u oji ulaze i negativne velicine, substring ne ulaze negativne velicine i ide od odredjenog brjoa do drugog broja ali ne uzima taj poslednji, sustr metoda
function trecaFunkcija(string6, pocetak, duzina) {
  const deoStringa = string6.substr(pocetak, duzina);
  return deoStringa; // pocinje brojanje od toga broja (predstavlja 1, kada pocne brojanje) do broja koji mu je zadat i to je broj 6
}
console.log(trecaFunkcija("hello world...", 2, 6));
// funkcija treba da vrati string da se zanemari karakter koji unosimo kao argument!!!! arument stoji u pocetku i njega ispitujemo kroz kod iza viticastih zagrada, parametar stoji na kraju i njega definisemo uz console.log()
function cetvrtaFunkcija(string8, karakter) {
  noviStr = "";
  for (i = 0; i <= string8.length; i++) {
    if (string8 !== karakter) {
      noviStr += string8[i];
    }
  }
  return noviStr;
}
console.log(cetvrtaFunkcija("Recenica sa slovom a.", "a")); // dobija se undefined
// Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.
const funkcija1 = (recenica2, n) => {
  if (n > recenica2.length) {
    return recenica2;
  }
  const recenica3 = recenica2.substr(n, recenica2.length);
  return recenica3;
};
console.log(
  funkcija1(
    "Entoropija je termodinamicka velicina za meru neuredjenosti sistema. Na grckom 'entropija' znaci 'menjanje'.",
    20
  )
);
// Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira
function mojaa(string0) {
  let string1 = "";
  for (let i = 0; i <= string0.length; i++) {
    if (string0.length % 2 === 1 && i === string0.length - 1) {
      string1 += string0[i];
    } else if (i % 2 === 0) {
      string1 += string0[i + 1];
    } else if (i % 2 === 1) {
      string1 += string0[i - 1];
    }
  }
  return string1;
}
console.log(mojaa("Entropija je izmisljena TD velicina"));
// Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B, tako što se kombinuju prvi sa prvim, drugi sa drugim, treći sa trećim znakom itd. Ako je jedan string duži od drugog, na kraju samo dodati znakove viška. Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled"
function funkcija5(prva, druga) {
  let treca = "";
  let duzina1 = prva.length;
  let duzina2 = druga.length;
  const duzina = duzina1 > duzina2 ? duzina1 : duzina2;
  for (i = 0; i <= duzina; i++) {
    if (prva[i] !== undefined && druga[i] !== undefined) {
      treca += prva[i] + druga[i];
    } else if (prva[i] === undefined) {
      treca += druga[i];
    } else if (druga[i] === undefined) {
      treca += prva[i];
    }
  }
  return treca;
}
console.log(
  funkcija5(
    "Entropija je ekstezivna velicina.",
    "Kada se deli brojem molova ona je intezivna velicina."
  )
);

const n = +prompt("Unesite neki broj: ");
let brojac = 0;
let zbir = 0;
for (let i = 0; i <= n; i++) {
  if (i % 5 === 0) {
    brojac++;
    zbir += i;
  }
}
console.log(
  "Ukupno ima brojeva koji su deljivi sa 5 " +
    brojac +
    " i njihov zbir je " +
    zbir
);
