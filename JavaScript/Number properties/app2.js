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
  counter1 = 0;
  counter2 = 0;
  for (i = 0; i <= int1; i++) {
    return counter1++;
  }
  for (c = 0; c <= int2; c++) {
    return counter2++;
  }
  if (counter1 < counter2) {
    return `Prvi broj je blizi broju 100.`;
  } else if (counter2 < counter1) {
    return `Drugi broj je blizi broju 100.`;
  }
};
console.log(value(101, 200));
console.log(value(-14, 55));

// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
function dvaBroja(prvi, drugi) {
  if (40 <= prvi <= 60 && 40 <= drugi <= 60) {
    return `Brojevi se nalaze u opsegu 40 i 60. `;
  } else if (70 <= prvi <= 100 && 70 <= drugi <= 100) {
    return `Brojevi se nalaze u ospegu 70 i 100.`;
  } else {
    return `Brojevi ne pripadaju ni jednom opsegu.`;
  }
}
console.log(dvaBroja(55, 58));
console.log(dvaBroja(71, 100));
console.log(dvaBroja(50, 98));

// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
function veciBroj(broj1, broj2) {
  if (broj1 === broj2) {
    return `Vrednosti su jednake`;
  }
  if (broj1 >= 40 && broj1 <= 60) {
    return broj1;
  } else if (broj2 >= 70 && broj2 <= 100) {
    return broj2;
  }
  if (broj1 > broj2) {
    return broj1;
  } else if (broj2 > broj1) {
    return broj2;
  }
}
console.log(veciBroj(40, 41));
console.log(veciBroj(40, 40));
console.log(veciBroj(40, 55));
