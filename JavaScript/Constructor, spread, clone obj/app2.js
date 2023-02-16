// Constructor function for Object: sluzi za pravljenje objekata, koji ima argumente od kojih uzimamo property

function User(firstName, lastName, score) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.score = score;
}

const nikola = new User("Nikola", "Bozovic", 4); // new keyword koristimo*
console.log(nikola);

// Svi objekti JavaScripta su poevzani sa nekim ProtoType Objectom. Tako da mozemo reci da svaki objekat ima Prototype.
// Prototype je objekat koji sadrzi odredjena svojstva i metode.

User.prototype.incrementScore = function () {
  this.score += 1;
};
nikola.incrementScore(); // 5
console.log(nikola);

// Pravljenje objekata preko new keyworda

const obj3 = new Object({
  firstName: "Aladin",
  lastName: "Zecic",
});
console.log(obj3);
