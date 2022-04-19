const API = "https://jsonplaceholder.typicode.com";

exfunction getUserData(){
    return await fetch(API)
    .then((response) => {
      localStorage.setItem("userData", response.json());
      console.log(localStorage.getItem("userData"));
    })
    .catch((err) => console.log(err));
} 

function show(){
    console.log("something here");
}