// let str = "Ehsan";
// str = str + " Ghasaei";
// const str5 = str.concat("Babab");
// console.log(str5);

// // Primitive
// let a = "ali";
// let b = a;
// b += "hhhh";

// console.log(`a:${a}`);
// console.log(`b:${b}`);

// const str2 = str.slice(0, 2);
// const str3 = str.replace("E", "M");

// console.log("--");
// for (const ch of str3) {
//   console.log(ch);
// }
// console.log("--");

// console.log(`Str2:${str2}`);
// console.log(`Str3:${str3}`);

let str = "ehsan";
let arr = [...str];
for (let i = 0; i < 10; i++) {
  arr.push(i);
}
str = arr.join("");
str[30] = "z";
console.log(str);

let str2 = "ali";
str2 += "z";
console.log(str2);
str2 = "I am happy!";
console.log(str2);
