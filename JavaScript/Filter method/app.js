// filter() method kreira novi niz sa onim elementima koji se prosli test.
// Novodibijeni niz mzoe imati maksimalno elemenata kao niz na koji se primenjuje metoda, takodje moze biti prazan niz.

const godine = [19, 17, 20, 17, 16, 19, 10];
const godine2 = godine.filter((element) => element > 17);
console.log(godine2); // vracamo uslov return element > 17

// Napraviti novi niz koji filtirira postojeci i vraca novi niz sa onim elementima starog niza, gde je drugo slovo "e"

const niz = ["Bakir", "Haris", "Amer", "Dzenan", "Hasan", "Merisa"];
const niz2 = niz.filter((ime) => ime[1].includes("e"));
console.log(niz2);

const niz3 = niz.filter((element) => niz2.length <= 3);
console.log(niz3);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima ciji je tip "boolean"
const newArr = ["Rec", "DVE RECI", 26, true, false, [1, 2, 3]];
const newArr2 = newArr.filter((element) => typeof element === "boolean");
console.log(newArr2);

// Napraviti funkciju
const brojevi = [2, 4, 89, 67, 5, 4, 6, 8, 77, -22, 1];

function secondTask(arr) {
  const newArr = arr.filter((element) => element > 2);
  const newArr2 = newArr.map((element) => {
    if (element < 8) {
      return element * 2;
    } else {
      return element * 7;
    }
  });
  const newArr3 = newArr2.filter((element) => element < 10);
  return newArr3;
}
console.log(secondTask([2, 1, -22, 90, 6, 5, 4, 4, 2, 3, 0]));

// reduce() metoda vraca jednu vrednost. Iteracija se vrsi kroz ceo niz. Najcesce koristi u situacijama kada hocemo sumu.

// Sabrati sve elemente niza:

const zbirGodina = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(zbirGodina);

// Dodati pocetnu vrednost 350:

const iznos = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  350
);
console.log(iznos);

const prosecnaStarost = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
const prosecnaStarost2 = prosecnaStarost / godine.length;
console.log(prosecnaStarost2.toFixed(2));

// Zadatak

const miles = [55, 78, 140, 121, 96, 100, 67];
const totalKilometers = (arr) => {
  const convertMToK = arr.map((element) => element * 1.61);
  const suma = convertMToK.reduce((previous, current) => previous + current); // brze ce izvrsti kod ako imamo sve spojene metode
  return suma;
};
console.log(totalKilometers(miles));

// Zadatak:

function addition(arr, arr2) {
  const newArr = [];
  const length = arr.lenght > arr2.lenght ? arr.lenght : arr2.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] === undefined) {
      newArr.push(arr2[i]);
    } else if (arr2[i] === undefined) {
      newArr.push(arr[i]);
    } else {
      newArr.push(arr[i] + arr2[i]);
    }
  }
  return newArr;
}
console.log(addition([1, 0, 2, 3, 4], [8, 7, 4]));
