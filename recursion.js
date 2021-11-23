/// Recursion

function recStr(str) {
  if (str === "") return "";
  return recStr(str.substr(1)) + str[0];
}
console.log(recStr("Sasha"));

function pow(x, n) {
  if (n < 0) return;
  if (n == 0) return 1;
  return x * pow(x, n - 1);
}

console.log(pow(2, 5));

function fac(num) {
  if (num === 0) {
    return 1;
  }
  return num * fac(num - 1);
}

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  }
  return str + repeatStringNumTimes(str, num - 1);
}
