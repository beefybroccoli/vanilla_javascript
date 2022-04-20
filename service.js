/*
Using jQuery or vanilla JS you will display each 'USER' in a table. When the user selects a 'USER' in the table, it will display all of the 'POSTS' that were created by that 'USER'. 

You have full freedom in how you accomplish the above objectives. You also have full freedom as far as design is concerned. Please do not spend more than 2 hours on this task. Once completed, please upload your code to a Github repo and send us the link via Indeed chat. You must also include a link to a live (hosted) version of your app so we can interact with it and make sure it works. Please don't send us a GitHub repo without also sending a link to the live version.
*/

const API = "https://jsonplaceholder.typicode.com";
const PATH_USERS = "/users";
const PATH_POSTS = "/posts";

async function getData(path) {
  return await fetch(API + path)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
      return "error";
    });
}

async function getDataFromAPI() {
  let users = await getData(PATH_USERS);
  localStorage.setItem("users", JSON.stringify(users));

  let posts = await getData(PATH_POSTS);
  localStorage.setItem("posts", JSON.stringify(posts));

  addUsersToTable();
  //   addPostsToTableByUserId(2);
  //   addPostsToTable();
}

function addUsersToTable() {
  let users = JSON.parse(localStorage.getItem("users"));
  let tBodyRef = document
    .getElementById("tableUsers")
    .getElementsByTagName("tbody")[0];

  for (let user of users) {
    let newRow = tBodyRef.insertRow();
    const keys = ["id", "name", "username", "phone", "website", "email"];
    for (let key in user) {
      if (keys.includes(key)) {
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(user[key]);
        newCell.appendChild(newText);
        // console.log(key);
      }
    }
    // console.log("user = ", user);
  }
}

function addPostsToTableByUserId(user_id) {
  let posts = JSON.parse(localStorage.getItem("posts"));
  let tBodyRef = document
    .getElementById("tablePosts")
    .getElementsByTagName("tbody")[0];

  for (let post of posts) {
    if (post["userId"] === user_id) {
      let newRow = tBodyRef.insertRow();
      for (let key in post) {
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(post[key]);
        newCell.appendChild(newText);
        // console.log(key);
      }
    }
  }
}

function addPostsToTable() {
  let posts = JSON.parse(localStorage.getItem("posts"));
  let tBodyRef = document
    .getElementById("tablePosts")
    .getElementsByTagName("tbody")[0];

  for (let post of posts) {
    let newRow = tBodyRef.insertRow();
    for (let key in post) {
      let newCell = newRow.insertCell();
      let newText = document.createTextNode(post[key]);
      newCell.appendChild(newText);
      //   console.log(key);
    }
  }
}

window.onload = async function () {
  await getDataFromAPI();

  document.getElementById("getData").onclick = async function () {
    await getDataFromAPI();
  };

  //   const tableUsers = document.getElementById("tableUsers");
  //   tableUsers.addEventListener(
  //     "click",
  //     function () {
  //       console.log("tableUsers clicked");
  //     },
  //     false
  //   );

  //   document
  //     .getElementById("tableUsers")
  //     .getElementsByTagName("tbody")[0]
  //     .addEventListener(
  //       "click",
  //       function (event) {
  //         console.log("tbody clicked");
  //       },
  //       false
  //     );

  const users = document
    .getElementById("tableUsers")
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");

  for (let user of users) {
    user.addEventListener(
      "click",
      function (event) {
        console.log("tr clicked");
        console.log(event.document);
        console.log(event["path"]);
        console.log(event["path"][0]);
      },
      false
    );
  }
};

// tableUsers.onClick(() => {
//   console.log("tableUers clicked");
// });

// document
//   .getElementById("tableUsers")
//   .getElementsByTagName("tbody")[0]
//   .addEventListener("click", function () {
//     console.log("tableUsers clicked");
//   });
//   console.log("tableUsers clicked");
//   //   console.log("event = ", event);
// };

// document
//   .getElementById("tableUsers")
//   .getElementsByTagName("tbody")[0]
//   .getElementsByTagName("tr")
//   .forEach((item) => {
//     item.onclick = function () {
//       console.log("a user was clicked");
//     };
//   });
