// function foo(a) {
//   console.log(a);
// }
// foo(2); // poziva funkciju foo() da se izvrsi - i predstavlja RHS referencu na foo. 2 se prosledi kao argument funkcije foo() i dodeljuje parametru a. To dodeljvanje vrednosti se vrsi LHS pretragom.

// Reference Error znaci da pretazivanje opsega vidljivosti bilo neuspesno. TypeError znaci da je pretrazivanje opsega vidljivosti bilo uspesno, ali ste pokusali da sa promenljivom neku nezadovoljenu/nemogucu akciju.
// OPSEG VIDLJIVOSTI prestavlja skup pravila za koja odredjuje kako se moze pronaci neka promenljiva (identifikator). Jedan razlog te pretrage moze biti dodeljivanje vrednosti toj promenljivoj sto je LHS referenca, ili samo ucitavanje njene vrednosti sto je RHS(retrieve source) referenca.

// Leksicki opseg vidljivosti //
// Leksicki opseg vidljivosti je sve ono sto se desi u toku leksicke analize koda.

function foo(a) {
  var b = a * 2;
  function bar(c) {
    console.log(a, b, c); // 2, 4, 16
  }
  bar(b * 4);
}
foo(2);

// Pretrazivanje ospega vidljivosti
// Masina izvrsava iskaz console.log() i trazi ove gore tri promenljive a, b, c. Pretrazivanje opsega vidljivosti se zavrsava kada se pronadje prvo poklapanje sa trazenim identifikatorom.

// Funkcija eval() obradjuje niz znakova koje joj prosledjujemo kao argument, kao da je to sastavni deo koda koji postoji na tom mestu u programu.

function foo(str, a) {
  eval(str); // varanje!
  console.log(a, b); // "var b = 8" obradjuje se na mestu eval()
}
var b = 4;
foo("var b = 8", 1); // 1, 8
