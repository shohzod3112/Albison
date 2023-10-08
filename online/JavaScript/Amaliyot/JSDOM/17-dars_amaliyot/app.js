// const API = "https://jsonplaceholder.typicode.com/users";
// const API2 = "https://fakestoreapi.com/products";
// const box = document.querySelector(".box");
// const forimg = document.querySelector(".forimg");


// //GET, POST, PUT, PATCH, DELETE

// const todos = fetch(API2)

// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     data.map((item, idx) => {
//         box.innerHTML += `<div>
//             <h1>${item.id + " " + idx}</h1>  
//             <h1>${item.title + " " + idx}</h1>
//             <h1>${item.price + " " + idx}</h1>
//             <p>${item.description + " " + idx}</p>
//             <p>${item.category + " " + idx}</p>
//             <p><img src=${item.image + " " + idx}/>></p>
//         </div>`;
//     });
// })
// .catch((error) => {
//     console.log(error);
// });
// console.log(todos);








// Rasmlarni fetch qilib backendda olish

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
