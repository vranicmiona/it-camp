const niz = [4, 5, 5, 6, 4, 9, -1, 5];

// Napraviti kopiju niza.
const noviNiz = niz.map((element) => element);
console.log(noviNiz);

// spread operator (...)
// Pomocu njega klonoramo niz ili objekat, mogu se dodavati i brisati elemnti i ispred i posle niza ili objekta.

const niz3 = [120, 110, 100, ...niz];
console.log(niz3); // niz3 == niz

const obj = {
  firstName: "Haris",
  lastName: "Muslic",
  status: "samo liverpul",
  age: 18,
};

const obj2 = { status: false, ...obj, age: obj.age + 1 };
console.log(obj2);
