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
