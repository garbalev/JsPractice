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
  let newStr = str.replace(/[\w`]+/gi, (word) => [...word].reverse().join(""));
  return newStr;
}

console.log(revStrPreserveOrder("Hello, my NAME is Alex, I`m fine, i am 123"));

/// REVERSE ONLY WORDS STARTED WITH UPPERCASE LETTER
function revStrPreserveOrderUpper(str) {
  let newStr = str.replace(/\b[A-Z][\w`]+\b/g, (word) =>
    [...word].reverse().join("")
  );
  return newStr;
}

console.log(
  revStrPreserveOrderUpper("Hello, my NAME is Alex, I`m fine, i am 123")
);

/// FIND ALL WORDS AND NUMBERS IN THE STRING
function allWordsAndNumbersInString(str) {
  // let newStr = str.replace(/,|\./g, '').split(' ');
  let newStr = str.match(/\b[\w`]+\b/g);
  // let newStr = str.split(/,*\s/);
  return newStr;
}

console.log(
  allWordsAndNumbersInString("Hello, my name is Alex, i`m amazing, i am 123.")
);

/// FIND THE LONGEST WORD IN THE STRING WITH LOOP
function theLongestwordInTheStringWithLoop(str) {
  let sortedStr = str.match(/\b[\w`]+\b/g);
  // console.log(sortedStr);
  let theLongestWord = "";
  for (let word of sortedStr) {
    if (word.length > theLongestWord.length) {
      theLongestWord = word;
    }
  }
  return theLongestWord + ", " + theLongestWord.length;
}

console.log(
  theLongestwordInTheStringWithLoop(
    "Hello, my name is Alex, i am amazing, i am 123"
  )
);

/// FIND THE LONGEST WORD IN THE STRING WITH .SORT
function theLongestwordInTheStringWithSorting(str) {
  let sortedStr = str.match(/\b[\w`]+\b/g);
  sortedStr.sort((a, b) => b.length - a.length);
  return sortedStr[0] + ", " + sortedStr[0].length;
}

console.log(
  theLongestwordInTheStringWithSorting(
    "Hello, my name is Alex, i am amazing, i am 123"
  )
);

/// FIND THE LONGEST WORD IN THE STRING WITH .SORT

