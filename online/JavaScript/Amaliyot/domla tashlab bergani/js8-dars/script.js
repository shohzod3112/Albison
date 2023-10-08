console.log("hello world");

// string methods => primitive data

let myStr = "nimadir";

// console.log(myStr.length);

// ========== indexOf =============
// console.log(myStr.indexOf('m'));

// ========= lastIndexOf =============

// console.log(myStr.lastIndexOf('i'));

// ========= toUpperCase =============

console.log(myStr.toUpperCase());

// ========= toLowerCase =============

console.log(myStr.toLowerCase());

// ========

console.clear();

function myIndexOf(str, char) {
  for (const i in str) {
    if (str[i] === char) return i;
  }
  return -1;
}

// console.log(myIndexOf("nidfmadir", "n"));

// ============== replace =============

// console.log(myStr.replace('d', '*'));

function myReplace(str, char){
    return str.replaceAll(char, "*").replace("*", char).toUpperCase();
}

// console.log(myReplace("172asd374567","7"));

// ================ slice ==============

let myN = "0123y456".slice(4,5);


// console.log(myN);

// ============= substring ==============

// "0123y456".substring(7,5);

// ============ includes ================