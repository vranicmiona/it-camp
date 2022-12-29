// Metode za prikazivanje datuma:

const trenutnoVreme = new Date();
console.log(trenutnoVreme);

// 1. toString() method
console.log(trenutnoVreme.toString()); // donijamo vremensku zonu, mesec, dan previse inf

// 2. toUTCString()
console.log(trenutnoVreme.toUTCString()); // kraca varjanta

// 3. toDateString()
console.log(trenutnoVreme.toDateString()); // bez vremena

// 4. toISOString()
console.log(trenutnoVreme.toISOString());

// 5. toTimeString()
console.log(trenutnoVreme.toTimeString());

// 6. toLocalTimeString()
console.log(trenutnoVreme.toLocaleTimeString()); // 8:07:31 PM

// Grupe metoda za dobijanje neke vrednosti od samog datuma, i menjajne neke vrenosti nekog datuma

// Get method:

// Koristimo ih za dobijanje informacija iz Date objekata.

// getFullYear()
console.log(trenutnoVreme.getFullYear());

// getMonth()
console.log(trenutnoVreme.getMonth());

// getDay()
console.log(trenutnoVreme.getDay());
let nedelja = new Date("2022 Dec 25");
console.log(nedelja);
console.log(nedelja.getDay()); // 0
// getDate()
console.log(trenutnoVreme.getDate());

// getHours()
// getMinutes()
// getTime() vraca broj milisekundi.
// getSeconds()
// getMiliseconds()

// Set Method:
// Dozvoljavaju menjanje nekih vrednosti koda Date objekta.

// setFullYear()
trenutnoVreme.setFullYear(2015);
console.log(trenutnoVreme);

// setMonth()

// setHours()
trenutnoVreme.setHours(10);
console.log(trenutnoVreme.toTimeString());

// setMinutes()
// setSeconds()
// setMiliseconds()
// setTime()

// setDate()
trenutnoVreme.setDate(19);
console.log(trenutnoVreme);
