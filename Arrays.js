const arr = [1, 2, 3, 4];
// arr.push(6);
// const popNumber = arr.pop();
// const firstNumber = arr.shift();

// arr.splice(0, 2);
const arr2 = arr.slice(1, 3);
arr2.pop();
arr2.pop();
arr2[0] = 6;
arr2[1] = 7;
arr2[2] = 8;

// Const ERROR
// for (const i = 0; i < arr.length; i++) {
//   console.log(`i:${i}`);
// }

for (const item of arr2) {
  console.log(item);
}
console.log("*****");

console.log("arr", arr);
console.log("arr2", arr2);
