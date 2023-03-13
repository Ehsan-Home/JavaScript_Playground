for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// function myFunc() {
//   var x = 1;
//   return function () {
//     console.log(x);
//   };
// }

// const res1 = myFunc();
// const res2 = myFunc();

// res1();
// res2();
