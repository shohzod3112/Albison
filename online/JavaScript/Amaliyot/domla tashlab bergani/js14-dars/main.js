// Array

let arr = [1,2,3,4];

let arr2 = [1,[2,[31,[4]]]];

// console.log(arr2);

// spread

let arr3 = [8];

let arr4 = [...arr, ...arr3, ...arr2];

// console.log(arr4);

// console.log(Math.max(...arr));
// console.log(arr2.flat(Infinity));
// console.log(Math.max(...arr2.flat(5)));

// ===============array destructuring===============

const myArr = [1,2,3];

// const [a,b,c] = myArr;

// const a = myArr[0];
// const b = myArr[1];
// const c = myArr[2];

// console.log(a,b,c);

// ================||forEach||====================

arr.forEach((item)=>{
    console.log(item);
});

// ===============||map||=========================

console.clear();

// let newArr = arr.map();

// console.log(newArr);

Array.prototype.myMethod = function(callback){
    let mapArray = [];
    for(let i = 0; i < this.length; i++){
        let result = callback(this[i])
        mapArray.push(result);
    }
    return mapArray;
}


// let myMapArray = ['s', 'qwer', 'ert'];

// console.log(myMapArray.myMethod());
// console.log(myMapArray1.myMethod((item)=>{
//     return item + 2;
// }));

// ============|| filter ||================

// console.clear();

Array.prototype.myFilter = function(callback){
    let filteredArray = [];
   for(let i = 0; i < this.length; i++){
       if (callback(this[i])) {
        filteredArray.push(this[i])
       }
   }
   return filteredArray;
}

let forFilter = [1,2,3,4,5,6];

let myArr13 = forFilter.myFilter((item)=>{
    return item > 2;
})

let myArr12 = forFilter.filter((item)=>{
    return item > 2;
})

console.log('our method', myArr13);
console.log('Array method', myArr12);

// ============================= sort ===================

// console.clear();
let forSort = [7,21,32,8];


console.log(forSort.sort((a,b)=>{
    return b-a;
}));


// ============================ some, every ================

console.clear();

let forSome = [11,12,31];

let someArr = forSome.some((a)=>{
    return a > 10;
})
let everyArr = forSome.every((a)=>{
    return a > 10;
})

console.log(everyArr);


// ========================== reduce =========================

console.clear();

let forReduce = [1,2,3,4];

let resultReduce = forReduce.reduce((acc, num)=>{
    return acc * num;
});

console.log(resultReduce);



