let string = 'Hello, my name is Alex, i am fine';

//1
function revStrWithRecursion(str) {
  if (str === "") return "";
  return revStrWithRecursion(str.substr(1)) + str[0];
}
console.log(revStrWithRecursion(string));

//2
function revStrWithArray(str) {
  // return str.split('').reverse().join('');
  return [...str].reverse().join('');
}

console.log(revStrWithArray(string))

//3
function firstRevStrWithLoop(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(firstRevStrWithLoop(string));

//4
function secondRevStrWithLoop(str) {
  let newStr = '';
  for(let letter of str) {
    newStr = letter + newStr;
  }
  return newStr
}

console.log(secondRevStrWithLoop(string));


//5 

const funcy = (word) => word.toUpperCase();

function revStrPreserveOrder(str) {
  let newStr = str.replace(/w+/g, 'obama');
  return newStr
}

console.log(revStrPreserveOrder(string));


let newStr = string.replace(/[A-Z]/gi, 'obama');
console.log(newStr);

// alert(string.replaceAll('am', 'JJ'));
