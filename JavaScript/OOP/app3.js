// Zadatak
class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
}

const course1 = new Course(2, 4);
console.log(course1.length);
console.log(course1.title);
