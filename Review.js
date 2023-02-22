// variable definition

let a = 2;
var b = 3;
const c = 4;

// Array

let arr = [4, 3, 6, 1, 10];
arr.push(5);
arr.pop();
arr.shift();

let arr2 = arr.slice(0, 2);
// console.log(arr2);

// if (arr.includes(3)) {
//   console.log("EXISTS");
// }

// a - b > 0 , a > b
arr.sort((a, b) => a - b);
// console.log(arr);

let arr3 = [...arr];
arr3.push(77);
// console.log("arr3:", arr3);
// console.log("arr:", arr);

// Object

let obj = { name: "ehsan", sex: "M" };
obj["name"] = 34;

let key = "sex";
obj[key] = "F";

// if ("name" in obj) {
//   console.log("name is in obj");
// }

// for (const key in obj) {
//   console.log(key, obj[key]);
// }

delete obj.sex;

// console.log(obj);

// MAP

let map = new Map();
map.set("key", 1);
map.get("key");
map.has("key");
map.forEach((value, key) => {});

// String

let str = "Ehsan";
let str2 = str;
str2 += "BBB";

let str3 = str.replace("Eh", "CC");

if (str.includes("f")) {
  console.log("E is in str");
}

let str4 = str.slice(2, str.length);
console.log(str4);

// console.log(str2);
// console.log(str3);
