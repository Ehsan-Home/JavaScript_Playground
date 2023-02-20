// str = findBalance
// res = find_balance
function convert(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) {
      let lowerCaseCharAscii = str.charCodeAt(i) + 32;
      let lowerCaseChar = String.fromCharCode(lowerCaseCharAscii);
      res = res + "_" + lowerCaseChar;
    } else {
      res += str[i];
    }
  }

  return res;
}

let str = "getNumberOfItemsInTheOppositeArray";

// console.log(convert(str));

console.log(convert(str));
