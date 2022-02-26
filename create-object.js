// how to create objects
// 1.
const fullName = { firstName: "majedul", lastName: "islam" };
// console.log(fullName);
// 2.
const student = new Object(fullName);
student.age = 22;
// console.log(student);
// 3.
const object = Object.create(fullName);
/* console.log(object)
console.log(object.firstName);
 */
// 4.
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const newObject = new Student("majedul", 22);
// console.log(newObject);

// 5.
function createObject(name, age) {
  this.name = name;
  this.age = age;
}

const man = new createObject("majedul", 22);
console.log(man);
