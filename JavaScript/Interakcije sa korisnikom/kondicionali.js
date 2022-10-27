// KONDICIONALI //

// if (uslov1) {
    // kod za izvrsavanje u slucau za ispunjenja uslova
// } else if (uslov2){
// kod za izvrsavanje u sluacju ispunjenja drugog uslova
// }
// else {
    // kod za izvrsavanje u slucaju ne ispunjea uslova
// } 



// Ako je broj godina unet od strane korisnika >= 18 neka se ispise poruka punoletni ste u suprotnom maloletni ste
const godine = Number(prompt("Unesite broj svojih godina: "));

if (godine >= 18){
    console.log("Punoletni ste");
    } else if(godine < 18 && godine > 0){
        console.log("Maloletni ste.");
    } else if (godine < 0){
        console.log("Broj godina ne moze biti negativan.");
    }else {
        console.log("Punoletni ste.");
    }

const brGod = Number(prompt("Unesite broj godina: "));

if (brGod < 12){
    console.log("Vi ste decijeg doba." );
}else if(brGod >= 12 && brGod < 18){
    console.log("Vi ste maloletni: ");
}else if (brGod >= 18 && brGod < 40);{
    console.log("Vi ste punoletni: ");
}

// Switch naredba
// Sintaksa:
switch (izraz){
    case x:
        // Blok koda koji se izvrsava u slucaju da je izraz = x
        break;
        // break se ne sme izdostvaiti jer bi se izvrsio kod nardnog slucaja
        // sto svakako ne zelimo da se desi.
            case y: // Blok koda koji se izvrsava u slucaju da je izraz = y
        break;
    case z:
        // Blok koda koji se izvrsava u slucaju da je izraz = z
        break;
        default:
            // Blok koda koji se izvrsava u slucaju da je izraz nije jednak ni x, ni y, ni z.
            // Nakon poslednjeg nije potrebno stavljti break
}
// ukljucuje se i 12 i 15
const br = +prompt("Unesite broj izmedju 12-15: ");
switch (br){
    case 12:
        console.log("Korisnik je uneo  broj 12: ");
        break;
    case 13:
        console.log("Korisnik je uneo  broj 13: ");
        break;
    case 14:
        console.log("Korisnik je uneo  broj 14: ");
        break;
    case 15:{
        console.log("Korisnik je uneo broj 15: ");
        }
        default: // moze se naci i u u sredini ne mora na kraju
            console.log("Korisnik nije uneo broj, koji se trazi ");}