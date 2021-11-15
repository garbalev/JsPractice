function revStr(str) {
  if (str === "") return "";
  return revStr(str.substr(1)) + str[0];
}
console.log(revStr("Sasha"));
