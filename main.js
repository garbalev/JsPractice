
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
  })}


function qwerty4 () {
  sum*= 4;
  console.log(`четвёртое ${sum}`);
  console.log('--end--');
};

let qwerty1000 = new Promise((resolve) => {
    setTimeout(function () {
      console.log('--start--');
      console.log(`первое ${qwerty(2, 3)}`);
      resolve(console.log('(promise1)'));
    }, 2000);
  })

qwerty1000.then().then(qwerty2).then(qwerty3).then().then(qwerty4);

/// Map & Set

let fruits = {
  banana: {
    color: "yellow",
    weight: "200g",
  },
  apple: {
    color: "red",
    weight: "250g",
  },
  pear: {
    color: "green",
    weight: "150g",
  },
};

let bananaFruit = fruits.banana;

let fruitPrices = new Map();
fruitPrices.set(bananaFruit, 20);
fruitPrices.set(fruits.apple, 10);
fruitPrices.set(fruits.pear, 15);
console.log(fruitPrices.get(fruits.banana));


  //

const fruitsArray = ['apple', 'pineapple', 'pear', 'peach', 'apple', 'peach'];
const namesArray = ['Alex', 'Diana', 'Petro', 'Alex', 'Diana'];

let uniqueElements = (array) => {
  const set = new Set(array);
  console.log(Array.from(set));
}

uniqueElements(fruitsArray);
uniqueElements(namesArray);

///

let unsortedArray = ['Diana', 'anadi', 'Sasha', 'ashas', 'pit', 'tip'];

function wordsFilter (array) {
let sortedArray = new Map();
  for(let word of array) {
    let sortedWord = word.toLowerCase().split('').sort().join('');
    sortedArray.set(sortedWord, word);
    
  }
  console.log(array);
  console.log(Array.from(sortedArray.values()));
};
wordsFilter(unsortedArray);


/// Destructuring assignment

let fruitsAndVeges = ['apple', 'pear', 'peach', 'carrot',  'lettuce', 'tomato'];

let [fruit1,fruit2,fruit3,...veges ] = fruitsAndVeges;
let frutties = fruitsAndVeges.slice(0, 3);
let [vege1, vege2, vege3] = veges;
// alert(`
//       ['apple', 'pear', 'peach', 'carrot',  'lettuce', 'tomato'];
//       veges: ${veges} & frutties: ${frutties};
//       1st fruit: ${fruit1}, 2nd fruit: ${fruit2}, 3rd fruit: ${fruit3};
//       1st vege: ${vege1}, 2nd vege: ${vege2}, 3rd vege: ${vege3}`
//       );



let man = {
  age: '25',
  height: '2m',
  name: 'Alexa',
  preferences: ['football', 'gym', 'hockey'],
}

let { 
  // age: a, 
  height: h, 
  name: n, 
  preferences: hobbies, 
  preferences: [footB, ...otherHobbies]
} = man;






