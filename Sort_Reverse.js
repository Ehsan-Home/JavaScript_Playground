// SORT

let list = [1, 10, 100, 2, 3];

// a - b > 0 => a > b
// list.sort((a, b) => a - b);
list.sort((a, b) => a - b);

let list3 = ["e", "eb", "ea", "a", "aa"];

console.log(list3.sort((a, b) => b - a));

console.log("list: ", list);

// REVERSE

let list2 = [8, 7, 6, 5, -1, 10];

list2.reverse();

console.log("list2", list2);

// PG

function Sort(arr) {
  return arr.sort((a, b) => a - b);
}

console.log("SORTED: ", Sort([3, 4, 1, 0, 12]));
