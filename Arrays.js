const arr = [1, 2, 3, 4];
// arr.push(6);
// const popNumber = arr.pop();
// const firstNumber = arr.shift();

// arr.splice(0, 2);
// console.log("spliced ", arr);
const arr2 = arr.slice(0, 2);
console.log("arr 2 sliced", arr2);
arr2.pop();
arr2.pop();
arr2[0] = 6;
arr2[1] = 7;
arr2[2] = 8;

// Const ERROR
// for (const i = 0; i < arr.length; i++) {
//   console.log(`i:${i}`);
// }

// Working
for (const item of arr2) {
  console.log(item);
}
console.log("*****");

console.log("arr", arr);
console.log("arr2", arr2);
