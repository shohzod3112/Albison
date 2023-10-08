// 2ta o'zingizni metodingizni yozasiz some va  every bilan bir xil ishlashi kerak.








// f-ya array qabul qiladi hamma itemlarini oldiga indexlarini qo'yib yangi array qaytarishi kerak. mapdan foydalaning.
// input:['a','f'];
// output:['1a','2f']

arr = ['a','f'];

let newArr = arr.map((item,i)=>{
    return item + i;
});

console.log(newArr);