// list = [2, 3, 4, 6];

// let a = 3;
// var b = 4;
// const c = 5;
// console.log(c++);

// for (let i = 0; i < list.length; i++) {
//   console.log(list[i]);
// }

// list.pop();
// list.push(7);

// for (let item of list) {
//   console.log(item);
// }

// function myFunc(num) {
//   return num * 2;
// }

// console.log(myFunc(3));

obj = {
  name: "ali",
  id: 3,
  isDead: false,
};

// console.log(obj.name);
obj.age = 34;
// console.log(obj.age);
// console.table(obj);

// delete obj.name;
// obj.name = undefined;

// for (key in obj) {
//   console.log(key, obj[key]);
// }

// list = [2, 3, 4, 6];

// if (list.includes(4)) {
//   console.log("OH yess");
// }

// for (item of list) {
//   console.log(item);
// }

// let a = 4;
// if (a == 4) {
//   console.log("YES");
// }

list = [2, 3, 4, 6];

str = "ehsan";

for (let char of str) {
  console.log(char);
}

for (let i = 0; i < str.length; i++) {
  console.log(`index: ${i} , value: ${str[i]}`);
}

if (str === "ehsan") {
  console.log("Equal");
} else {
  console.log("NOT Equal");
}

console.log("****");
for (let index in str) {
  console.log(index);
}

// if (list.includes(8)) {
//   console.log("3 is in the list");
// }

// let listKey = ["name", "id", "sex", "isDead", "height"];

// for (key of listKey) {
//   if (key in obj) {
//     console.log(`${key} is in the obj`);
//   }
// }

if (obj["name"] === "ali2") {
  console.log("the value is good");
}

// if ("id" in obj) {
//   console.log("id is in the obj");
// }

// console.table(obj);
