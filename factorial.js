function fac1(num) {
  if (num === 0) {
    return 1;
  }
  return num * fac1(num - 1);
}

function fac2(num) {
  let res = 1;
  for (let i = 2; i <= num; i++) {
    res *= i;
  }
  return res;
}
