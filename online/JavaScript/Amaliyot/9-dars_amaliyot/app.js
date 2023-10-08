// // Math

// // floor  4.6 => 4
// console.log("floor metodi");
// console.log(Math.floor(4));
// console.log(Math.floor(4.0));
// console.log(Math.floor(4.1));
// console.log(Math.floor(4.5));
// console.log(Math.floor(4.6));
// console.log(Math.floor(4.9));

// // ceil  4.1 => 5

// console.log("ceil metodi");
// console.log(Math.ceil(4));
// console.log(Math.ceil(4.0));
// console.log(Math.ceil(4.1));
// console.log(Math.ceil(4.5));
// console.log(Math.ceil(4.6));
// console.log(Math.ceil(4.9));

// // trunc 4.1 => 4

// console.log("trunc metodi");
// console.log(Math.trunc(4));
// console.log(Math.trunc(4.0));
// console.log(Math.trunc(4.1));
// console.log(Math.trunc(4.5));
// console.log(Math.trunc(4.6));
// console.log(Math.trunc(4.9));

// // round 4.4 => 4

// console.log("round metodi");
// console.log(Math.round(4));
// console.log(Math.round(4.0));
// console.log(Math.round(4.1));
// console.log(Math.round(4.5));
// console.log(Math.round(4.6));
// console.log(Math.round(4.9));

// // toFixed(2) => 6.3333 
// // toFixed() converts a number to a string, rounded to a specified number of decimals:

// console.log("toFixed metodi");
// let num = 5.56789;
// let n = num.toFixed();
// console.log(n); // 6

// n = num.toFixed(2);
// console.log(n); // 5.57

// n = num.toFixed(10);
// console.log(n); // 5.5678900000

// // random
// // Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
// console.log("random metodi");
// console.log(Math.random() * 10);
// console.log(Math.random(4));
// console.log(Math.random(4.1));


// =============== Array methods =======================

let myarr = [12, 3, 4, 5];

myarr[4] = 'bbdfb';
myarr[5] = "olma";

// console.log(myarr);

// ========================= pop ========================
// oxiridan bitta qiymat kesadi va kesgan qiymatini qaytaradi.

// let newarr = myarr.pop();

// console.log(myarr);
// console.log(newarr);

// ========================= push ========================
// oxiriga bitta qiymat qo'shadi va length ni qaytaradi

// let newarr = myarr.push();

// console.log(myarr);
// console.log(newarr);

// newarr = myarr.push(23);

// console.log(myarr);
// console.log(newarr);

// newarr = myarr.push(54, "dgjd", 'djkfb', 4387);

// console.log(myarr);
// console.log(newarr);

// ========================= unshift ========================
// Boshiga qiymat qo'shadi va length ni qaytaradi

// console.log(myarr);

// newarr = myarr.unshift(236);

// console.log(newarr);
// console.log(myarr);


// ========================= shift ========================
// Boshidan kesadi va kesgan qiymatini qaytaradi

// console.log(myarr);

// newarr = myarr.shift(236);

// console.log(newarr);
// console.log(myarr);


// ========================= splice ========================
// 3ta argument qabula qiladi. 
// arr.splice(qayyerdan_boshlash, nechta_kesish_kerak, o'rniga_nimalar_qo'shish_kerak)

// console.log(myarr);

// myarr.splice(1, 2);

// console.log(myarr);

// myarr.splice(0, 2, "shu", "itemlarni", "qo'sh", 34, 76)

// console.log(myarr);

// ========================= slice ========================
// slice(qayyerdan_boshlash, nechta_element_copy_qilish_kerak).
// slice array itemlarini o'zgartirmaydi faqat copy qiladi.

// console.log(myarr);

// console.log(myarr.slice(0, 4));

// console.log(myarr);

// ========================= concat ========================
// bir nechta arraylarni yangi arrayga yig'ib beradi.

// console.log(myarr);

// let mycon = myarr.concat([34,35]);

// console.log(mycon);

// mycon = mycon.concat([6, 5], [21, 22]);

// console.log(mycon);

// mycon = myarr.concat(mycon);

// console.log(mycon);