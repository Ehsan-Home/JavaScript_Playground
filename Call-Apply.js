// CALL

let myObj = {
  name: "ehsan",
  run: function (arg1, arg2) {
    return this.name + " is running " + arg1 + arg2;
  },
};

function walk(message) {
  return `${this.name} is walking ${message}`;
}

// console.log(myObj.run());

let yourObj = {
  name: "ali",
};

// console.log(myObj.run.call(yourObj));

// console.log(walk.call(myObj, "slowly"));

console.log(myObj.run.call(yourObj, ["super fast", " and happily"]));

// APPLY

console.log(myObj.run.apply(yourObj, ["123", "2"]));
