let sum = 0;

function qwerty(num1, num2) {
  sum = num1 + num2;
  // console.log(`первое ${sum}`);
  return sum;
}

function qwerty2() {
  sum = qwerty(2, 3) * 2;
  console.log(`второе ${sum}`);
}

function qwerty3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      sum *= 3;
      console.log(`третье ${sum}`);
      resolve(console.log("(promise2)"));
    }, 2000);
  });
}

function qwerty4() {
  sum *= 4;
  console.log(`четвёртое ${sum}`);
  console.log("--end--");
}

let qwerty1000 = new Promise((resolve) => {
  setTimeout(function () {
    console.log("--start--");
    console.log(`первое ${qwerty(2, 3)}`);
    resolve(console.log("(promise1)"));
  }, 5000);
});

qwerty1000.then().then(qwerty2).then(qwerty3).then().then(qwerty4);

///async await

const beforeFetch = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

// function fetching() {
//   console.log("Fetching started");
//   return beforeFetch(2000)
//     .then(() => fetch("https://jsonplaceholder.typicode.com/todos"))
//     .then((response) => response.json());
// }

// fetching()
//   .then((data) => console.log(data))
//   .then(() => console.log("Fetching done"))
//   .catch(err => console.error(err));

async function fetching() {
    console.log("Fetching started");
    await beforeFetch(2000);
    const fetchResponse = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await fetchResponse.json();
    console.log(data, "Fetching done");
}

fetching().catch(err => console.error(err));