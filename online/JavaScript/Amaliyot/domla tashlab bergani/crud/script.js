"use strict";

// CRUD - create, read, update, delete
const API = "https://crudcrud.com/api/b72ecb0a96e24a76b0ef1602d79d03c9";
const container = document.querySelector(".container");
const getBtn = document.querySelector("#get");
const postBtn = document.querySelector("#post");
const patchBtn = document.querySelector("#patch");
const deleteBtn = document.querySelector("#delete");
const form = document.querySelector(".form");

const deleteUser = (userId) => {
  console.log("delete click");
  fetch(API + userId, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((user) => console.log(user))
    .catch((err) => console.log(err));
};

// getBtn.addEventListener("click", () => {
// fetch(API)
//   .then((res) => res.json())
//   .then((users) =>
//     users.map((user) => {
//       container.innerHTML += `
//           <div class="card">
//             <div><span>name:</span>${user.name}</div>
//             <div><span>username:</span>${user.username}</div>
//             <div><span>email:</span>${user.email}</div>
//             <button onClick="deleteUser('${user._id}')">delete</button>
//           </div>
//       `;
//     })
//   );
// });

// POST - data qo'shish

// postBtn.addEventListener("click", () => {
//   fetch(API, {
//     method: "POST",
//     body: JSON.stringify({
//       name: "John Doe",
//       username: "John",
//       email: "example@gmail.com",
//     }),
//     headers: { "Content-type": "application/json" },
//   })
//     .then((res) => res.json())
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err));
// });
// postBtn.addEventListener("click", () => {
//   fetch(API + "products", {
//     method: "POST",
//     body: JSON.stringify({
//       name: "Nokia 108",
//       year: "2008",
//       category: 'electronics'
//     }),
//     headers: { "Content-type": "application/json" },
//   })
//     .then((res) => res.json())
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err));
// });

// form

const postData = (data) => {
  fetch(API + "/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((user) => console.log(user))
    .catch((err) => console.log(err));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const userData = {
    name: fd.get("name"),
    username: fd.get("username"),
    email: fd.get("email"),
  };
  postData(userData);
});

// EDIT - patch or put

// patchBtn.addEventListener("click", () => {
//   fetch(API + "64cbdc50de209703e80b1cc7", {
//     method: "PUT", // PATCH
//     body: JSON.stringify({
//       name: "KImdir Doe",
//       username: "Jane",
//       email: "example@gmail.com",
//     }),
//     headers: { "Content-type": "application/json" },
//   })
//     .then((res) => res.json())
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err));
// });

// DELETE - delete
// deleteBtn.addEventListener("click", () => {
//   fetch(API + "64cbdc50de209703e80b1cc7", {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err));
// });
