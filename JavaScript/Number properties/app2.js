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

const value = (int1, int2) => {
  let i;
  counter1 = 0;
  counter2 = 0;
  if (int1 >= 100) {
    for (i = int1; i >= 100; i--) {
      return counter1++;
    }
  } else
    for (i = int1; i <= 100; i++) {
      return counter1++;
    }
  if (int2 >= 100) {
    for (i = int2; i >= 100; i--) {
      return counter2++;
    }
  } else
    for (i = int2; i <= 100; i++) {
      return counter2++;
    }
  if (counter1 > counter2) {
    return `Drugi je blizi broju 100!`;
  } else if (counter2 > counter1) {
    return `Prvi broj je blizi sto!`;
  } else {
    return `Brojevi su jednaki!`;
  }
};
console.log(value(12, 100));
console.log(value(102, 55));
console.log(value(12, 12));
console.log(value(-34, -56));

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
