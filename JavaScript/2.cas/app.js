document.getElementById("paragraf").innerHTML = 
"Ovo je paragraf unet naknadno."

paragraf = document.getElementById("paragraf")
paragraf.style.color ="red";

paragraf = document.getElementById("paragraf")
paragraf.style.backgroundColor = "green";


paragraf = document.getElementById("paragraf")
paragraf.style.padding = "10%";

console.log("Ovo je nas prvi ispis u consoli.");

// TIPOVI PODATAKA U JAVA SCRIPTU

// Za proveru tipa neke promenljive (variable) koristi se typeof operator.

// PRIMITIVNI TIPOVO OPERATORA: //

// 1. String - niz karaktera koji je zapisan unutar navodnika (obicnih ili duplih)

console.log("Ovo je neki string unutar duplih navodnika");
console.log(typeof "Ovo je neki string unutar duplh navodnika");

// 2. Number - predstavlja broj koji moze biti zapisan sa ili bez decimalnog zapisa
// Ne pravi se razlika izmedju celih, realnih ili komplaeksnih brojeva.

console.log(15);
console.log(typeof 15);
console.log( -56.5);
console.log(typeof -56.5);

// 3. BigInt - se koristi za skladistenje brojeva cija granica prelazi granicu.
// Number tipa podatka

console.log(BigInt(78395692086764687598530902010011234567890));
console.log(typeof BigInt(78395692086764687598530902010011234567890));

// 4. Boolean - logicki intetitet koji moze da ima dve vrednosti:
// true,
// false,
// Najcesce se koristi u kondicionalnim (if naredbe) i ima velikuprimenu.

daLiPadaKisa = false;
console.log(true);
console.log(typeof true);
console.log(daLiPadaKisa);

// 5. Undefined - je tp podatka koji se javlja kada imamo neku promenljivu, ali joj nismo dodelili vrednost.
// U tom slucaju i vrednost i tip promenljive je undefind.

// 6. Null - je tip podatka za nepostojanu promenljivu ili za promenljivu kojoj smo dodelili nekorektnu vrednost.

let skola = null;
console.log(skola);
console.log(typeof skola); // rezultat je Object

skola = null;
console.log(typeof skola); // tip verdnosti promenljive je Object

// 7. Symbol - Novi tip podatka u JvaScriptu koji se koristi za dodeljivanje 
// jedinstevne ili anonimne vrednoesti

x = Symbol("Danas je lepo vreme.");
console.log(x);
y = Symbol("Danas je lepo vreme.");
console.log(y);

console.log(x === y); // dve promenljive bez obzira da li imaju isti sadrzaj one nemaju istu vrednost

// Primitivni tipovi podataka se koriste kada imamo promenljivu odnosno (varijablu) sa samo jednom vrednoscu.


// NEPRIMITIVNI TPOVI PODATAKA //

// Za promenljive (varijable) koje mogu skladistiti vise vrednosti, ili neke kompleksne vrednosti se koriste 
// neprimitivni tipovi podataka.

// Kada ispitujemo tip podatka za neku neprimitivnu promenljivu u javascriptu dobijamo Object za tip

// 1. Nizovi (Arrays) - nepromitivnit tip podatka koji nam slizi sa skladistenje vise 
// vrednosti.
// U JavaScriptu niz moze sadrzati elemente razlicitog tipa.

niz1 = ["Mitar", "Dzenan", "Haris","Hamed", "Nikola"];
console.log(niz1);  // brojevi koji su ispisani u consoli su indexi,i njihovo indexiranje ide od 0

niz2 = ["Hamed", 15, false ];
console.log(niz2);

// Jos jedan nacin definisanja niza:

niz3 = new Array(["Mitar", "Dzenan", "Haris","Hamed", "Nikola"]);
console.log(niz3);

// 2. Objekti (Object) - su GLAVNI NEPRMITIVNI TIP PODDATKA U JAVA SCRIPTU.
// Objekti se zapisuju po principu nmae:value pair (ime:vrednost par)

obj1 = {
    ime:"Miona",
    prezime:"Vranic",
    godine:20,
    fakultet:"PMF",
    punoletnost:true
}
// Niz se moze sastojati od vise elemenata, kod niaz mozemo da pristpimo elementu preko indexa
console.log(obj1.godine);

// 3. Setovi (Sets) - oni su slicni nizovima sa razlikom da set ne moze da sadrzi duplikate

set1 = new Set(["Alen", "Hasan", "Amer", "Alen"]); // Nisu dozvoljeni duplikati oni se ignorisu
console.log(set1);

// Mape (Maps) - slicne su objectima sa nesto drugacijim nacinom definisanja

map1 = new Map([["jabuke", 50], 
["kruske", 60], 
["kiwi", 90]]);
console.log(map1);

obj2 = new Object(
    {
        ime:"Mitar",
        prezime: "Vranic",
        godine: "19",
    }
)
console.log(obj2);
