// Domaci:
// 1. Write a JavaScript function to get nth largest element from an unsorted array.
// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89
function largestElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num > arr) {
      return arr;
    } else {
      const twoEl = arr.slice(num, num + 1);
      const oneEl = twoEl[0] > twoEl[1] ? twoEl[0] : twoEl[1];
      return oneEl;
    }
  }
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
    if (typeof element !== false) {
      return element;
    } else if (typeof element !== 0) {
      return element;
    } else if (typeof element !== null) {
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
function keys_Values(obj) {
  const newObj = Object.entries(obj).map(([keys, values]) => [values, keys]);
  return Object.fromEntries(newObj);
}
console.log(keys_Values(drzava));

// 4. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
function lengthObject(obj) {
  return Object.keys(obj).length;
}
console.log(lengthObject(student));
