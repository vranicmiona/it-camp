// 1. Zadatak:
const kvadtarBroja = function (a) {
if (NaN(a)){
    return "Brojevi moraju biti korektni!"
} else {
    return "Kavdrat broja iznosi " + a**2
}} 
console.log = (kvadtarBroja(+prompt("Unesite broj.")));

// 2. Arrow function:
// const myFunction = () => {
    // function code}
    const proizvodDvaBroja = (br1, br2) => {
        return br1 * br2;
    };
    console,log(proizvodDvaBroja(2, 16));
    // Ako Arrow funkcija ima samo jedan parametar nije neophodno okruziti ga zagradama 
    // Ako je funkcija jednostavna, tj. ako odmah vraca neki jednostavan izraz onda sama sintaksa izgleda kraca
    // zapravo nije neophodno koristiti {} ili return keyword
    const kvadratBroja = broj => broj ** 2;

    const funkcija = () => { // nemamo parametar () jer korisnik unosi +prompt...
        let broj = +prompt("Uneti broj:");
      if(isNaN(broj)){ return "Moraju biti uneti brojevi: "
    } else if(broj > 0) {
        return "UNET JE POZITIVAN BROJ"
    } else if (broj < 0){
       return "UNET JE NEGATIVAN BROJ"
    } else {
        return "UNETA JE NULA"
    }
    }; console.log(funkcija()); // neka se izvrsi ta i ta funkcija

    const fun = () => {
        let satnica = +prompt("Uneti satnicu: ");
        let minuti = +prompt("Uneti minute: ");
        if(satnica >= 9 && satnica < 17) {
            return "da";
        } else if(minuti >= 0 && minuti < 59){
        return "da";
        } else{
            "Niste uneli odgovarajuce brojeve"
        }
    }; console.log(fun());

    const mail = function(satnica, minuti) {
        if(satnica >= 9 && satnica < 17 && minuti >= 0 && minuti < 60){
            return "Mail je stigao u toku radnog vremena."
        } else{
            return "Mail nije stigao u toku radnog vremena."
        }
    }; console.log(mail(4, 39));
       console.log(mail(14, 39));
       console.log(mail(9, 90));
 
// 3.Zadatak sa testa 
function novarecenica(recenica){
    let recenica2 = ""
    for (let s = 0; s <= recenica.length; s++){
        if(s === recenica.length){
            recenica2 += ".";
        }else if (recenica[s] === "a" ||
    recenica[s] === "i" ||
    recenica[s] === "o" ||
    recenica[s] === "u" ||
    recenica[s] === "e"){
        recenica2 += recenica.toUpperCase();
    }else{
        recenica2 += recenica;
    }
    }
    return recenica2;
}; console.log(novaRecenica("Pocelo je svetsko prvenstvo u fudbalu!"));
