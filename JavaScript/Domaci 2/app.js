const dani = Number(prompt("Unesite broj vaseg omiljenog dana od 0-6! "));
switch (dani) {
    case 0:
    console.log("Ugodno provedite vikend ");
    console.log(new Date(0).getDate);
    
    break;
    case 1:
        console.log("Danas je radan dan ");
        console.log(new Date(1).getDate);
        
        break;
    case 2:
        console.log("Danas je radan dan ");
        console.log(new Date(2).getDate);
        
        break;
    case 3:
        console.log("Danas je radan dan ");
        console.log(new Date(3).getDate);
        
        break;
    case 4:
        console.log("Danas je radan dan ");
        console.log(new Date(4).getDate);
        
        break;
    case 5:
        console.log("Danas je radan dan ");
        console.log(new Date(5).getDate);
        
        break;
    case 6:
        console.log("Ugodno provedite vikend ");
        console.log(new Date(6).getDate);
            
    default:
        console.log("Niste uneli odgovarajuci broj u relaciju 0-6! ");}