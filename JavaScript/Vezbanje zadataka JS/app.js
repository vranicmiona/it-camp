// Prebjoati i sabrati deljive brojeve sa 5 u intervalu od 1 do n

// Iteracija od br 99 do -99
// Ispisati zbir broja deljivog sa 4 i broja 14
let number = 3
let counter = 0
let sum = 0
while (number < 18){
if (number % 3 === 0){
    counter++
    sum += number
}
number++
}
console.log("Aritmenticka sredina deljivih brojeva sa 3, iz intervala [3, 17] je: " + sum / counter);




