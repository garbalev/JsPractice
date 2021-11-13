/// Destructuring assignment

let fruitsAndVeges = ["apple", "pear", "peach", "carrot", "lettuce", "tomato"];

let [fruit1, fruit2, fruit3, ...veges] = fruitsAndVeges;
let frutties = fruitsAndVeges.slice(0, 3);
let [vege1, vege2, vege3] = veges;

let man = {
  age: "25",
  height: "2m",
  name: "Alexa",
  sayAloha() {
    alert(this.name);
  },
  preferences: ["football", "gym", "hockey"],
};

let {
  age: a,
  height: h,
  name: n,
  preferences: hobbies,
  preferences: [footB, ...otherHobbies],
} = man;
