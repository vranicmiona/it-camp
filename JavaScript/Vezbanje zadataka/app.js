// 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function firstE(arr, n) {
  let noviNiz = [];
  for (i = 0; i < arr.length; i++) {
    if (n > arr.length) {
      return arr;
    } else {
      noviNiz = arr.slice(0, n);
    }
  }
  return noviNiz;
}

console.log(firstE([7, 9, 0, -2], 3));
console.log(firstE([7, 9, 0, -2], 10));
console.log(firstE([7, 9, 0, -2], 1));

// 2. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

const lastEl = (arr, n) => {
  let noviNiz = [];
  if (n > arr.length) {
    return arr;
  } else {
    noviNiz = arr.slice(Math.max(arr.length - n, 0));
  }

  return noviNiz;
};
console.log(lastEl([7, 9, 0, -2], 1));
console.log(lastEl([7, 9, 0, -2], 3));
console.log(lastEl([7, 9, 0, -2], 10));

// Objekti
// Ako se u nekom zadatku trazi metoda prepisuje mu se pravljenje funkcije unutar ili izvan objekta

const opisOsobe = {
  firstName: "Miona",
  lastName: "Vranic",
  language: [],
  setLanguage: function (jezik) {
    if (!this.language.includes(jezik)) {
      this.language.push(jezik);
    }
  },
  setNickName: function () {
    let prviDeo = this.firstName[0] + this.firstName[1];
    let drugiDeo = this.lastName[0].toLowerCase() + this.lastName[1];
    return prviDeo.concat(drugiDeo);
  },
};

opisOsobe.setLanguage("engleski");
opisOsobe.setLanguage("nemacki");
opisOsobe.setLanguage("francuski");
console.log(opisOsobe.setNickName());
console.log(opisOsobe);

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
    cenaKarte: function (from, to) {
      const odakleKrecemo = from.getTime();
      const silaznaStanica = to.getTime();
      const razlika = Math.abs(odakleKrecemo - silaznaStanica);
      const brojDana = razlika / 86400000;
      return `Vasa karta ce kostati (${brojDana * this.dnevnaKarta})`;
    },
  },
};
console.log(
  automobil.garaza.cenaKarte(new Date(2023, 0, 1), new Date(2023, 0, 31))
); // 6000

// Time + 15 minutes
// Write programs that reads the hours and minutes of the 24-hour entered by the user and calculates what the time it will be in 15 minutes. Print the  results in (hours:minutes). The hours are always be between 0 and 23, and the minutes are always between 0 and 59. The hours are written in one digits. minutes are always displayed in two digits, with a landing zero are necessary.
function time(hours, minutes) {
  minutes += 15;
}
