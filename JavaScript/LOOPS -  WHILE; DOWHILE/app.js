// While loop nam omogucava iteraciju kroz neki objekat 
// nekoliko puta uz potencijalno odredjene uslove.
// Kod while loop je neophodno na kraju koda definisati povecanje
// iteratora,(kako ne bismo dobili beskonacnu petlju).

// Sintaksa
// while (uslov) {
// Blok koda za izvrsavanja 
// Definisati povecanje iteratora
// }
let i = 1;
while (i < 11) {
    if (i % 2 === 0)
   { console.log(i);}
i++; // Ako se ne definise kraj povecanje iteratora petlja ide u beskonacnost
}

let b = +prompt("Unesite broj:"); // ovde moze i const jer se nece manjati
let broj = 1; // ITERATOR
while (broj <= b) {
    console.log(broj**2); // iterator nam se povecava za kvadrat vrednosti
    broj++;
} // kao uslov se stavlja nesto sto je boolien, bice boolien i bice uporedjivanje vrednosrti za if naredbe i tu se mora naci boolien

let g = +prompt("Unesite prvi broj ");
let u = +prompt("Unesite drugi broj ");


if(g < u) {
while(g <= u){ // uslov mora biti boolien
    console.log(g);
    g++;
}}else if(g > u) {
    while(u <= g){
    console.log(u);
    u++;

} }else if(g === u){
    console.log("Brojeve ne smeju biti isti");
}

// Do While loop predstavlja poseban slucaj whil petlje,
// gde se prvo izvrsava kod, pa tek onda proverava uslov.

// Sintaksa:
// do {
// blok koda za izvrsavanje
// }while (uslov);

// Ispisati sve brojeve od 1 do 5.
let broj3 = 1;
do {
    console.log(broj3);
    broj3++;}
    while (broj<6);

    // Nedostatak do while petlje kroz primer:
    // Ispisati sve brojeve manje od 20 krenuvsi od broja koje unosi korisnik:

    let broj4 = Number(prompt("Unesite neki broj: "));
    do {
        console.log(broj4);
        broj4++;
    } while (broj4 < 20);

    // Domaci zadatak:
    // Preko switch naredbe:
    console.log(new Date().getDay);
    // getDay() - daje vrednost 0 - 6
    // switch (expresion ili izraz)(new Date().getDay())...
    // Na osnovu vrednsti koju nam daje izraz switch naredbe,
    // kroz case_ove i eventualno default ispisati poruku
    // "Danas je 'radni dan'"
    // "Ugodno provedite vikend"