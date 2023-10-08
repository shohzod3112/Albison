"use strict"

// object

// 1. Akhrorwebni object darsidan

const user = {
    name: 'Shoh',
    age:  '31',
    email: 'itsmygml6@gmail.com',
    address: "Tashkent",
    langs: ['uzbek', 'rus', 'ingliz'],
    login: function () {
        console.log("Siz login qildingiz");
    },
    logout: function () {
        console.log("Siz logout qildingiz");
    },
    speak: function () {
        // console.log(this.langs);
        console.log("I can speak:");
        this.langs.forEach((data) => {
            console.log(data);
        })
    },
    movies: [
        {name: 'Avatar', likes: 456},
        {name: 'Harry Potter', likes: 484},
        {name: 'Titanic', likes: 987},
        {name: 'Sitve Jobs', likes: 156},
        {name: 'Sherlock', likes: 574},
    ],
    moviesWatch: function () {
        this.movies.forEach((movie) => {
        const result = `Kino nomi: ${movie.name}, Likes: ${movie.likes}`;
        console.log(result);
        }) 
    }
}

// console.log(user);
// console.log(user.address);
// console.log(user.email);
// console.log(user.age);
// console.log(user.login());
// user.login();
// user.logout();
// user.speak();


// objectlarda array

// const movies =[
//     {name: 'Avatar', likes: 456},
//     {name: 'Harry Potter', likes: 484},
//     {name: 'Titanic', likes: 987},
//     {name: 'Sitve Jobs', likes: 156},
//     {name: 'Sherlock', likes: 574},
// ]

// movies.forEach((movie) => {
//     // console.log(movie);
//     const result = `Kino nomi: ${movie.name}, Likes: ${movie.likes}`;
//     console.log(result);
// })








user.moviesWatch();












// let person = {
//     false:"Zokirjon",
//     21:22,
//     gender:"male",
//     address:{
//         city:{

//         }
//     }
// }

// string, symbol, number


// console.log(person);

// ===============

// console.clear();

// let nimadir = {
//     name:"Kimdir",
//     age:12,
//     sayHi:()=>{
//         console.log("Hello");
//     },
//     address:{
//         city:'Xiva'
//     }
// }

// console.log(nimadir.sayHi());

// console.log(nimadir['age']);


//=============== this ========

// let person2 = {
//     name:"John",
//     age:23,
//     hi:function(){
//         console.log(`my name is ${person2.name} and I'm ${this.age} y.o`);
//         console.log(person2);
//     },
// }

// ===============
// console.clear();

// let myObj = {
//     name:"Zokir",
//     age:12
// }

// let myObj2 = myObj;

// myObj.name = "Zokirjon"

// console.log(myObj);
// console.log(myObj2);



// ===============

// for(let i in person2){
//     // console.log(person2[i]);
// }

// let people = {
//     person1:300,
//     person2:400,

// }

// function sum(obj){
//     let summa = 0;
//     for(let i in obj){
//         console.log(obj[i]);
//         summa += obj[i];
//     }
//     return summa;
// }


// console.log(sum(people));
