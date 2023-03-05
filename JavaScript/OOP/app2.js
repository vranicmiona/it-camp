// Osnovni principi na koje se zasniva Objektno orjentisano programiranje:bitne karakteristike objekata

// 1. Enkapsulacija
// Princip skrivanja informacija i funkcionalnosti objekata i pruzanja jednostavnog i jasnog
// interfejsa za rad sa tim objektima.

// 2. Inheritance (Nasledjivanje)
// Ovaj princip nam omogucava nasledjivanje novih klasa na osnovu postojecih. Samim tim se nasledjuju sve funkcionalnosti postojecih klasa.

// 3. Polimorfizam
// Ovaj princip nam omogucava koriscenje istog koda za rad sa razlicitim tipovima objekata.

// 4. Abstrakcija
// Omogucava nam da izolujemo i ideneifikujemo, a zanemarimo manje bitne.

// 1.
class Person {
  #ime; // svojstvo unutar kalse koje ce da bude privatno
  #prezime;
  constructor(ime, prezime, brGodine) {
    this.#ime = ime; // pozivanje objekta koji je instanca Person klase
    this.#prezime = prezime;
    this.godine = brGodine;
  } // Privatna metoda unutar klase sa #:
  #getInfo() {
    console.log(`${this.#ime} ${this.#prezime} ime ${this.godine} godina.`);
    // metoda koja nije privatna bez #
  }
  // get metoda nam sluzi za prikazivanje svojstava unutar klase koja su privatna unutar klase
  get fullName() {
    console.log(`${this.#ime} ${this.#prezime}`);
  }
  // set emtoda nam sluzi za promenu nekih svojstava koja su privatna unutar klase
  set changeName(newName) {
    this.#ime = newName;
  }
}
const person1 = new Person("Hatidza", "Mahmutovic", 17);
console.log(person1);
console.log(person1.getInfo);
// Izvrsavanje get metode je sintaksicki isto kao pozivanje nekog svojstva
console.log(person1.fullName); // pozivanje da se izvrsi property taj nacin
// Setovanje nove vrednosti putem set metode se vrsi na nacin kao da modifikujemo vrednost nekog objekta, s tim sto se pozivaom na naziv set metode.
person1.changeName = "Miona";
console.log(person1.fullName);

// 3.

class Oblik {
  // klasa od koje ce da nasledjuju neka svojstva
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  povrsina() {
    return 0;
  }
}

class Pravougaonik extends Oblik {
  constructor(x, y, a, b) {
    super(x, y);
    this.a = a;
    this.b = b;
  }

  povrsina() {
    return this.a * this.b; // nova metoda koja vraca 20
  }
}

const pravougaonik1 = new Pravougaonik(0, 0, 4, 5); // instanca
console.log(pravougaonik1);
console.log(pravougaonik1.povrsina()); // 0

class Krug extends Oblik {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
  }

  povrsina() {
    return Math.PI * this.r ** 2;
  }
}

const krug1 = new Krug(0, 0, 2);
console.log(krug1.povrsina()); // 12.566

// Polimorfna funkcija koju mozemo koristiti za razlicite tipove objekta (koji god objekat da mi posaljes sa tom nekom metodom neka se ona izvrsi kroz moju funkciju)
function izracunajPovrsinu(oblik) {
  return oblik.povrsina();
}

console.log(izracunajPovrsinu(pravougaonik1)); // 20
console.log(izracunajPovrsinu(krug1)); // 12.566
