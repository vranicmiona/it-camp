// Na osnovu stringa koji unosi korisnik napraviti niz, gde cemo ispitati da li se jagoda nalazi unutar tog niza. Ako se jagoda ne nalazi unutar niza, funkcija neka vrati taj niz poredjan abecedno, s tim sto ce se na prvom mestu dodati broj 10, a na poslednjem broj 100.
// Dok ako se jagoda nalazi unutar niza vratiti poziciju gde se ona nalazi.

function strawberry() {
  const str = prompt("Unesite potrebno voce: ");
  const arr = str.split(",");
  if (arr.some((el) => el === "jagoda")) {
    return `Jagoda se nalazi na poziciji ${arr.indexOf("jagoda") + 1}`;
  } else {
    arr.sort().unshift(10).push(100);
    return arr;
  }
}
console.log(strawberry());
