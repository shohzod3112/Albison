"use strict";

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);
// const t = 9;
// t = 0;
// console.log(4);
// const pr = new Promise((res, rej)=>{

// })

// const API = "https://jsonplaceholder.typicode.com/todos";
// const API2 = "https://jsonplaceholder.typicode.com/photos";
// const box = document.querySelector(".box");
// GET, POST, PUT, PATCH, DELETE

// const todos = fetch(API)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     data.map((item, idx) => {
//       box.innerHTML += `<h3>${item.title + " " + idx}</h3>`;
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log(todos);

// const photos = fetch(API2)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     data.map((i) => {
//       box.innerHTML += `<img src=${i.url} alt=${i.title} />`;
//     });
//     // data.map((item, idx) => {
//     // });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const box = document.querySelector(".box");
const products = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.map((product) => {
      box.innerHTML += `<div class='cart' >
        <img src=${product.image} alt=${product.title} />
        <div class="head">
          <div class="title">
            ${product.title}</div>
          </div>
          <div class="price">
            $${product.price}
          </div>
          <div class="desc">${product.description}</div>
        </div>
      </div>`;
    });
  })
  .catch((err) => console.log(err));
