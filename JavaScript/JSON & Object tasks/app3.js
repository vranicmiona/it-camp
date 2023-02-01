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
  language: [],
  setLanguage: function (jezik) {
    if (!this.language.includes(jezik)) {
      // ! ako taj niz ne ukljucuje language
      this.language.push(jezik);
    }
  },
  setNickName: function () {
    let prviDeo = this.firstName[0] + this.firstName[1];
    let drugiDeo = this.lastName[0].toLowerCase() + this.lastName[1];
    return prviDeo.concat(drugiDeo);
  },
};
mionaVranic.setLanguage("english");
mionaVranic.setLanguage("spain");
console.log(mionaVranic.language);
console.log(mionaVranic.setNickName());

// 2. Zadatak
const radnik = {
  firstName: "Miona",
  lastName: "Vranic",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  adresa: {
    ulica: "avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      return `${radnik.fullname()} zivi u ulici ${this.ulica} ${this.broj} u ${
        this.grad
      }.`;
    },
  },
};
console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());

// 3. Zadatak
const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: [062321552],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (from, to) {
      const prvi = from.getTime();
      const drugi = to.getTime();
      const razlika = Math.abs(drugi - prvi);
      // 1sek = 1000
      // 1min = 60
      // 1h = 24
      // 1000 * 60 * 60 * 24
      const brojDana = razlika / (1000 * 60 * 60 * 24);
      return `Vasa karta ce kostati ${brojDana * this.dnevnaKarta}.`;
    },
  },
};
console.log(
  automobil.garaza.platiZa(new Date(2023, 0, 21), new Date(2023, 0, 26))
);
