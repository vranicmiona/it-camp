// OPERATORI U JAVA SCRIPT-U //
// Podelicemo operatore u sest grupa:
// 1. Aritmeticki operatori(Aritmetic operators);
// 2. Opertatori dodele vrednosti (Assigment operators);
// 3. String operatori (String operators);
// 4. Operatori poredjenja (Comperison operators);
// 5. Logicki operatori (Logical operators);
// 6. Tip operatora (Type operators);

// 1. Aritmeticki operatori(Aritmetic operators);
// 1.1  +   operator 
console.log(4 + 5);
// 1.2 - odeuzimanje
console.log(4 - 5);
// 1.3 * mnozenje
console.log(4 * 5);
// 1.4 / deljenje
console.log(4 / 5);
// 1.5 ** operator stepenovanja
console.log(2 ** 3);
// 1.6 % Modulo (ostatak pri deljenju)
console.log(11 % 3); // 2
console.log(12 % 3); // 0

// Uslov za parnost:
// i % 2 = 0
// Uslov za neparnost:
// i % 2 = 1

// 1.7 ++ operator Increment (Povecava vrednost za 1);
// postfiksni operator
let x = 5;
x++; // x = x + 1
console.log(x);
// console.log(5 ++); // 5 = 5+1 sto nema veze sa vezom

let y = 11;
// prefiksni operator
console.log(++y);

// 1.8  -- operator Decrement (Smanjuje vrednost za 1);
let z = 99;
z--; // z = z-1
// postfiksni perator
console.log(z);
// prefiksni operator
let w = 65;
console.log(--w);

// 2. Operatori dodele vreednosti (Assigment operators)
// 2.1 = - dodeljivanje vrednosti neke promenljive
// 2.2 += - w += 5 -- znaci: w = w + 5 ; dodavanje ordedjene vrednosi na postojecu promenljivu
w += 5
console.log(w);
// 2.3 -= - oduzimanje odredjene vrednosi na postojecu promenljivu
z -= 3;
console.log(z);
// 2.4 *= - mnozenje odredjene vrednosi na postojecu promenljivu
z *= 2;
console.log(z);
// 2.5 /= - deljenje odredjen vrednosi na postojecu promenljivu
z /= 5;
console.log(z);
// 2.6 %= - modul odredjenje vrednosi na postojecu promenljivu
// x=6
x %= 2; // x = 6 % 2
console.log(x);
// 2.7 **= - stepenovanje odredjene vrednosti na postojecu promenljivu
y **= 2;
console.log(y); 

// 3. String operators
// Jedan od nacina spajanja stringova koriscenjem + operatora.
let prviDeo = "Danas je Omar";
let drugiDeo = "doneo pizzu."
console.log(Boolean(prviDeo + " " + drugiDeo));


// Neki slucajevi kod sabiranja //
console.log("Omar" + 3);
console.log(3 + "Omar"); // rezultat spajanja stringa i broja JE UVEK STRING!!!
console.log(typeof (3 + "Omar"));
console.log(3 + "2"); // Bez obzira sto dva moze biti pretvorena u korektan broj, nece se izvrsiti sabiranje
// Java Script ce pokusati da preve String u broj i da izvrsi racunsku operaciju
console.log(4 -"2"); // 2
console.log(4 * "2"); // 8
console.log("3" / 1); // 3
console.log(2 ** "3"); // 8
// Ako Java Script ne uspe da prevede string u broj, rezultat ce biti NaN
console.log(21 / "7dana"); // na consoli se ipisuje (Not a Number) tj. vrednost za nekorektan broj

// 4. Compereson operators
// 4.1 ==  - Provera jednakosti vrednosti

let a = 5
let b = 7
let c = a
console.log(a == c);
console.log(a == b);
 
c += 2;
console.log(c); // ima novu vreednost
console.log(a); // ostaje stara vrednost

// 4.2 ===  - Provera jednakost tipa i jednakost vrednosti

let d = "5" // java ga preuzima i pokusava da ga pretvori u broj i uspeva
console.log(a == d);
console.log(a === d); // proveri i tip koji nam nije isti vec je string i number

// 4.3 !=   - Proverava razlicitost vrednosti

console.log(b != c);

// 4.4 !==  - Ispituje da li je razlicita vrednost ILI razlicit tip
console.log(a !== d);

//  4.5  >   - Da li ej prva vrednost veca od druge:
console.log(b > c);


// 4.6   <  - Da li je prva vrednost manja od druge:
console.log(14 < -19);

// 4.7   >=   - Da li je prav vreednost veca ili jednaka drugoj
console.log(9>=9);

// 4.8  <=   - Da li je prva vrednost manja ili jednka drugoj:

console.log(9 <= 13);


// 4.9 ?   - Ternarni operator

// uslov ? (radnja koja se izvrsava ako je uslov zadovoljen)
//  :
//         (radnja koja se izvrsava ako uslov nije zadovoljen)

let isSunny = false;

isSunny ? console.log("Vreme je suncano." + "Ponesite naocare!") 
: console.log("Vreme je kisovito." + "Ponesite kisobran!");


// 5. Logical operators

// 
// 5.1   && - and (i) - zahteva zadovoljavanje svih uslova

let prom1 = 4
let prom2 = 9
let prom3 = -3

prom1 > 0 && prom2 > 0 && prom3 > 0
? console.log("Sve tri promenljive su pozitivni broj.")
: console.log("Nisu sve tri promenljive pozitivni brojevi");

// 5.2   || (or) - Zahteva zadovoljavanje bar jednog od ponudjenih uslova

prom1 > 0 || prom2 > 0 || prom3 > 0
? console.log("Nasli smo bar jednu promenljivu koja je veca od nule") :
console.log("Nismo nasli promenljivu koja je veca od nule");

// 5.3   !  - (Not) okrece vrednost  => iz true u false i obratno 

console.log(!Boolean("prviDeo" + " " + "drugiDeo"));
 
// instant 








