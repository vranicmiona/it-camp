// Napraviti funkciju koja ce povecati vrednost satne, dnevne i mesecne karte za po 20%.
// Za bilo koji objekat koji ima properties: satnaKarta, dnevnaKarta i mesecnaKarta.
// Nakon toga je primeniti za automobil objekat i ispisati automobil nakon toga.
const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: 50,
    dnevnaKarta: 200,
    mesecnaKarta: 2000,
  },
};

function povecanaCenaKarte(a) {
  automobil.garaza.satnaKarta += automobil.garaza.satnaKarta * a;
  automobil.garaza.dnevnaKarta += automobil.garaza.dnevnaKarta * a;
  automobil.garaza.mesecnaKarta += automobil.garaza.mesecnaKarta * a;
  return {
    satnaKarta: automobil.garaza.satnaKarta,
    dnevnaKarta: automobil.garaza.dnevnaKarta,
    mesecnaKarta: automobil.garaza.mesecnaKarta,
  };
}
console.log(povecanaCenaKarte.call(automobil.garaza, 0.2));
console.log(automobil);
