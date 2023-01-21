// every() metoda proverava da li su svi elementi niza zadovoljili dati uslov.
// every() metoda vraca boolean

// da li su svi u grupi punoletni?
const godina = [16, 19, 18, 19, 15, 17, 21, 20, 17];
const isEveryAdult = godina.every((element) => element > 17);
console.log(isEveryAdult); // false
const niz = [
  "Tarik",
  "Bakir",
  "Haris",
  "Aladin",
  "Mehmed",
  "Hatidza",
  "Hasan",
  "Miona",
  "Mitar",
];
const ime = niz.every((element) => element.length >= 5);
console.log(ime); // true

// some() metoda proverava da li bar jedan element niza zadovoljaa uslov.
// some() metoda vraca boolean (logicki entitet koji vraca true ili false);

const isSomeName = niz.some((name) => name.length === 9);
console.log(isSomeName); // false
const isSomeName2 = niz.some((name) => name.length === 7);
console.log(isSomeName2); // true

const check = (arr) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length === 7) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};
console.log(check(niz)); // true
console.log(
  check(["nije sedan karaktera", "opet nije seam karaktera", "hello"])
); // false

// find() metoda vraca vrednost prvog elementa koji je prosao test funkcije.
const brojevi = [4, 9, 16, 25, 29];

// Koji je prvi element niza veci od 18

const prviElement = brojevi.find((element) => element > 18);
console.log(prviElement); // 25

// Ako nijedan element nije zadovoljio uslov find() metode vraca undefined.

const prviElement2 = brojevi.find((element) => element > 30);
console.log(prviElement2); // undefined

// findIndex() metoda vraca index prvog elemnta koji je zadovoljio uslov.
// Ako nijedan element nije zadovljio uslov findIndex() metoda vraca -1.

const firstIndex = brojevi.find((element) => element > 18);
console.log(firstIndex); // 25
const firstIndex2 = brojevi.find((element) => element > 18);
console.log(firstIndex2); // 25

// Write a JavaScript program to remove duplicate items from array (ignore case sensitivity).

function removeDuplicates(arr) {
  const newArray = [];
  for (let el of arr) {
    if (
      (typeof el === "string" &&
        newArray.some(
          (element) => element.toLowerCase() === el.toLowerCase()
        )) ||
      newArray.some((element) => element === el)
    ) {
      continue;
    } else {
      newArray.push(el);
    }
  }
  return newArray;
}
console.log(removeDuplicates(["Mitar", "miTAr", "Alen", "alen", "aLeN"])); // Mitar, Alen

// We have the following arrays: Go to the editor
color = [
  "Blue",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow",
  "Scarlet",
  "Pink",
  "Black",
  "White",
  "color",
];
o = ["st", "nd", "rd", "th"];
// Write a JavaScript program to display the color in the following way:
// "1st choice is Blue"
// "2nd choice is Green"
// "3th choice is Red."

const newArr = color.map((element, index) => {
  if (index === 0) {
    return "1" + o[index] + "choice is" + element;
  } else if (index === 1) {
    return "2" + o[index] + "choice is" + element;
  } else if (index === 2) {
    return "3" + o[index] + "choice is" + element;
  } else {
    return `${index + 1}` + o[3] + "choice is" + element;
  }
});
console.log(newArr);
