// 1.
const today = new Date();
const day = today.getDay();
const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is: " + daylist[day] + ".");
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let prepand = hours >= 12 ? " PM " : " AM ";
hours = hours >= 12 ? hours - 12 : hours;
if (hours === 0 && hours === "PM" && minutes === 0 && seconds === 0) {
  hours = 12;
  prepand = "NOON";
} else if (hours === 0 && hours === "AM" && minutes === 0 && seconds === 0) {
  hours = 12;
  prepand = "MIDNIGHT";
} else {
  hours = 12;
  prepand = "AM";
}
console.log("Current time: " + hours + prepand + ":" + minutes + ":" + seconds);

// 2.
function print_current_page() {
  window.print();
}

// 3.
let today1 = new Date();
let dd = today1.getDate();
let mm = today1.getMonth();
let yyyy = today1.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
  if (mm < 10) {
    mm = "0" + mm;
  }
}
today1 = mm + "-" + dd + "-" + yyyy;
console.log(today1);
today1 = mm + "/" + dd + "/" + yyyy;
console.log(today1);
today1 = dd + "-" + mm + "-" + yyyy;
console.log(today1);
today1 = dd + "/" + mm + "/" + yyyy;
console.log(today1);

// 4. Hero's formula
const a = 3;
const b = 4;
const c = 5;
const s = (a + b + c) / 2;
const total = Math.sqrt(s * (s - a + (s - b) + (s - c)));
console.log(total);

// 6. Write a JavaScript function to check whether an `input` is a string or not. Go to the editor
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

const string = function (_a) {
  if ((_a >= "a" && _a <= "z") || (_a >= "A" && _a <= "Z")) {
    return true;
  } else if (_a >= "0" >= _a <= "9") {
    return false;
  }
};
console.log(string("gfdyugfyudgff"));
console.log(string([1, 2, 3, 4]));

// 7. Write a JavaScript function to check whether a string is blank or not. Go to the editor
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
function blankString(string2) {
  if (string2.length === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(blankString(""));
console.log(blankString("Miona Vranic"));

// 8. Write a JavaScript function to extract a specified number of characters from a string.
const extract = (string3) => {
  let string4 = string3.slice(0, string3.length);
  return string4;
};
console.log(extract("Recenica cao kako si, lalalllala.", 4));

// 9. Write JavaScript function to parameterize a string:
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa

const string5 = (argument) => {
  const string6 = argument.toLowerCase(/" "/gi);
  const string7 = string6.replace(/\s/g, "-"); // \s oznaka za space
  return string7;
};
console.log(string5("Ja sam Miona Vranic iz Srbije"));

// 10. Write a JavaScript function to capitalize the first letter of a string.
function capitalize(slovo) {
  const string8 = slovo.charAt(0).toUpperCase(); // + slovo.slice(1); i resi se odjednom
  const strng9 = slovo.slice(1, slovo.length);
  const string10 = string8.concat(strng9);
  return string10;
}
console.log(capitalize("javascript je programski jezik"));

// 11. Write a JavaScript function to capitalize the first letter of each word in a string
const firstLetter = (word) => {
  let duzina = word.length;
  let word2 = "";
  for (i = 0; i < duzina; i++) {
    if (word[i] === 0) {
      word2 += word[i].toUpperCase();
    } else if (word[i - 1] === " ") {
      word2 += word[i].toUpperCase();
    }
  }
  return word2;
};
console.log(firstLetter("caoo ljudi ja sam miona vranic!"));
