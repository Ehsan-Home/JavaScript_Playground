let list = [1, 2, 3, 4, 5];

let list2 = list.filter((item) => item < 3);

// console.log(list2);

let listBoolean = [false, undefined, 0, 1, "ali", "", NaN];

let str = "ehsan";

if (str) {
  console.log("The value is NOT null");
} else {
  console.log("The value is null");
}

console.log("ali" == true);

let listBooleanFiltered = listBoolean.filter((item) => item);

console.log(listBooleanFiltered);
