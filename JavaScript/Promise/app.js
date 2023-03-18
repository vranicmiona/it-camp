// Promise je JavaScript objekat koji predstavlja mesto za asihrone funkcije sve dok traje izvrsavavanje asihrone operacije.

const cizburger = new Promise((resolve, reject) => {
  const response = 200;
  // const response = 404
  if (response >= 200 && response < 300) {
    resolve();
  } else {
    reject();
  }
});

cizburger
  .then(() => console.log("Dobio sam cizburger!"))
  .catch(() => console.log("Nisam dobio cizburger!"))
  .finally(() => console.log("Obecanje je izvrseno!"));

const niz = new Promise((resolve, reject) => {
  const response = 200;
  // const response = 404
  if (response >= 200 && response < 300) {
    resolve([1, 2, 3, 4, 5]);
  } else {
    reject("Nismo dobili trazeni niz.");
  }
});

// chain efekat se postize tako sto vresdnost koja treba biti koriscena narednoj callback funkciji  then metode, se mora naci u return-u predhodne callback funkcije, predhodne then metode.

niz
  .then((niz) => {
    console.log(`Dobili smo ${niz}.`);
    const parni = niz.filter((br) => br % 2 === 0);
    return parni;
  })
  .then((noviNiz) => console.log(`Filtriran niz je ${noviNiz}`))
  .catch((message) => console.log(message));

// Domaci:
// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.
const proveraObjekta = new Promise((resolve, reject) => {
  const osoba = {
    ime: "Miona",
    prezime: "Vranic",
    obrazovanje: "fakultet",
    godine: 21,
  };
  if (osoba.godine > 17) {
    resolve("Vi ste punoletna osoba!");
  } else {
    reject("Vi ste maloletna osoba!");
  }
});
proveraObjekta
  .then((message) => console.log(message))
  .catch((message2) => console.log(message2));
// Napraviti funkciju koja sadrzi Promise koji proverava da li poslati argument funkcije ima vise od 10 samoglasnika.
// Ako argument ima vise od 10 samoglasnika neka se uspesno izvrsi obecanje sa porukom "String zadovoljava uslov";
// ako argument ima manje od 11 samoglasnika neka se reject_a obecanje uz poruku "String ne zadovoljava uslov";
// U svakom slucaju neka stoji poruka "Funkcija je uspesno izvrsena".

function proveraStringa(text) {
  const promise = new Promise((resolve, reject) => {
    const string = text.toLowerCase;
    let brojac = 0;
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "o" ||
        string[i] === "u"
      ) {
        brojac++;
      }
    }
    if (brojac > 10) {
      resolve("String zadovoljava uslov!");
    } else {
      reject("String ne zadovoljava uslov.");
    }
  });
  promise
    .then((poruka) => console.log(poruka))
    .catch((poruka1) => console.log(poruka1));
  // .finally(() => console.log("Proverili smo string!")); // ili return
}

console.log(proveraStringa("aeiouaeiouaeiouaeo"));
console.log(proveraStringa("neki str"));
