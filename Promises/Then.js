function getToDo(id) {
  return new Promise((resolve, error) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => error(err));
  });
}

// Will return a promise
function getComments() {
  return fetch("https://jsonplaceholder.typicode.com/comments/10").then((res) =>
    res.json()
  );
}

function setInfo(res) {
  return `Title of task: ${res.title}, status: ${res.completed}`;
}

// getToDo(14)
//   .then((res) => setInfo(res))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Run always"));

// fetch(`https://jsonplaceholder.typicode.com/todos/${4}`)
//   .then((res) => res.json())
//   .then((res) => setInfo(res))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// function myPromise() {
//   return new Promise((resolve, error) => {
//     setTimeout(() => {
//       console.log("in time out");
//       resolve(888);
//     }, 1000);
//   });
// }

// myPromise()
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

// PROMISE ALL USING THEN

// Promise.all([getComments(), getToDo(5)])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("ERROR: ", err));
