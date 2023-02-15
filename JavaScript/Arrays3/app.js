// splice method() je najmocnija alatka kos nizova u JavaScriptu.
// Omogucava nam promene u nizu na zeljenoj poziciji.
// 1. Mozemo dodati (koliko hocemo) elemenata na nekom mestu;
// 2. Mozemo izbrisati (koliko hocemo) elemenata na nekom mestu;
const niz = [
  "Dzenan",
  "Bakir",
  "Amer",
  "Aladin",
  "Haris",
  "Merisa",
  "Hatidza",
  "Alen",
  "Emin",
  "Hamed",
  "Miona",
];
// const niz ="OVO NIJE DOZVOLJENO REINICALIZACIJA (PONOVNO DODELJIVANJE VREDNOSTI)", a ni REDEKLARACIJA.
// Mozemo da menjamo elemente niza kroz dozvoljene metode na refernentni tip podatka definisan sa const!!!
// splice() metoda uzima minimum 2 argumenta:
// Prvi argument kod splice() metode predstavlja poziciju od koje ce se vrsiti neke promene;
// Drugi argument je broj elementata koliko zelimo da ih izbrisemo iz niza
// Brisanjem nekog elementa brise se samo pozicija (mora da se promeni), ali indexi ostaju onakvi kakvi jesu, tj. menjanju se
// niz.splice(2, 6);
// console.log(niz);
// Zelimo da se na drugoj poziciji nadje Tarik, a na drugoj poziciji nemoj nikoga da brises samo mi dodaj Tarika
// Treci argument predstavlja vrednost koja ce se dodati na mestu koje smo definisali prvim argumentom.
// Svi ostali argumenti su takodje vrednosti koje se dodaju unutar niza.
// niz.splice(2, 0, "Tarik");
// console.log(niz);

// Iz niza izbrisati sve devojke;
// Iz niza izbrisati sve muskarce;
// Na petom elementu dodati "Tarik", a na kraju niza dodati "Omar";

// 1.
// niz.splice(5, 2);
// niz.splice(8, 1);
// console.log(niz);

// 2.
// niz.splice(0, 5);
// console.log(niz.splice(2, 3)); // splice() metoda nam vraca niz sa izbrisanim elementima
// console.log(niz);

// 3.
// niz.splice(4, 0, "Traik");
// // niz.push("Omar");
// niz.splice(13, 0, "Omar"); // umesto 13 moze i niz.length kao laksa varjanta da ne bi brojali
// console.log(niz);

// slice() metoda nam vraca novi niz sa uzetim delom originalnog niza:
const skraceniNiz = niz.slice(3, 5);
console.log(skraceniNiz);

// Izostavljanjem drugog argumenta kod slice metode se uzima ostatak niza. Tj. njegovu duzinu (niz.length).
const skraceniNiz2 = niz.slice(5);
console.log(skraceniNiz2);
