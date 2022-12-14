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
