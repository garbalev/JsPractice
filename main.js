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

const manWithAge25 = newMan(25);
const manWithAge16 = newMan(16);
console.log(manWithAge25("Petro", "La Pistola"));

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

/// Promises

let sum = 0;

function qwerty (num1, num2) {
  sum = num1 + num2;
  // console.log(`первое ${sum}`);
  return sum;
}

function qwerty2 () {
  sum = qwerty(2, 3) * 2;
  console.log(`второе ${sum}`);
}

function qwerty3 () {
  return new Promise((resolve) => {
    setTimeout(() => {
      sum *= 3;
      console.log(`третье ${sum}`);
      resolve(console.log('(promise2)'));
    }, 2000);
  })
  

}

function qwerty4 () {
  sum*= 4;
  console.log(`четвёртое ${sum}`);
};

let qwerty1000 = new Promise((resolve) => {
    setTimeout(function () {
      console.log(`первое ${qwerty(2, 3)}`);
      resolve(console.log('(promise1)'));
    }, 2000);
  })

qwerty1000.then().then(qwerty2).then(qwerty3).then().then(qwerty4);

