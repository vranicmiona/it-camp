// 1. var
var x; // predstavlja deklarisanje promenljive x, obezbedjivanje lokacijske memorije za promenljivu x
x = 15; // vrednost koju smo stavili na tu lokacijsku memoriju (inicijalizacija promenljive x, dodela vrednosti vec deklarsanoj promenljivoj x)
// var x = 15 - takodje dozvoljeno
console.log(x); // promenljiva nijen unutar navodnika(
// karakteristicno za var je da moze da se izvrsi redeklarisana za taj keyword, i to bilo gde u prostoru.
var x;
// Reinicijalizacija promenljive x putem var keyword je dozvoljeno bilo gde  prostoru.
x = 22;

// 2. let - definisanje promenljive za koju postoji mogucnost promene vrednosti 
let y;
y = 14;
console.log(y);
// let y = 14; - takodje dozvoljeno i sve vazi ako za var definice samo menjamo "y".

// Redeklarisanje definisane putem let keyword nije dozvoljeno ako se radi o istom prostoru.


y = 12; // Reinicijalizacija promenljive definisane putem let keyworda je dozvoljeno u bilo kojem prostoru.
 console.log(y); // dek -davanje promenljive  inc - davanje vrdnosti

//  Promenljive koje su definisane putem let ili const keyword  nam obezbedjuju Block Scope.
{
    // code koji se naalzi u Block Scope-u.
    // console.log(y); // logika je da hoce da bude prepoznata promenljive, jer smo napravili podprostor Global Scope-a.
    // Redeklaracija promenljive definisane putem let u drugom prostoru dozvoljena.
    let y = 16;
    console.log(y);

    // let a, b, c; - korektan ancin definisanja promenljivih

}

console.log(y); // vracnje nazad daje istu vrednost kao iz Global Scope-a.

// 3. Const - ne da nam da je menjamo do samoga kraja.
// Promenljive definisane putem const moraju biti odjednom deklarisane i inicijalizovane.
// const z;
// z = 26;
const z = 26;
console.log(z);
// NIJE DOZVOLJENA NI REDEKLARACIJA, NI REINICIJALIZACIJA.

// const.log(z); - ne moze da se deklarise vise puta, tj redeklarisane promenljive deklarisaen putem const nije dozvoljeno kada se radi o istom prostoru.

// z = 23;
// console.log(z); - reinicaizacija definisane promenljive putem const nije dozvoljena, kada se radi o istom prostru.

// INICIJALIZACIJA ZNACI DODELA VREDNOSTI, A DEKLARACIJA ZNACI DODELA (VARIABLE) MEMORIJSKE LOKACIJE ZA TU VREDNOST








