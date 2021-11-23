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
function allWordsAndNumbers(str) {
  // let newStr = str.replace(/,|\./g, '').split(' ');
  let newStr = str.match(/\b[\w`]+\b/g);
  // let newStr = str.split(/,*\s/);
  return newStr;
}

console.log(
  allWordsAndNumbers("Hello, my name is Alex, i`m amazing, i am 123.")
);

/// FIND THE LONGEST WORD IN THE STRING WITH LOOP
function theLongestwordWithLoop(str) {
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
  theLongestwordWithLoop("Hello, my name is Alex, i am amazing, i am 123")
);

/// FIND THE LONGEST WORD IN THE STRING WITH .SORT
function theLongestwordWithSorting(str) {
  let sortedStr = str.match(/\b[\w`]+\b/g);
  sortedStr.sort((a, b) => b.length - a.length);
  return sortedStr[0] + ", " + sortedStr[0].length;
}

console.log(
  theLongestwordWithSorting("Hello, my name is Alex, i am amazing, i am 123")
);

/// FIND THE LONGEST WORD IN THE STRING WITH .REDUCE
function theLongestwordWithReducing(str) {
  let sortedStr = str.match(/\b[\w`]+\b/g);
  let result = sortedStr.reduce((prev, cur) =>
    prev.length > cur.length ? prev : cur
  );
  return result + "," + result.length;
}

console.log(
  theLongestwordWithReducing("Hello, my name is Alex, i am amazing, i am 123")
);

/// FIND THE LONGEST WORD IN THE STRING WITH .MAP AND .MAX
function theLongestwordWithMapAndMax(str) {
  let sortedStr = str.match(/\b[\w`]+\b/g);
  let sortedStrLengths = sortedStr.map((el) => el.length);
  return Math.max(...sortedStrLengths);
}

console.log(
  theLongestwordWithMapAndMax("Hello, my name is Alex, i am amazing, i am 123")
);

/// FIND THE LONGEST REPEATING CHARACTER IN THE STRING
function theLongestRepeatingChar(str) {
  let repeats = str.match(/(\S)\1*/g);
  repeats.sort((a, b) => b.length - a.length);
  return repeats[0] + "," + repeats[0].length;
}

console.log(theLongestRepeatingChar("aaabbbb ccc ,, d eeff ..."));

/// REMOVE ONLY FALSY VALUES
function onlyTrue(arr) {
  return arr.filter((el) => !!el);
}

///1 RETURN INDEX AT WHICH A VALUE SHOULD BE INSERTED INTO AN ARRAY
function getIndexToIns1(arr, num) {
  return arr.filter((i) => i < num).length;
}

///2
function getIndexToIns(arr, num) {
  let final = [];
  arr.forEach((el, index) => {
    if (el < num) {
      final.push(index);
    }
  });
  return final.length;
}

///3
function getIndexToIns3(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}

///4
function getIndexToIns4(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

// let arrayForChars = [];
// for (let i = 0; i < str1.length; i++) {
//   if (str1[i] === str1[i+1]) {
//     arrayForChars.push(str1[i], str1[i+1]);

// }}
// console.log(arrayForChars);

// console.log('a');
