//  1. Zadatak

const prviBroj = +prompt("Unesite prvi broj: ");
const drugiBroj = +prompt("Unesite drugi broj: ");

if (isNaN(prviBroj) || isNaN(drugiBroj)){
    console.log("Unete vrednosti moraju biti brojevi. ");
}
else if (prviBroj === drugiBroj) {
console.log("Povrsina kvadrata na osnovu unetih stranica iznosi: "+ prviBroj * drugiBroj);
}else if(prviBroj !== drugiBroj){
    console.log("Povrsina za pravougaonik: ");
}

// else ne mora da postoji u zadatku i ovde smo ga zaobisli
// Za prvoveru da lije vrednost nekoga broja NaN se koristi metoda:
// isNaN(vrednost)

// 2. Zadatak

const x = +prompt("Uneti prvi broj: ");
const y = +prompt("Uneti drugi broj: ");

if (isNaN(x) || isNaN(y)){
    console.log("Vrednosti moraju biti projevi: ");
} else if(y = 0) {
    console.log("Deljenje 0 nije moguce: ");
} else {
    console.log("Kolicnik unetih brojeva je: " + x / y);
}





