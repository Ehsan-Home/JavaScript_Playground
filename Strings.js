let str = "Ehsan";
str = str + " Ghasaei";
console.log(str);

// Primitive
let a = "ali";
let b = a;
b += "hhhh";

console.log(`a:${a}`);
console.log(`b:${b}`);

const str2 = str.slice(0, 2);
const str3 = str.replace("E", "M");

console.log("--");
for (const ch of str3) {
  console.log(ch);
}
console.log("--");

console.log(`Str2:${str2}`);
console.log(`Str3:${str3}`);
