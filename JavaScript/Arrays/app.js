// 1. Osnovni Tipovi Podataka
// (Primitivni Tipovi Podataka) se cuva u brzom delu memorije "stack" i ima "immutable" vrednosti.
// (Vrednosni Tipovi Podataka) mogu da sadrze samo jednu vrednost

// 2. Referentni tipovi podataka skladiste dosta vrednosti - cuvaju se u sporijem delu memorije koja se naziva "heap", i mogu da se menjaju
// Neprimitivni Tipovi Podataka

let brojGodina = 26;
let brojTvojihGodiina = brojGodina;
console.log(brojTvojihGodiina); // 26

brojTvojihGodiina = 22;
console.log(brojTvojihGodiina); // 22 dva razlicita mesta u memoriji sa jednakim vrednostima
console.log(brojGodina); // 26
/////////////////////////////////////////////////
let godine = [20, 21, 18, 17, 17, 19, 18, 19];
let noveGodine = godine;
console.log(noveGodine);
noveGodine = [21, 22, 19, 19, 18, 18, 20, 20];
noveGodine.push(34);
console.log(noveGodine);
console.log(godine); // menjanjem jedne menja se i ona druga, kod vrednosnih nema menjajnja
