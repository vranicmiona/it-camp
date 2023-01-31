// Domaci zadatak:
// // Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

const mionaVranic = {
  firstName: "Miona",
  lastName: "Vranic",
  language: "srpski",
  setLanguage: function (jezik) {
    this.language = jezik;
    return this.language;
  },
  setNickName: function () {
    let prviDeo = this.firstName[0] + this.firstName[1];
    let drugiDeo = this.lastName[0].toLowerCase() + this.lastName[1];
    return prviDeo.concat(drugiDeo);
  },
};
console.log(mionaVranic.setLanguage("engleski"));
console.log(mionaVranic.setNickName());

// 2. Zadatak
const radnik = {
  firstName: "Miona",
  lastName: "Varnic",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  adresa: {
    ulica: "avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      return `${fullname()} zivi u ulici ${this.ulica} ${this.broj} u ${
        this.grad
      }.`;
    },
  },
};
console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());

// 3. Zadatak
// const automobil = {
//     marka: "Audi",
//     model: "Q7",
//     boja: "Bela",
//     pogon: "quattro",
//     menjac: "Automatik",
//     km:240000,
//     vlasnik:[062321552,063930630],
//     garaza:{
//         parking:"JKP Servis",
//         vikend:"od 17 free",
//         satnaKarta: "50",
//         dnevnaKarta: "200",
//         mesecnaKarta: "2000",
//         platiZa: function(od, do) {
//
// }
//     }
// }
