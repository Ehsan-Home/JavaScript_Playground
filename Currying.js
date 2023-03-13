function multiply(a, b, c) {
  return a * b * c;
}

function multiplyCurrying(multiply) {
  return function (a) {
    return function (b) {
      return function (c) {
        return multiply(a, b, c);
      };
    };
  };
}

function multiplyCurrying2(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

multiply(3, 4, 5);

// Currying, converting into multiple single value functions
const res = multiplyCurrying(multiply)(3)(4)(5);

const res2 = multiplyCurrying2(5)(6)(7);

const func1 = multiplyCurrying2(1);

const func2 = func1(6);

console.log(res3);
