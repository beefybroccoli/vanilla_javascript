const API = "https://jsonplaceholder.typicode.com";

localStorage.setItem("userData", "empty");

console.log("API = ", API);

const data = await fetch(API)
  .then((response) => {
    localStorage.setItem("userData", response.json());
    console.log(localStorage.getItem();
  })
  .catch((err) => console.log(err));

console.log("data = ", data);

localStorage = setItem("userData", data);