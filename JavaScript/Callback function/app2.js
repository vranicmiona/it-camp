// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

// 1.
const niz = [
  "analiticka hemija",
  "fizicka hemija",
  "organska hemija",
  "opsta hemija",
  "neorgansak hemija",
];
const niz1 = niz.map(
  (predmeti) => predmeti[0].toUpperCase() + predmeti.slice(1)
);
console.log(niz1);

// 2.
const num = [2, 8, 5, 10, 22, 12];
const num2 = num.map((broj) => broj ** 2);
console.log(num2);

// 3.
const sqrt = [4, 64, 25, 100, 484, 144];
const sqrt2 = sqrt.map((broj) => Math.sqrt(broj));
console.log(sqrt2);

// 4.
const brojevi = [-5, 4, 3, 10, 14, -5];
const brojevi2 = brojevi.map((broj) => {
  const total = brojevi < 0 ? broj * -1 : broj ** 2;
  return total;
});
console.log(brojevi2);

// Napraviti funkciju koja pravi novi niz gde ce se pozitivni elementi kvadirirati, negativni pomniziti sa (-1), a ako se neki element pojavljuje vuse puta u originalnom nizu, na svako sledece pojavljivanje ce se u novom nizu dodati element "ovde je bio dublikat".

const second = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // for(let element of arr) - ako nam nije bitna pozicija, za iteraciju klasicna for petlja
    if (arr.slice(0, i).includes(arr[i])) {
      newArr.push("ovde je bio duplikat");
    } else if (arr[i] < 0) {
      newArr.push(-arr[i]);
    } else {
      newArr.push(arr[i] ** 2);
    }
  }
  return newArr;
};

console.log(second([5, 4, -9, -6, 5, 4]));

// 5. Kvadrirati one brojeve koje imaju indexe 0, 3, 5
const brojevi12 = [2, 5, 8, -3, 5, 9];
const brojevi1 = brojevi12.map((element, index) => {
  if (index === 0 || index === 3 || index === 5) {
    return element ** 2;
  } else {
    return element;
  }
});
console.log(brojevi1);

// 6. Napraviti novi niz koji sadrzi kvadrate parnih elemenata postojeceg niza. Dok za neparne elemente treba vratiti aritmeticku sredinu prethodnog elemenata, datog, i narednog.
const numbers = [2, 5, 10, 3, 4, 8];

const number2 = numbers.map((element, index, arr) => {
  if (element % 2 === 0) {
    return element ** 2;
  } else {
    return +((arr[index - 1] + element + arr[index + 1]) / 3).toFixed(2);
  }
});
console.log(number2);

// Domaci:
// 1. Pomocu for petlje napraviti novi niz, koji ce sadrzati samo godine vece od 17.

// 2.
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

// 1.
const godine = (nizz) => {
  let niz0 = [];
  for (let element of nizz) {
    if (element > 17) {
      niz0.push(element);
    }
  }
  return niz0;
};
console.log(godine([2, 17, 18, 6, 22, 90, 3]));

// 2.
const prvi = DATA1.concat(DATA2);
const drugi = prvi.filter((element) => element % 2 === 0);
drugi.unshift(10, 20);
console.log(`Dva niza: ${prvi} i ${drugi}`);

function task(arr1, arr2) {
  const pomocniNiz = arr1.concat(arr2);
  const pomocniNiz2 = [];
  for (let br of pomocniNiz) {
    if (br % 2 === 0) {
      pomocniNiz2.push(br);
    }
  }
  pomocniNiz2.unshift(10, 20);
  return [pomocniNiz, pomocniNiz2];
}
console.log(
  task((DATA1 = [2, 26, 38, 75, 11, 29]), (DATA2 = ["a", "b", "c", "d", "e"]))
);
