// 2.	(20) Napisati program koji ispisuje u konzoli brojeve od 1 do 100(ukljucujuci) tako da:
 
// (i)	ako je broj deljiv sa 3, potrebno je ispisati ‘FIZZ’ umesto tog broja;
// (ii)	ako je broj deljiv sa 5, potrebno je ispisati ‘BUZZ’ umesto tog broja;
// (iii)	ako je broj deljiv i sa 3 i sa 5, potrebno je ispisati ‘FIZZ BUZZ’ umesto tog broja.

for(a = 1; a <= 100; a++) {
    if(a % 3 === 0 && a % 5 === 0){
        console.log("FIZZ BUZZ");
    } else if(a % 3 === 0) {
        console.log("FIZZ");
    } else if(a % 5 === 0) {
        console.log("BUZZ");
    } else{
        console.log("Niste uneli broj koji se nalazi u relaciji od 1 do 100.");
    }
}