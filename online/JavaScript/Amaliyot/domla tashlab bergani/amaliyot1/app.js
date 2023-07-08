// tow sum => f-ya 2ta argument qabul qiladi 1-si sonlardan tashkil topgan array
// 2-si number yig'indisi target elementga teng bo'lgan sonlarni indexlarini
// arrayda qaytarsin!

// twosum([1, 2, 3, 4], 6); // [1, 3]

// twosum([12, 3, 1, 7, 6], 13); // [0, 2]

// function masala(arr) {
//   let newArr = [1,2,3];
//   for (let i = 0; i < arr.length; i++) {
//     if (newArr.includes(arr[i])) {
//       return arr[i];
//     }
//     newArr.push(arr[i]);
//   }
//   return -1;
// }
// console.log(masala([1, 2, 3, 2, 4, 1, 5]));

// f-ya array qabul qiladi va eng katta 2ta sonni ko'pyatmasini qaytarsin

// masala2([1,23,7,3,42])

//

function masala2(arr) {
  let max1 = Math.max(...arr);
  arr.splice(arr.indexOf(max1),1);
  return Math.max(...arr) * max1;
}

// console.log(masala2([12,2,3,4]));

console.log(...[1,2,33,4]);

// 


