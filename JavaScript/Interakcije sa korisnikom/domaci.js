// Prvi zadatak:

let a = +prompt("Unesite prvi broj: ");
let b = +prompt("Unesite drugi broj: ");

if(a == b){
let kvadrat = a**2;
console.log(kvadrat);
}else if(a != b){
let pravougaonik = 2*(a + b);
console.log(pravougaonik); 
}else{
    console.log("Niste uneli broj: ");
}

// Drugi zadatak:

let x = +prompt("Unesite prvi broj: ");
let y = +prompt("Unesite drugi broj: ");
if(y !== 0){
    let kolocnik = x/y;
    console.log(kolocnik); 
}else{
    console.log("Deljenje nije moguce: ");
}
