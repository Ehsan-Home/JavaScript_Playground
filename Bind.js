let myObj = {
  name: "ehsan",
  run: function (args) {
    console.log(`${this.name} is running ${args}`);
  },
};

let yourObj = {
  name: "hassan",
};

yourObjFunc = myObj.run.bind(yourObj, ["slowly", "sadly"]);

// yourObjFunc();

function myFunc(...args) {
  let sum = 0;
  args.forEach((value) => (sum += value));
  return sum;
}

const sum = myFunc(1, 2, 3, 4, 5);
console.log(sum);
