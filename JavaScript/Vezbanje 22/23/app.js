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

// 12. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.i
function velikaMala(slova) {
  return slova.replace(/([a-z]+)|([A-Z]+)/g, function (slovaa, uslov) {
    return uslov ? slovaa.toUpperCase() : slovaa.toLowerCase();
  });
}
console.log(velikaMala("AAAbbbAA"));

// 13. Write a JavaScript function to convert a string into camel case.
const camelcase = (recenica1) => {
  return recenica1.replace(/\W+(.)/g, function (slova, uslov) {
    return uslov.toUpperCase();
  });
};
console.log(camelcase("Javascript excercise"));
console.log(camelcase("JavaScript-Excercise"));
console.log(camelcase("Javascript Excercise"));

// 14. Write a JavaScript function that takes a positive integer and reverse the binary representation of that integer. Finally return the decimal version of the binary string.
// 80 --> 1010000 = (reverse) = 101 = 5; 31 --> 11111 = (reverse) = 11111 = 31
function integer(int) {
  return parseInt(int.toString(2).split("").reverse().join(""), 2);
}
console.log(integer(80)); // 5
console.log(integer(31)); // 31

// 15. Kebab case: "the-quick-brown-fox-jumps-over-the-lazy-dog"
// Similar to snake case, above, except hyphens rather than underscores are used to replace spaces. It is also known as spinal case, param case, Lisp case in reference to the Lisp programming language, or dash case (or illustratively as kebab-case).
// Write a JavaScript function to check a given string is in Kebab case or not
const string1 = (recenica) => {
  if (typeof recenica !== string) {
    return `It must be string.`;
  }
  const pattern = /(\w+)-(\w)([\w-]*)/;
  return pattern.test(recenica) && !recenica.includes("_");
};
console.log(string1("j"));
console.log(string1("Java-Script"));
console.log(string1("JavaScript"));
