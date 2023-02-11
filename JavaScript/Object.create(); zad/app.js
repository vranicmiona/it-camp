// Jos kedan nacin pravljenja objekta:

const objectFunction = {
  incrementsScore: function () {
    this.score += 1;
  },
};

function creatUser(firstName, lastName, score) {
  const newUser = Object.create(objectFunction);
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.score = score;
  return newUser;
}
const tarik = creatUser("Tarik", "Ibrovic", 16);
console.log(creatUser(tarik));
tarik.incrementsScore();
console.log(tarik);
