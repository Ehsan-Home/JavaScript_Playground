// Basic of async-await

function getNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(85);
    }, 1000);
  });
}

async function handlePromise() {
  const res = await getNumber();
  console.log(res);
}

// Write API with async-await

async function getToDo(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    const toDoStatus = setStatus(data.completed);

    console.log(toDoStatus);
  } catch (error) {
    console.log("ERROR: API failed");
  }
}

function setStatus(status) {
  return status ? "Completed ✅" : "Not completed yet! 🤯";
}

getToDo(4);

// handlePromise();
