const API = "https://jsonplaceholder.typicode.com";

localStorage.setItem("userData", "empty");

const data = await fetch(API)
  .then((response) => response.json())
  .then((response) => console.log(resonse))
  .catch((err) => console.log(err));

  localStorage = setItem("userData", data);

