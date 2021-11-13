// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.surname = lastName;
// }

// Person.prototype.sayHello = function () {alert(this.firstName + this.surname)};

// let persone1 = new Person('Alex', 'G');

// function Teacher(firstName, lastName, subj) {
//   this.subject = subj;
//   Person.call(this, firstName, lastName);
// }

// Teacher.prototype = Object.create(Person.prototype);

// let teach1 = new Teacher('Teacher', '1', 'subject1');

/// Classes
class Student {
  static type = "STUDENT";

  constructor(firstName, lastName) {
    this.name = firstName;
    this.surname = lastName;
  }
  sayHello() {
    alert(this.name + this.surname);
  }
}

const student1 = new Student("Alex", "Gar");

class Teacher extends Student {
  static type = "TEACHER";
  constructor(firstName, lastName, subj) {
    super(firstName, lastName);
    this.subject = subj;
  }
  sayHello() {
    super.sayHello();
    alert(this.name + this.surname + this.subject);
  }

  get subjectInfo() {
    alert(`Subject: '${this.subject}'`);
  }
}

const teacher1 = new Teacher("Teacher", "1", "math");


/// OBJECT & PROTOTYPE

let action1 = "sayHi",
  action2 = "sayBy";

let user1 = {
  firstName: "Sasha",
  [action1](lorem) {
    // alert
    `Hi, ${this.firstName}, ${lorem}`;
  },

  [action2](lorem2) {
    // alert
    `Goodbye, ${this.firstName}, ${lorem2}`;
  },
};

let user2 = {
  firstName: "Diana",
};

user2.__proto__ = user1;

user1[action1]("welcome!"); // > Sasha

user2[action1]("was prototyped"); // > Diana
user1[action2].bind(user2)("was bound"); // > Diana
