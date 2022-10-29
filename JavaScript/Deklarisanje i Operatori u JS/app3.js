// Ispisati neparne brojeve od 1 do 20 
for (let c = 1; c <= 20; c += 2) {
    console.log(c);
}
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5
for (let b = 50; b <= 100; b++) {
    if (b % 5 === 0){ // odtatak pri deljenju tog broja sa 5 treba da bude 0
    console.log(b);}
}
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14
for (let a = 6; a <= 14; a++) {
  console.log(a**2); // ne treba uslov  
}
// Ipisati sumu neparnih prirodnih brojeva od 10 do 20
let sum = 0;
for (let i = 10; i < 21; i++){
if (i % 2 !== 0){
sum += i;
}
}console.log(sum); // uradila sam i sama pre na slican nacin
