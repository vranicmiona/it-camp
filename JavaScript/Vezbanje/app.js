// Napisati novu recenicu koja ce imati isti text, ali bez razmaak

// let recenica = "da li je test spremeljen?";
// let novaRecenica = ""
// for (i = 0; i < recenica.length; i++) {
    // if (recenica[i] !== " ") {
        // novaRecenica += recenica;
    // }
// } console.log(novaRecenica);

//  Koliko data recenica ima razmaka 
let recenica = "da li je omar spremio test";
counter = 0;
for (i = 1; i < recenica.length; i++) {
    if (recenica[i] == " "){
        counter++;
    }
}console.log(counter);

// Napraviti novu recenicu gde ce umesto slova "a" pisati "t". Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".

let  recenica2 = prompt("Unesite recenicu: ");
let recenica3 = ""
for (let i = 0; i < recenica2.length; i++){
    if (recenica2[i] === "a" && recenica2[i+1] === "n"){
        recenica3 += "d";
    }else if (reecnica[i] === "a"){
        recenica2 += "t";
    } else {
        recenica3 += recenica2[i];
    }
}console.log(recenica3);

