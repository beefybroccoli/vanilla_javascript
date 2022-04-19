const API = "https://jsonplaceholder.typicode.com";

localStorage.setItem("userData", "empty");

console.log("API = ", API);

function getUserData(){
    
} fetch(API)
  .then((response) => {
    localStorage.setItem("userData", response.json());
    console.log(localStorage.getItem("userData"));
  })
  .catch((err) => console.log(err));

export 