// Sve funkcionise preko klasa i obj

// function User(ime, prezime) { // preko funk User je napravljen objekat
//   // argument, preko kojeg pristupamo prop
//   this.ime = ime;
//   this.prezime = prezime;
// }
// const bakir = new User("Bakir", "Ujkanovic");
// console.log(bakir);
///////////////// DEFINISANJE PROP PREKO KLASE
// class Person {
// mozemo da definisemo prop koji izlaze iz class-e
//   ime = "Default"; // moze da ima defaultnu vrednost
//   prezime;
//   godine; // prop od tog obj

// keyword u JS, ime, prezime nam je takodje konstruktor, za pravljenje nekih objekata
//   constructor(ime, prezime, brGodina) {
//     this.ime = ime; // instance te klase
//     this.prezime = prezime;
//     this.godine = brGodina;
//   }
//   imeIPrezime() {
//     return `${this.ime} ${this.prezime}`;
//   }
// }
// const person1 = new Person("Mehmed", "Kucevic", 15);
// // person1 moze pristupiti bilo kojoj metodi iz klase Person(koja je naprvaljena na standardan nacin)
// console.log(person1);

class Product {
  static IncreaseForTen = 1.1;
  constructor(name, price, decription, weight) {
    // sluzi za pravljenje obj,
    this.name = name; // ukazuju na property obj koji ce da bude napravljen pomocu klase
    this.price = price;
    this.decr = decription;
    this.weight = weight;
  }
  static increasePrice() {
    console.log(
      `This method will increase price for our product for 10% which will be multiply current price by ${this.IncreaseForTen}`
    );
  }
}
// Ne mozemo pristupiti statickoj metodi iz objekta, vec samo direktno preko klase.
// console.log(socks.IncreaseForTen);

const socks = new Product("white socks", 120, "100% cotton", 50);
console.log(socks);
console.log(Product.IncreaseForTen);

// INHERITANCE CLASS

class Person {
  // objekti koji instsanca Person klase
  constructor(ime, prezime, pol, starost) {
    this.ime = ime;
    this.prezime = prezime;
    this.pol = pol;
    this.starost = starost;
  }

  getInfo() {
    // metoda
    console.log(
      `${this.ime}, ${this.prezime} ima ${this.starost}, ${this.pol}`
    );
  }
}

const person = new Person("Mitar", "Vranic", "M", 20);
console.log(person);
console.log(person.getInfo());

class Student extends Person {
  // nasledjuje sva svojstva i metode od Person
  // moze samo da ima jednu klasu od koje nasledjuje
  constructor(
    ime,
    prezime,
    starost,
    pol,
    brojIndexa,
    godinaStudija,
    prosecnaOcena
  ) {
    super(ime, prezime, starost, pol); // sve property-je koje je imao person prevodi u studenta
    this.brojIndexa = brojIndexa;
    this.godinaStudija = godinaStudija;
    this.prosecnaOcena = prosecnaOcena;
  }
  getInfo() {
    console.log(
      `${this.ime} ${this.prezime} ima ${this.godina}. Trenutno je na ${this.godinaStudija} i prosecna ocena mu je ${this.prosecnaOcena}.`
    );
  }
}
const student = new Student("Amer", "Honic", "M", 19, 123321, 1, 7.77);
console.log(student);
console.log(student.getInfo());
