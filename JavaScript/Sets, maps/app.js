// JavaScript Set je kolekcija unikatnih vrednosti.

const mySet = new Set([14, "it camp", true, [1, 2, 3]]);
console.log(mySet);

// Metode Setova:
// 1. Za kreiranje Setova koristimo new Set([1, 2, 3])

// 2. Za dodavanje lemntata koristimo add() metodu:
console.log(mySet.add(false));

// 3. Za brisanje elemenata koristimo delete metodu:
console.log(mySet.delete(true));

// 4. Za proveru da li set sadrzi odredjenu vrednost koristimo has() metodu:
console.log(mySet.has(false));

// 5. forEach() metoda se koristi za iteraciju kroz ceo set:
mySet.forEach((el) => console.log(el)); // ispisuje sve el jedan ispod drugog

// 6. values() metoda vraca iterator sa vrednostima seta
console.log(mySet.values());

// 7. Za proveru duzine sta je size property:
console.log(mySet.size); // 4

// Napravviti novi niz koji vraca novi niz bez duplikata

// 1. Nacin:
const newArr = (arr) => {
  const newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(newArr([1, 1, 2, 2, 3, 4, 4, 8, 8, 9, 1]));

// 2. Nacin:
function newArr2(arr) {
  const newSet = new Set(arr);
  const newArr = [...newSet];
  return newArr;
}
console.log(newArr([1, 1, 2, 2, 3, 4, 4, 8, 8, 9, 1]));

// Mape u JavaScriptu imaju key-value parove gde keys (kljucevi) mogu biti bilo kog tipa podatka
// Mape pamte originalan redosled elemenata.

const myMap = new Map([
  ["apple", 60],
  ["orange", 70],
  [true, 19],
  [false, -19],
]);
console.log(myMap); // apple => 60...

// Galvne metode kod Map_a:

// 1. Za kreiranje Map metode se koristi new Map

// 2. Za setovanje se koriti metoda set

console.log(myMap.set("strawberry", 240));

// Izmena vrednosti za postijeci key:
console.log(myMap.set(false, 0));

// 3. get() metoda se koristi za dobijanje vrednosti odredjenog kljuca:
console.log(myMap.get("apple")); // 60

// 4. delete() metoda sluzi za brisanje key-value para:-
myMap.delete("orange");
console.log(myMap);

// 5. has() metoda proverava da li je na osnovu kljuca da li je key-value par prisutan u mapi.
console.log(myMap.has(true)); // true
console.log(myMap.has("pineappel")); // false

// 6. forEach() metoda sluzi za iteraciju kroz mapu
myMap.forEach((el) => console.log(el)); // 60, 40, 0, 19, 240

// 7. entries() metoda vraca key-value parove u iteratoru:
console.log(myMap.entries());

// 8. Za proveru duzine se koristi size property
console.log(myMap.size); // 4

// Zadatak:
// We have a MAP with a log of the events that happened during the game.
// The VALUES are the events themselves, and the KEYS are the minutes in which each event happend a foodball game have the 90 minutes plus some extra time.

// 1. Create an array "events" of the different game events that happened (no duplicates)
// 2. After the game has finished, it was found that the yellow card from 64 mintes was unfair. So remove this event from the game events log
// 3. Print the following  to the console: "an event happened, on average, every 9 minutes"
// 4. Loop over the events and log them to the console, marking whether it's in the first half or the second half (after 45 minutes) of the game like this:
// [FIRST HALLF]: 17 ⚽ GOAL

const gameEvents = new Map([
  [17, "Goal"],
  [17, "offside"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow card"],
]);

function events(map) {
  const events = [...new Set(map.values())];
  return events;
}
console.log(events(gameEvents));
