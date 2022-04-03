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
console.log(fruitPrices);

//

const fruitsArray = ["apple", "pineapple", "pear", "peach", "apple", "peach"];
const namesArray = ["Alex", "Diana", "Petro", "Alex", "Diana"];

let uniqueElements = (array) => {
  const set = new Set(array);
  console.log(set);
};

uniqueElements(fruitsArray);
uniqueElements(namesArray);

console.log(...{a:20, b:30}); 

///

let unsortedArray = ["Diana", "anadi", "Sasha", "ashas", "pit", "tip"];

function wordsFilter(array) {
  let sortedArray = new Map();
  for (let word of array) {
    let sortedWord = word.toLowerCase().split("").sort().join("");
    sortedArray.set(sortedWord, word);
  }
  console.log(array);
  console.log(Array.from(sortedArray.values()));
}
wordsFilter(unsortedArray);


///
