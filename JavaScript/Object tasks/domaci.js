// Domaci:
// 1. Write a JavaScript function to get nth largest element from an unsorted array.
// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89
function largestElement(arr, num) {
  arr.sort((a, b) => b - a);
  return arr[num - 1];
}
console.log(largestElement([43, 56, 23, 89, 88, 90, 99, 652], 4));
console.log(largestElement([43, 56, 23, 89, 88, 90, 99, 652], 8));
console.log(largestElement([43, 56, 23, 89, 88, 90, 99, 652], 7));

// 2. Write a JavaScript function to filter false, null, 0 and blank values from an array.
// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]
function filterEl(arr) {
  const newArr = arr.filter((element) => {
    if (element !== false) {
      return element;
    } else if (element !== 0) {
      return element;
    } else if (element !== null) {
      return element;
    }
  });
  return newArr;
}
console.log(filterEl([58, "", "abcd", true, null, false, 0]));

// 3. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
const drzava = {
  drzava: "Srbija",
  grad: "Kragujevac",
  ulica: "Radoja Domanovica",
  fakultet: "PMF",
};
// I NACIN:
function keys_Values(obj) {
  const newObj = Object.entries(obj).map(([keys, values]) => [values, keys]);
  return Object.fromEntries(newObj);
}
console.log(keys_Values(drzava));
// II NACIN:
const keysToValues = (obj) => {
  const newObj = {};
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  for (let i = 0; i <= values.length - 1; i++) {
    newObj[values[i]] = keys[i];
  }
  return newObj;
};
console.log(keysToValues(drzava));

// 4. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

function lengthObject(obj) {
  return Object.keys(obj).length; // moze i Object.values()
}
console.log(lengthObject(student));

// 4. Zadatak
function noviNiz(arr1, arr2) {
  const newArr3 = [];
  const newArr2 = arr2.filter((element) => element <= arr1.length - 1);
  for (let i = 0; i < newArr2.length; i++) {
    // pristupamo indexu od arr2 jer na osnovu njega odredjujemo poziciju arr1
    newArr3.push(arr1[newArr2[i] - 1]); // vrednosti iz arr2 nam ukazuju na index od niza arr1
  }
  return newArr3;
}
console.log(noviNiz([23, 52, 38, 44], [3, 1, 1, 2]));

// 5. Zadatak
function niz(arr) {
  counter = 0;
  for (i = 0; i < arr.length; i++) {
    if (i === 0) {
      continue;
    } else if (arr[i] === 2 * arr[i - 1] && arr[i] === arr[i + 1] - 10) {
      counter++;
    }
  }
  return counter;
}
console.log(niz([10, 20, 30, 60, 70]));
