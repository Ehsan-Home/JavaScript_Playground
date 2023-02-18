function getToDo(id) {
  return new Promise((resolve, error) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((res) => resolve(res))
      //   .then((res) => resolve(res.json()))
      .catch((err) => error(err));
  });
}

function setInfo(res) {
  //   return `Title of task: ${res.title}, status: ${res.completed}`;
  return new Promise((resolve, error) =>
    resolve(`Title of task: ${res.title}, status: ${res.completed}`)
  );
}

getToDo(11)
  .then((res) => setInfo(res))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// fetch(`https://jsonplaceholder.typicode.com/todos/${4}`)
//   .then((res) => res.json())
//   .then((res) => setInfo(res))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
