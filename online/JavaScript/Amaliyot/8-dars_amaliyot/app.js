// =================== String methods =====================
// ================= indexOf ==================
// String ichidan qidirilayotgan itemni 1-topganini indexsini qaytaradi.

// let myStr = "nimadir";

// console.log(myStr.indexOf('m'));  // 2
// console.log(myStr.indexOf('i', 3));  // 5 (3-chi "i" qidirilyapti. 3-chi "i" bo'lmagani uchun 2-chi "i" ni indeksini qaytaradi.)

// ================= lastIndexOf -> indexOf ni teskarisi ==================
// String ichidan qidirilayotgan itemni oxiridan qidiradi, 1-topganini indexsini qaytaradi.

// let myStr1 = "nimadir";

// console.log(myStr.lastIndexOf('i'));  // 5
// console.log(myStr.lastIndexOf('i', 3));  // 1 (3-chi "i" qidirilyapti. 3-chi "i" bo'lmagani uchun 2-chi "i" ni indeksini qaytaradi.)


// ================ toUppercase vs toLowerCase ====================

// console.log(myStr.toUpperCase());
// console.log(myStr.toLowerCase());



// function myIndexOf(str, char){
//     return str.indexOf(char);
// }

// console.log(myIndexOf("nimadir", "i"));
// console.log(myIndexOf("nimadir", "di"));

// function myIndexOf(str, char){
//     for(let i in str){
//         if(str[i] === char) return i;
//     }
//     return -1;
// }

// console.log(myIndexOf("nimadir", "i"));


// ================= replace() vs replaceAll() ========================
// stringdan qidirib topib almashtiradi

// function myReplace(str, char){
//     console.log(str);
//     console.log(str.replaceAll('2', char));
//     console.log(str.replace('1', char));
// }

// console.log(myReplace("17237452162722", 'i'));


// function myReplace(str, char){
//     return str.replaceAll(char, "*").replace("*", char).toUpperCase(); // Method chain
// }

// console.log(myReplace("1vjdshvj7237sbdsbi4722", '7'));

// ====================== slice() ===========================
// String ichidan qirqib olish uchun ishlatiladi. 
// splice(qayyerdan_boshlab_kesish_indeksi, qaysi_indeksgacha_kesish)
// 


// let myslice = "Bu splice metodi kabi ishlaydi";

// console.log(myslice);
// console.log(myslice.slice(3));
// console.log(myslice.slice(3, 9));
// console.log(myslice.slice(9, 3)); // ishlamaydi
// console.log(myslice.slice(3, -2)); // 3-indeksdan boshlab chiqaradi va -2 -> orqadan 2ta qirqadi javobi=>splice meto

// ======================== substring() ========================
// slice bilan deyarli bir xil ishlaydi. 
// o'ngdan chapga qarab ham yuradi.

// console.log(myslice);
// console.log(myslice.substring(3));
// console.log(myslice.substring(3, 9));
// console.log(myslice.substring(9, 3)); // ishlaydi
// console.log(myslice.substring(7, 1)); // javob->u spli
// console.log(myslice.substring(5)); //lice metodi
// console.log(myslice.substring(5, -7)); //Bu sp


// =================== includes() ======================
// String ichida bor yoqligini tekshiradi va true yoki false qaytaradi

// let myinclude = "my includes";

// console.log(myinclude.includes("y"));
// console.log(myinclude.includes("j"));

