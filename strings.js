let string = "Hello, my name is Alex, i am fine, i am 123";

//1 USING RECURSION
function revStrWithRecursion(str) {
  if (str === "") return "";
  return revStrWithRecursion(str.substring(1)) + str[0];
}

console.log(revStrWithRecursion(string));

//2 USING ARRAY
const revStrWithArray = (str) => [...str].reverse().join("");

console.log(revStrWithArray(string));

//3 USING ITERATION V.1
function firstRevStrWithLoop(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(firstRevStrWithLoop(string));

//4 USING ITERATION V.2
function secondRevStrWithLoop(str) {
  let newStr = "";
  for (let letter of str) {
    newStr = letter + newStr;
  }
  return newStr;
}

console.log(secondRevStrWithLoop(string));

//5 REVERSE WORDS, NOT SCTRING
function revStrPreserveOrder(str) {
  let newStr = str.replace(/\w+/gi, (str) => [...str].reverse().join(""));
  return newStr;
}

console.log(revStrPreserveOrder(string));

/// REVERSE ONLY UPPERCASE WORDS
function revStrPreserveOrderUpper(str) {
  let newStr = str.replace(/\b[A-Z]\w+\b/g, (str) => [...str].reverse().join(""));
  return newStr;
}

console.log(revStrPreserveOrderUpper("Hello, my NAME is Alex, i am fine, i am 123"));

/// FIND ALL WORDS AND NUMBERS IN THE STRING
function allWordsAndNumbersInString(str) {
  // let newStr = str.replace(/\W+/g, ' ').split(' ');
  // let newStr = str.match(/\w+/g);
  let newStr = str.split(/\b\W+/);
  return newStr;
}

console.log(allWordsAndNumbersInString(string));

/// FIND THE LONGEST WORD IN THE STRING
function theLongestwordInTheString(str) {
  let sortedStr = str.match(/\b\w+/g);
  console.log(sortedStr);
  let theLongestWord = '';
  for (let word of sortedStr) {
    if (word.length > theLongestWord.length) {
      theLongestWord = word;
    }
  }
  return theLongestWord;
}

console.log(theLongestwordInTheString("Hello, my name is Alex, i am amazing, i am 123"));
