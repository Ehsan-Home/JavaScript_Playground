// Object deconstructing
// Mainly used in Props

function myFunc({ name, age, sex }) {
  console.log(
    `${name} is ${age} years old, ${sex === "M" ? "Male" : "Female"}`
  );
}

let obj = {
  name: "ehsan",
  age: 26,
  sex: "M",
};

// myFunc(obj);

// Array deconstructing

const arr = [3.14, { name: "reza" }];

const [pi, objVar] = arr;

console.log(pi);
console.log(objVar);
