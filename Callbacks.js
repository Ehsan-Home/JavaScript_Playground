function myFunc(a, b, operation) {
  return operation(a, b);
}

function substitute(a, b) {
  return a - b;
}

const res = myFunc(2, 3, substitute);
const res2 = myFunc(2, 3, (a, b, c) => {
  console.log(a * b * c);
});

console.log(res);
console.log(res2);
