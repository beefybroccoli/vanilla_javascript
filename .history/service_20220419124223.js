const API = "https://jsonplaceholder.typicode.com";

const data = await fetch(API)
  .then((response) => response.json())
  .then((response) => console.log(data))
  .catch((err) => console.log(err));


export