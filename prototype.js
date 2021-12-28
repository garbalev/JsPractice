const Animal = function (args) {
  this.name = args.name;
  this.color = args.color;
};


Animal.prototype.voice = function () {
  alert(`${this.name} is ${this.color}`);
};

Animal.prototype.hey = "aloha amigos";

const animal1 = new Animal({ name: "Snezhok", color: "black" });
console.log(animal1);
const Cat = function (args) {
  Animal.call(this, args);
  this.type = "cat";
  this.tailLength = args.tail;
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.voice = function () {
  Animal.prototype.voice.call(this);
  alert(`Cat name: ${this.name}, tail size: ${this.tailLength}`);
};

const cat1 = new Cat({ name: "Murzik", color: "White", tail: "medium" });
console.log(cat1);
console.log(Object.getPrototypeOf(cat1));

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
  
  prop = 'name'
}

const student1 = new Student("Alex", "Gar");
console.log(student1);
class Teacher extends Student {
  static type = "TEACHER";
  constructor(firstName, lastName, subj) {
    super(firstName, lastName);
    this._subject = subj;
  }
  sayHello() {
    super.sayHello();
    alert(this.name + this.surname + this.subject);
  }

  get subjectInfo() {
    alert(`Subject: '${this._subject}'`);
  }

}

const teacher1 = new Teacher("teacher", "1", "math");
console.log(teacher1);
// console.log(Object.getPrototypeOf(teacher1));

let bdcd = {};
Object.defineProperties(bdcd, {
  'name': {
    value: 'Sasha',
    configurable: true
  },
  'age': {
    value: 'twenty'
  }
})
console.log(Object.getOwnPropertyDescriptors(bdcd));


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



console.log('hello');
setTimeout(function () {
  console.log('timeOut');
}, 0);
Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });
console.log('bye');



