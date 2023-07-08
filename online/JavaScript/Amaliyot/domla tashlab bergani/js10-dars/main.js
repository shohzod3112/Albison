"use strict"

console.log('hello world');

// object


let person = {
    false:"Zokirjon",
    21:22,
    gender:"male",
    address:{
        city:{

        }
    }
}

// string, symbol, number


console.log(person);

// ===============

console.clear();

let nimadir = {
    name:"Kimdir",
    age:12,
    sayHi:()=>{
        console.log("Hello");
    },
    address:{
        city:'Xiva'
    }
}

console.log(nimadir.sayHi());

console.log(nimadir['age']);


//=============== this ========

let person2 = {
    name:"John",
    age:23,
    hi:function(){
        console.log(`my name is ${person2.name} and I'm ${this.age} y.o`);
        console.log(person2);
    },
}

// ===============
console.clear();

let myObj = {
    name:"Zokir",
    age:12
}

let myObj2 = myObj;

myObj.name = "Zokirjon"

console.log(myObj);
console.log(myObj2);



// ===============

for(let i in person2){
    // console.log(person2[i]);
}

let people = {
    person1:300,
    person2:400,

}

// function sum(obj){
//     let summa = 0;
//     for(let i in obj){
//         console.log(obj[i]);
//         summa += obj[i];
//     }
//     return summa;
// }


// console.log(sum(people));
