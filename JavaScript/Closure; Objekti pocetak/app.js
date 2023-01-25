// Napraviti glavnu funkciju koja ispisuje poruku da se radi o glavnoj funkciji, ali ispod toga neka se izvrsi pozivanje callback funkcije koja ima za zadatak da izracuna aritmeticku sredinu tri broja koja predstavljaju argumente te callback funkcije .

const main = (other) => {
  console.log("Radnja glavne funkcije: . . .");
  other(1, 2, 3);
};

const ars = (first, second, third) => {
  console.log(+((first + second + third) / 3).toFixed(2));
};
main(ars);

// CLOUSURE FUNKCIJE //
// Poznata je cinjenica da kada se izvrsi funkcija, sve njene lokalne promenljive pokupi garbage colector i one prestaju da postoje u memoriji. Medjutim to nije slucaj za funkcije cije promenljive zahteva neka druga funkcija.

// Clousure je funkcija koja ima pravo pristupa promenljivima iz domena funkcije.
// To se najcesce postize ugradjivanjem funkcije unutar drugde funkcije, nakon cega se postize takozvani Blok Chain.

function first() {
  const prom1 = "Hi";
  return `${prom1} guys.`;
}
console.log(first());

function second() {
  const a = 5;
  const b = 9;
  function clousure(c) {
    return a * c;
  }
  return clousure(3);
}
console.log(second()); // 15
