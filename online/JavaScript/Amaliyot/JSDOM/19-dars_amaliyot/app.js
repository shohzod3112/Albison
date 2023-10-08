"use strict";

//CRUD - create, read, update, delete
const API = 'https://crudcrud.com/api/d7d3b07dcb5a4fb8bfc9adce5dd4fac1/user';
// const API = 'https://jsonplaceholder.typicode.com/todos';
const container = document.querySelector('.container');
const getBtn = document.querySelector('#get');
const postBtn = document.querySelector('#post');
const patchBtn = document.querySelector('#patch');

// getBtn.addEventListener('click', ()=>{
//     fetch(API).then((res) => res.json()).then((users) => users.map((user) => {
//         container.innerHTML += `
//             <div class="card">
//                 <div><span>id:</span>${user.id}</div>
//                 <div><span>title:</span>${user.title}</div>
//                 <div><span>completed:</span>${user.completed}</div>
//             </div>
//         `;
//     })
//     );
// });





// formadan data olish

// const form = document.querySelector('form');

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const fd = new FormData(e.currentTarget);
//     console.log({
//         name: fd.get('name'),
//         username: fd.get('username'),
//         email: fd.get('email'),
//     });
// })






// Post - data qo'shish

// postBtn.addEventListener('click', ()=>{
//     fetch(API,{
//         method: 'POST',
//         body: JSON.stringify({
//             name: 'Kimdir',
//             username: 'Shoh',
//             email: 'sbfi@gmail.com',
//         }),
//         headers: {"Content-type": 'application/json'},
//     }).then(res => res.json()).json(user => console.log(user)).catch((err) => console.log(err));
// });



// 

const form = document.querySelector('form');

const postData = (data) => {
    fetch(API,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-type": 'application/json'},
    }).then(res => res.json()).json(user => console.log(user)).catch((err) => console.log(err));
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const userData = {
        name: fd.get('name'),
        username: fd.get('username'),
        email: fd.get('email'),
    };
    postData(userData);
})

