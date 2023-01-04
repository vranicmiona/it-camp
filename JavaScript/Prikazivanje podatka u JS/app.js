// JavaScript moze prikazati podatke na nekoliko nacina:

// 1. innerHTML - document object modeli
document.getElementById("p").innerHTML = "Pargraf broj jedan.";

// 2. Write()
document.write(); // najjcesce nacin za testiranje nekoga koda

// 3. Alert()
alert("Zdravoo"); // Upozoravanje korisnika koja se ne moze zanemriti, i mora da bude procitana

// 4. Console.log() - ispisivanje u consoli
console.log("Poruka za ispis u konzoli.");

// Pravila nazivanjas promenljivih:

// Promenljiva u Java Scriptu mora da pocne sa nekim od sledecih znakova

// 1. Slovo (veliko ili malo) - A-Z, a-z
// 2. $ znak moze biti pocetni karakter neke promenljive, ili _

// Broj moze biti sadrzan u nazivu variable, ali NE SME da variabla pocinje brojem

// prom1 = "neki string";  - jeste korekto
// 2prom = "neki string" - nije korektno

prosekOcena = 4.14; // preporucljv nacin zapisivanja promenljive
prosek_ocena = 4.14; // korektno
ProsekOcena = 4.24; // korektno

// Postoje 4 nacina za deklarisanje neke promenljive:
// 1. prom = 12 - dodeljivanje vrednosti bez da smo predhodno izvrsili deklaraciju
// 2. Koriscenjem var keyword (rezervisane reci) - var je koriscena na starijim
// browserima (sve se manje koristi)
// var a = 5;

// 3. Koriscenjem let keyword (rezervisane reci) - let se najcesce koristi kada postoji sansa
// da se vrednost date promenljive menja

// 4. Koriscenjem const keyword (rezervisana rec) - const se koristi za definisanje konstanti koje nece menjati vrednost.

// Promenljive (variable) su kontejneri za skladistenje lokacija, ako je primitivni tip ona moze skladisti samo jedan element, ako je neprimitivni tip ona moze sladistiti vise elemenata.
