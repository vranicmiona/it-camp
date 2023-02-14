// 1. prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju iskljucivo engleskoj abecedi.
function malaSlova(recenica) {
  let duzina = recenica.length;
  let counter = 0;
  for (i = 0; i < duzina; i++) {
    if (recenica[i] !== recenica[i].toUpperCase()) {
      // moze i recenica[i] !== " " da napravimo space ko koristimo recenica[i] === recenica[i],toUpperCase
      counter++;
    }
  }
  return counter;
}
console.log(malaSlova("HSJGSJSGm xnj JHH"));

// 2. Ispitati da li u unetom stringu ima vise malih ili velikih slova koja se koriste u stringu.Slova su po abecedi

// II nacin: kuci uraditi
function kojihVise(recenica) {
  let brojacMalih = 0;
  let brojacVelikih = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] !== recenica[i].toUpperCase()) {
      brojacMalih++;
    } else if (recenica[i] !== recenica[i].toLowerCase()) {
      brojacVelikih++;
    }
  }
  if (brojacMalih > brojacVelikih) {
    return `Malih ima ${brojacMalih} i njih je vise.`;
  } else if (brojacMalih < brojacVelikih) {
    return `Velikih ima ${brojacVelikih} i njih je vise.`;
  } else {
    return `U poslatom stringu ima jednak broj velikih i malih slova.`;
  }
}

console.log(kojihVise("koliko KOJIH"));
console.log(kojihVise("koliko KOJIH IMA VISE"));
console.log(kojihVise("koliko jos tri KOJIH IMA VISE"));

// 3. Sva velika slova u stringu treba svesti na mala slova. Npr. za uneto 'WEBnSTUDY.com', dobija se novi string ''

const toLower = (recenica) => {
  let novaRecenica = "";
  for (let i = 0; i < recenica.length; i++) {
    novaRecenica += recenica[i].toLowerCase();
  }
  return novaRecenica;
};

console.log(toLower("ISPISI sva Mala slovA"));

const toLower2 = (recenica) => recenica.toLowerCase();
console.log(toLower2("ISPISI sva Mala slovA"));

// Zadatak 4. Pronaći poziciju poslednjeg razmaka u stringu. Npr. za uneto 'Pera ima devojku', rezultat je 8
const lastSpace = (string) => {
  const index = string.lastIndexOf(" ");
  if (index === -1) {
    return `U datom stringu nema razmaka.`;
  }
  return `Poslednji razmak se nalazi na ${index} mestu.`;
};

// Zadatak 5. Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', rezultat je 4. Podrazumeva se da uneti string nema vodeće razmake.
// I NACIN:
const duzinaPrveReci = function (recenica) {
  const index = recenica.search(" ");
  return `Prva rec ima ${index} karaktera.`;
};

console.log(duzinaPrveReci("PRVA"));

// II NACIN:
const duzinaPrveReci2 = function (recenica) {
  let brojac = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] === " ") {
      break;
    } else {
      brojac++;
    }
  }
  return `Prva rec ima ${brojac} karaktera.`;
};
console.log(duzinaPrveReci2("koliko ima karaktera prva rec?"));

// Zadatak 6. Iz unetog stringa treba izdvojiti N znakova sa leve strane. Npr. za string 'Pera ima devojku' i N=6, dobija se 'Pera i'. Ako je N veće od dužine stringa, kao rezultat se dobija ceo string.
const prvihN = (recenica8, n) => {
  if (n > recenica8.length) {
    return recenica8;
  } else {
    return recenica8.substr(0, n);
  }
};
console.log(prvihN("Treba vratiti prvihN 10 karaktera.", 10));
console.log(prvihN("Treba vratiti prvihN 100 karaktera.", 100));

// Zadatak 7.
// Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi).
// Npr. 'anavolimilovana' je palindrom.

// function mojaFunkcija(palindrom){
//     let palindrom2 = "";
//    if(palindrom.charAt(palindrom.length)){
//     for(i = 0; i < palindrom.length; i++){
//         palindrom2 += palindrom[i];
//         return palindrom2
//     }
//    }
//     else if(palindrom === palindrom2){
//         return "PALINDROM"
//     }else{
//         return "Nije palindrom"
//     }
//     return palindrom2
// }; console.log(mojaFunkcija("anavolimilovana"));
// I NACIN:
function mojaFunkcija(palindrom) {
  let recenica1 = palindrom.split("");
  let recenica2 = recenica1.reverse();
  return palindrom === recenica2.join("") ? "PALINDROM" : "Nije palindrom";
}
console.log(mojaFunkcija("anavolimilovana"));
console.log(mojaFunkcija("dobardan"));
// II NACIN:
function isPalindrom(rec) {
  let novaRec = "";
  for (let i = rec.length - 1; i >= 0; i--) {
    // pravljenje obrnutog stringa
    novaRec += rec[i]; // imamo novu rec koja je obrnuta u ovom koraku
  }
  if (rec === novaRec) {
    return "Data rec jeste palindrom!";
  } else {
    return "Data rec nije palindrom!";
  }
}
console.log(isPalindrom("anavolimilovana"));

function palindrom(rec) {
  let novaRec = "";
  for (let i = rec.length - 1; i >= 0; i--) {
    // krece od obrnutog stringa
    novaRec += rec[i];
  }
  if (novaRec === rec) {
    return `PALINDROM`;
  } else {
    return `nije`;
  }
}
console.log(palindrom("sia"));

// Zadatak 8. Za uneti string A treba kreirati novi string B koji se sastoji od prve i poslednje reči (odvojenih razmakom) unetog stringa. Npr. za A='Svuda pođi, kući dođi', dobija se B='Svuda dođi'. Podrazumeva se da uneti string nema vodeće ili prateće razmake
const prvaIPoslednja = function (recenica) {
  const pozicijaPrvogRazmaka = recenica.indexOf(" "); // izdvojio nam se prvi razmak
  const prvaRec = recenica.slice(0, pozicijaPrvogRazmaka); // izdvojila se rec bez razmaka
  const pozicijaPoslednjegRazmaka = recenica.lastIndexOf(" ");
  const poslednjaRec = recenica.slice(pozicijaPoslednjegRazmaka + 1);
  const recenica2 = prvaRec.concat(" ", poslednjaRec);
  return recenica2;
};
console.log(prvaIPoslednja("Hocemo prvu i poslednju rec."));

// Zadatak 9. Uzima se deo Stringa jedne recenice extraktovanje dela stringa
const podString = (string, pocetak, duzina) => {
  const noviString = string.substr(pocetak, duzina);
  return noviString;
};
console.log("Recenica kojoj cemo uzeti deo stringa", 5, 8);

// Zadatak 10:
// funkcija treba da vrati string da se zanemari karakter koji unosimo kao argument
function nasaFunkcija(rec, znak) {
  // const noviString = rec.replace(znak, "");
  noviString = "";
  for (i = 0; i < rec.length; i++) {
    if (rec !== znak) {
      noviString += rec[i];
    }
  }
  return noviString;
}
console.log(nasaFunkcija("Recenica sa slovom a.", "a"));

// Domaci zadatak:
// Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.
const task = (recenica10, n) => {
  const poslednjihN = recenica10.slice(-n); // drugi parametar nije neophodan kod slice metode
  return poslednjihN;
};
console.log(task("Pera ima devojku", 5));

// Zadatak 11. Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira
function zamenaMesta(string) {
  const duzina = string.length;
  let recenica11 = "";
  for (let i = 0; i < duzina; i++) {
    if (i % 2 === 0) {
      recenica11 += string[i + 1];
    } else if (i % 2 !== 0) {
      recenica11 += string[i - 1];
    }
  }
  return recenica11;
}
console.log(zamenaMesta("Pera ima devojku"));

function menjanje(recenicab) {
  let newS = "";
  for (let i = 0; i < recenicab.length; i++) {
    if (recenicab.length % 2 === 1 && i === recenicab.length - 1) {
      newS += recenicab[i];
    } else if (i % 2 === 0) {
      newS += recenicab[i + 1];
    } else if (i % 2 === 1) {
      newS += recenicab[i - 1];
    }
  }
  return newS;
}
console.log(menjanje("Pera ima devojku."));

// Zadatak 12. Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B, tako što se kombinuju prvi sa prvim, drugi sa drugim, treći sa trećim znakom itd. Ako je jedan string duži od drugog, na kraju samo dodati znakove viška. Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled"
const drugi = (rec5, rec2) => {
  let rec3 = "";
  const duzina1 = rec5.length;
  const duzina2 = rec2.length;
  const duzina = duzina1 > duzina2 ? duzina1 : duzina2;
  for (let i = 0; i < duzina; i++) {
    if (rec5[i] !== undefined && rec2[i] !== undefined) {
      rec3 += rec5[i] + rec2[i];
    } else if (rec5[i] === undefined) {
      rec3 += rec2[i];
    } else if (rec2[i] === undefined) {
      rec3 += rec5[i];
    }
  }
  return rec3;
};
console.log(drugi("PERA", "sladoled"));
console.log(drugi("OVO JE SADA DUZA RECENICA", "sladoled"));

// Zadatak 13. metoda koju mozemo da iskoristimo kada hocemo koja bi bila potrebna i JavaScriptu
// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// console.log(protectEmail("robin_singh@example.com"));
// "robin...@example.com"
function protectEmail(email) {
  let index = 0;
  for (let i = 0; i < email.length; i++) {
    if (
      email[i] === "." ||
      email[i] === "," ||
      email[i] === "_" ||
      email[i] === "0" ||
      email[i] === "1" ||
      email[i] === "2" ||
      email[i] === "3" ||
      email[i] === "4" ||
      email[i] === "5" ||
      email[i] === "6" ||
      email[i] === "7" ||
      email[i] === "8" ||
      email[i] === "9"
    ) {
      index = i;
      break;
    }
  }
  const indexAt = email.indexOf("@");
  const prviDeo = email.slice(0, index);
  const drugiDeo = email.slice(indexAt);
  const noviEmail = prviDeo.concat("...", drugiDeo);
  return noviEmail;
}
console.log(protectEmail("miona.vranic@gmail.com"));
console.log(protectEmail("miona5vranic@gmail.com"));
console.log(protectEmail("miona_vranic@gmail.com"));
