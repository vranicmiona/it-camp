// 1. Napisite funkciju koja ima jedan string parametar i koja vraća string koji se dobija sledećom promenom parametra:
        // - svi samoglasnici (a, e, i, o ,u) se pretvaraju u velika slova.
        // - svi suglasnici moraju biti mala slova
        // - svi ostali znaci u stringu ostaju nepromenjeni
const recenica = "Danas je ponedeljak, a sutra utorak.";
let novaRecenica = ""
for (a = 0; a <= recenica.length; a++) {
    if(
        recenica[a] !== "a" ||
        recenica[a] !== "e" ||
        recenica[a] !== "i" ||
        recenica[a] !== "o" ||
        recenica[a] !== "u" 
    ){novaRecenica += recenica.toUpperCase();}
    else if (a === recenica.length + 1) {
novaRecenica += ".";
}
 else {
novaRecenica += recenica[a];
}}

console.log(novaRecenica);

// 2.  Napraviti novu recenicu gde ce umesto slova "a" pisati "t". Dok ako se posle slova "a"
//  nalazi slovo "n" pisace "d" umesto a.
const first = "Banana je omiljeno voce Talibovo. Banana nam stize iz Paname. I banane su jako zdrave.";
let duzina = first.length;
let second = ""
for (i = 0; i <= duzina; i++) {
    if (first[i] === a && first[i + 1] === n) {
        second += "t";
    } else {
        second += first[i];
    }
}




// 1. Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo). Npr. za string "Mama ima momu" , dobija se rezultat 5.

const prvo = "Mama ima momu.";
let drugo = recenica.length;
let brojac = 0;
for (i = 1; 1 <= duzina; i++) {
    if (prvo[i] === "M" || prvo[i] === "m") {
        brojac++;
    } 
    
} console.log("U nasem datom stringu ima " + brojac + "velikih i malih slova m.");

const r = prompt("Unesite neki string: ")
let o = 0;
while(q < r.length) {
    if (r[q] === "m" || r[q] === "M") {
        o++;
    }else {
        continue;
    }q++;

} console.log(o);

// 2. Prebrojati koliko ima znakova koji su cifre u unetom stringu.

const brojevi = "Danas je utorak 11/08/2022, to bi znacilo da idemo u skolu vec 39 dana.";
let velicina = brojevi.length;
let count = 0;
for (a = 1; a < velicina; a++) {
    if (brojevi[a] >= "0" && brojevi[a] <= "9") {
    count++;
    }
} console.log("U stringu ima " + count + "razlicitih brojeva.");

const t = prompt("Unesite: ");
for (let t1 = 0; t1 < t.length; t1++) {
    if(!isNaN(t[i])){
o++;
    }
}console.log(o);


// 3. Prebrojati koliko ima malih slova u unetom stringu . 

const treciZadatak = "Danas je sreda i bas je lep i suncan dan. Ja sam Miona Vranic!";
let n = 0;
for (c = 1; c < treciZadatak,length; c++) {
    if(treciZadatak[c] >= "a" && treciZadatak[a] <= "z") {
        n++;
    } else{console.log(n);}
}

// 4. Ispitati da li u unetom stringu ima vise malih ili velikih slova. 
const cetvrtiZadatak = "Od casova danas na PMF sam imala, Fizicku hemiju i  Organsku hemiju.";
let mala = 0;
let velika = 0;
for (w = 1; w < cetvrtiZadatak.length; w++) {
    if(cetvrtiZadatak[w] >= "a" && cetvrtiZadatak[w] <= "z") {
        mala++;
    } else if(cetvrtiZadatak[w] >= "A" && cetvrtiZadatak[w] <= "Z"){
        velika++;
    } else if(mala > velika) {
        console.log("Vise ima malih slova");
    } else if(velika < mala) {
        console.log("Vise ima velikih slova");
    } else if(mala === velika) {
        console.log("PODJEDNAKO IH IMA");
    } 
} console.log("U datom stringu ima slova " + velika + " velikih slova" + " , i ima" + mala + " malih slova.");

// 5. Proveriti da li je uneti string palindrom (potpuno isti kada se cita od pozadi).
// Npr. "anavolimilovana" je palindrom.
const petiZadatak = "zasutrasupredvidjenevezbe";
let petiZadatak2 = ""
for (u = 0; u < petiZadatak; u++) {
      petiZadtak2 += petiZadatak[u]
    if (petiZadatak === petiZadatak2) {
    console.log("PALINDROM!");
    continue;
    }
} console.log("Data recenica NIJE PALINDROM");
