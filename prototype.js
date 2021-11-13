const Animal = function(args) {
    this.name = args.name;
    this.color = args.color;
}

Animal.prototype.voice = function() {
    alert(`${this.name} is ${this.color}`);
}

const animal1 = new Animal({name: 'Snezhok', color: 'black'});


const Cat = function(args) {
    Animal.call(this, args);
    this.type = 'cat';
    this.tailLength = args.tail;
} 

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat;
Cat.prototype.voice = function() {
    Animal.prototype.voice.call(this);
    alert(`Cat name: ${this.name}, tail size: ${this.tailLength}`)
}

const cat1 = new Cat({name: 'Murzik', color: 'White', tail: 'medium'});

console.log(cat1);


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
console.log(student1);
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
