// 1.Write a JavaScript program to find the largest of three given integers.

function najveci(prvi, drugi, treci) {
  if (prvi >= drugi && prvi >= treci) {
    max = prvi;
  } else if (drugi >= prvi && drugi >= treci) {
    max = drugi;
  } else {
    max = treci;
  }
  return `Najveci broj ${max}.`;
}
console.log(najveci(2, 5, 5));
console.log(najveci(-22, -25, -55));

// 2. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
// I NACIN:
function nearestHundred(int1, int2) {
  let counter1 = 0;
  let counter2 = 0;
  if (int1 >= 100) {
    for (let i = int1; i >= 100; i--) {
      counter1++;
    }
  } else {
    for (let i = int1; i <= 100; i++) {
      counter1++;
    }
  }
  if (int2 >= 100) {
    for (let i = int2; i >= 100; i--) {
      counter2++;
    }
  } else {
    for (let i = int2; i <= 100; i++) {
      counter2++;
    }
  }
  if (counter1 > counter2) {
    return `Drugi je blizi broju 100. Drugi broj je udaljen od 100 za ${counter2}!`;
  } else if (counter1 === counter2) {
    return `Brojevi su jednaki`;
  } else if (counter1 === 0 || counter2 === 0) {
    return `Broj je jednak 100.`;
  } else {
    return `Prvi je blizi broju 100. Prvi broj je udaljen od 100 za ${counter1}!`;
  }
}
console.log(nearestHundred(12, 12)); // jednaki
console.log(nearestHundred(-1, 400)); // prvi je blizi, daljen za 102
console.log(nearestHundred(105, 100));
// II NACIN:
const bliziSto = (num1, num2) => {
  const razlika1 = Math.abs(100 - num1);
  const razlika2 = Math.abs(100 - num2);
  const bliziBroj =
    razlika1 > razlika2 ? num2 : razlika1 < razlika2 ? num1 : null;
  if (bliziBroj === null) {
    return `Brojevi su jednako udaljeni od broja 100.`;
  } else {
    return `Blizi je broj ${bliziBroj}.`;
  }
};
console.log(nearestHundred(12, 12));
console.log(nearestHundred(-1, 400));
console.log(nearestHundred(105, 100));
// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
function firstTask(num1, num2) {
  if (
    ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) &&
    ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100))
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(firstTask(33, 89)); // false
console.log(firstTask(44, 55)); // true
console.log(firstTask(78, 75)); // true
console.log(firstTask(90, 100)); // true

// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
function dvaBroja(num1, num2) {
  if ((num1 >= 40 && num1 <= 60) || (num2 >= 40 && num2 <= 60)) {
    return `Brojevi se nalaze u opsegu 40-60!`;
  } else if (num1 === num2) {
    return `Brojev su jednaki!`;
  } else if (num1 !== isNaN || num2 !== isNaN) {
    return `Moraju biti uneti brojevi!`;
  }
}
console.log(dvaBroja(47, 56)); // brojevi se nalaze u osegu 40-60
console.log(dvaBroja(60, 43)); // brojevi se nalaze u osegu 40-60
console.log(dvaBroja("hduihd", 66)); // Moraju biti uneti brojevi
