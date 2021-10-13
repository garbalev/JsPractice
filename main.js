// function bind

function bind(func, ...args) {
  return function (...param) {
    return func(...args, ...param);
  };
}

function logPerson(name, mood, num) {
  return `My name is: '${name}', i am: '${mood}', my nums are: '${num}'`;
}

const logPersonDianaNum = bind(logPerson, "Diana", "Happy");
console.log(logPersonDianaNum("375295133421"));
const logPersonSasha = bind(logPerson, "Sasha");
console.log(logPersonSasha("Baddd", "3392432454"));

function sumNum(a, b, c) {
  let sumBound = `${a} + ${b} + ${c}`;
  return sumBound;
}

const summaAB = bind(sumNum, "10");
console.log(summaAB("30", "20"));

// NEW

function Car(make, model) {
  this.make = make;
  this.model = model;
}

const newCar = new Car("VW", "Golf");
console.log(newCar);

// BIND

var small = {
  a: 1,
  go: function (b, c, d) {
    console.log(`Small/large sum: ${this.a + b + c + d}`);
  },
};

var large = {
  a: 100,
};

small.go(2, 3, 4);

var bindTest = small.go.bind(large, 2); // > function (b, c, d) {console.log(this.a + b + c + d)}
bindTest(3, 4);

/// OBJECT & BIND & PROTOTYPE

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

// ЗАМЫКАНИЯ

//В КОНСТРУКТОРЕ

function NewUser(age) {
  this.makeUser = function (name, surname) {
    const greeting = `Hello, my name is ${name}, age ${age}, my surname is ${surname}`;
    return {
      greeting,
    };
  };
}

const userWithAge = new NewUser("20");
console.log(userWithAge.makeUser("Vasya", "Pumpkin"));

///

function newMan(age) {
  return function (name, surname) {
    const greeting = `Name is ${name}, Surname is ${surname}, Age is ${age}`;
    return {
      greeting,
    };
  };
}

const manWithAge20 = newMan(25);
console.log(manWithAge20("Petro", "La Pistola"));

///

function newUserBind(name, surname, age) {
  const greeting = `Name : ${name}, Surname : ${surname}, Age : ${age}`;
  return {
    greeting,
  };
}

let bondedName = newUserBind.bind(null, "Sasha");
console.log(bondedName("Sosnov", "29"));

/// CLASS

class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 5) {
      console.log(`Имя слишком короткое, введите ещё ${5 - value.length} символа `);
      return;
    }
    this._name = value;
  }
}

let classUser = new User("Sas");
let classUSer2 = new User("Sasha");
console.log(classUSer2.name);

