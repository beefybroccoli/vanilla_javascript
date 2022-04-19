const API = "https://jsonplaceholder.typicode.com";

localStorage.setItem("userData", "empty");

console.log("API = ", API);

const data = await fetch(API)
  .then((response) => response.json())
  .catch((err) => console.log(err));



localStorage = setItem("userData", data);
