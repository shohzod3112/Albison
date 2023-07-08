// // 1 - masala

let myarr = ['dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba', 'yakshanba'];
let newarr = [];
let index;

function myfunk(char){
    for(let i in char){
        index = myarr.indexOf(char[i]);
        newarr = myarr.splice(index, 1);
    }
    return myarr; 
}

console.log(myfunk(['seshanba', 'juma', 'shanba']));


// // 2 - masala

// let newarr = '';
// let firstindex = '';
// let lastindex = '';
// let mybool = true;
// function myfunk(char){
//     for(let i of char){
//         newarr = i;
//         firstindex += newarr[0];
//         lastindex += newarr[newarr.length - 1];
//     }
//     firstindex = firstindex.substring(1, firstindex.length);
//     lastindex = lastindex.substring(0, lastindex.length - 1); 

//     console.log(firstindex);
//     console.log(lastindex);
//     for(let i in char){
//     if(firstindex[i] != lastindex[i])
//         mybool = false; 
//     }
//     return mybool;
// }

// console.log(myfunk(['this', 'solution', 'nega', 'alm', 'malumot', 'abib']));


// 3-masala

// let s = '';
// let k = 0;
// function mystr(str1, str2) {
//   k = str1.length;
//   // console.log(k);
//   s = str1.slice(k - 2, k);
//   console.log(s);
//   if( s === str2){
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// }

// mystr("Hello", "lo");

// 6-masala

// function mystrr(str) {
//   let s;
//   for (let i = str.length - 1; i >= 0; i--) {
//     // console.log(str[i]);
//     if(str[i] == ' '){
//       return str.length - i - 1;
//     }
//   }

// }  
// console.log(mystrr("MAqsadli BAjaruvchi"));

// 7-masala

// let number = [5, 7, 7, 8, 8, 8, 10];
// let target = 10;
// let s;
// let k = [-1, -1];

// function Myfunc(ary, son) {
//     s = ary.indexOf(son);
//     k[0] = s;
//     for (let i = ary.length; i >= 0; i--) {
//          // console.log(ary[i]);
//         if(ary[i] == son && s != i){
//         k[1] = i;
//         return k;
//         }
//     }
//     return k;
// }

// console.log(Myfunc(number, target));

// 8-masala

// function myStr(str) {
//     let newstr = [];
//     let newstr1 = [];
//     for(let i in str){
//         str = str.replaceAll('  ', ' ');
//     }
//     str = str.slice(1, str.length - 1);

//     for(let i of str){
//     // for(let i = str.length - 1; i >= 0; i--){
//         // let j = 0;
//         newstr += i;
//         // console.log(i);
//     }
//     console.log(newstr);

//     for(let k in newstr){
//         newstr1 = k;
//     }
//     console.log(newstr1);
// }
  
//   myStr("    the             sky   is blue ");