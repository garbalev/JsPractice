let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

console.log(menu);
multiplyNumeric(menu);
console.log(menu);

///

let calculator = {
  read(a, b) {
    this.num1 = a;
    this.num2 = b;
  },
  sum() {
    let toLog = `Sum: ${this.num1 + this.num2}`;
    return toLog;
  },
  mul() {
    let toLog = `Mul: ${this.num1 * this.num2}`;
    return toLog;
  },
};

calculator.read(2, 9);
console.log(calculator.sum());
console.log(calculator.mul());

///

function Accumulator(num) {
  this.value = num;
  this.add = function (newNum) {
    this.value += newNum;
  };
}

let accum = new Accumulator(1);
accum.add(6);
accum.add(100);
console.log(`Value is ${accum.value}%`);

///


function revStr(str){
  if (str === '') return '';
  return revStr(str.substr(1)) + str[0];
}
console.log(revStr('Sasha')); 


function pow(x, n) {
  if (n < 0) return;
  if (n == 0) return 1;
  return x * pow(x, n-1);
}


console.log(pow(2,5));

