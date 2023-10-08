let admin = "Admin";

console.log(myFunction(23, 23));
// console.log(myFunction2(23,23));

// function declaration
function myFunction(arg1 = 12, arg2 = 23) {
  return arg1 * arg2;
}

let nimadir3 = myFunction(1, 2); // 2

let nimadir4 = myFunction(2, 3); // 6

// console.log(nimadir);

let nimadir = "1234567";

console.log(nimadir);

// funtion expression
let myFunction2 = function (arg1, arg2) {
  // ...
  return arg1 - arg2;
};

// arrow function
let myArrow = (arg1, arg2) => {
  // ...
  return arg1 - arg2;
};

let myArrow2 = (a) => a * a;

let myExpres = function (a) {
  return a * a;
};

console.log(myArrow2(3)); // 9
console.log(myExpres(3)); // 9

// var hoisting

// let bn const hoistingga

// Conditional  operator

// if, else, else if

console.clear();
// if(12 < 3){
//     console.log("if ishladi");
// }
// else{
//     console.log("else ishladi");
// }

function pasportYoshi(age) {
  if (age >= 16) {
    console.log("siz pasport olishingiz mumkin!");
  } else {
    console.log("siz hali yoshsiz!");
  }
}

// pasportYoshi(13);

// o'tish bali 130ball

function dtm(name, ball) {
  const kantrakt = 130;
  const grand = 180;
  const superKantrakt = 12;

  if (ball >= grand) {
    return "siz grandga kirdingiz";
  }
  if (ball >= kantrakt) {
    return `${name} siz o'qishga kirdingiz ! battar bo'l`;
  } else {
    return `${name} tabriklaymiz o'qishga kirmadizgiz!!! lekin ${
      12 * superKantrakt
    }mln to'lab o'qishingiz mumkin`;
  }
}

console.log(dtm("Zokir", 50) ); // Zokir siz o'qishga kirdingiz!!!

// const kantrakt = 130;
// const grand = 180;
// const superKantrakt = 12;
