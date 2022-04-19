const API = "https://jsonplaceholder.typicode.com";

export function getUserData(){
    return await fetch(API)
    .then((response) => {
      localStorage.setItem("userData", response.json());
      console.log(localStorage.getItem("userData"));
    })
    .catch((err) => console.log(err));
} 

export function show(){
    console.log("something here");
}