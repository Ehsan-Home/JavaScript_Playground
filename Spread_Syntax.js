// BASIC

let list = [1, 2, 3, 5];

let list2 = [6, ...list, 7];

console.log(list2);

// USE IN FUNCTION

function myFunc(num1, num2, num3) {
  return num1 + num2 + num3;
}

list = [3, 45, 9];

console.log(myFunc(...list));

// ********************************

function myFunc2(...nums) {
  console.log(nums);
}

myFunc2([2], [3], [4, 6, 7]);
