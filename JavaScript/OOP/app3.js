// Zadatak
class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
}

const course1 = new Course("IT Camp", 9, 100);
console.log(course1.length);
console.log(course1.title);
