// function divide(a, b) {
//   try {
//     if (a === b) {
//       throw new Error("Deljenje nulom nije moguce.");
//     }
//     return a / b;
//   } catch (error) {
//     console.log(error(message));
//   } finally {
//     console.log("Ovo nije bila funkicija koja deli dva broja.");
//   }
// }

// console.log(divide(10, 5));
// console.log(divide(10, 0));

console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 1000);
setTimeout(() => {
  console.log(4), 900;
});
console.log(5);
setTimeout(() => {
  console.log(6), 1550;
});
// 1
// 2
// 5
// 4
// 6
// 3
