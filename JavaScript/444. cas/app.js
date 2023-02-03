const amer = {
  firstName: "Amer",
  lastName: "Honic",
  age: 19,
  fullName: function () {
    // ne ocekuje nikakav parametar
    return `${this.firstName} ${this.lastName}`;
  },
};

const emin = {
  firstName: "Emin",
  lastName: "Zukanovic",
  age: 19,
};

// Pozivanje neke duge funkcije za odredjeni objekat se moze izvrsiti pomocu funkcija:
// 1. call();
// 2. apply();
// 3. bind();

// Prvo treba pristupiti funkciji, pa onda objasniti na kom se objektu treba primeniti.
// Prvi argument call metode ce da bude data funkcija na koju se primenjuje, a drugi, treci... su argumenti koje zahteva fullName, ali u ovom slucaju ona ne zahteva nikakav argument. Ovo na objekat na koji se primenjuje data metoda ima sve one propertyje koji su postojani na drugi objekat na koji primenjujemo metodu.

// call() metoda za prvi argument ima objekat na koji se prmenjuje, a ostali argumenti su argumenti metode koja se izvrsava.

console.log(amer.fullName.call(emin)); // Emin Zukanovic

// 2. primer
const restoran1 = {
  hrana: "Spaghetti",
  gosti: "Veoma zadovoljni",
  lokacija: "Stevana Nemanje, 64",
  mesto: "Novi Pazar",
  drzava: "Srbija",
};

const restoran2 = {
  hrana: "Burek",
  gosti: "zgrozeni",
  lokacija: "Stanice Spasojevic, 62",
};

function poruka(mesto, drzava) {
  return `Vecerasnji specijalitet u nasem restoranu je bio ${this.hrana}. Nasi gosti su ${this.gosti}, te smo srecni zbog toga. \n Nalazimo se u ulici ${this.lokacija}, u ${mesto}, ${drzava}.`;
}
console.log(poruka.call(restoran1, "Novi Pazar", "Srbija"));

// aplly() metoda za prvi argument ima objekat na koji se primenjuje, drugi argument je niz gde smestamo argumente metode koja se izvrsava.

console.log(poruka.apply(restoran2, ["Sarajevo", "Bosna i Hercegovina"]));

// bind() metoda zahteva prethodno definisanje promenljive (funkcije) za odredjeni objekat, pa onda pozivanje funkcije sa eventualnim argumentima.

const bindFunction = poruka.bind(restoran1);
console.log(bindFunction("Novi Sad", "Srbija"));

function getValues(obj) {
  for (let key in obj) {
    // getValues.push(obj[key]);
    console.log(obj[key]);
  }
  return;
}

const obj = {
  marka: "Audi",
  model: "A6",
};
// for (let x in obj) {
//   console.log(x); // marka model
// }
