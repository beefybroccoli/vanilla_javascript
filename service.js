/*
Using jQuery or vanilla JS you will display each 'USER' in a table. When the user selects a 'USER' in the table, it will display all of the 'POSTS' that were created by that 'USER'. 

You have full freedom in how you accomplish the above objectives. You also have full freedom as far as design is concerned. Please do not spend more than 2 hours on this task. Once completed, please upload your code to a Github repo and send us the link via Indeed chat. You must also include a link to a live (hosted) version of your app so we can interact with it and make sure it works. Please don't send us a GitHub repo without also sending a link to the live version.
*/

const API = "https://jsonplaceholder.typicode.com";
const PATH_USERS = "/users";

async function getData(path) {
  return await fetch(API + path)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
      return "error path " + path;
    });
}
document.getElementsByTagName("button")[0].onclick = async function () {
  let users = await getData(PATH_USERS);
  localStorage.setItem("users", JSON.stringify(users));
  //---------------------------

  fetch(API + "/users")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));

  //---------------------
  // fetch(API + "/users");
  //     .then((response) => {
  //       console.log(response.json());
  //       console.log(response.json());
  //       users = response.json();
  //       console.log("users = ", users);
  //     })
  //     .catch((err) => console.log(err));
  //   console.log("users = ", users);
};
