for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// console.log("i outside the loop", i);

// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 1000);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

// console.log("***");

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);
