// alert("hello world!");


let map = new Map(); // map ni yaratish

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(false, 'bool1'); // a boolean key

// Map objectdan farqli o'laroq 'number' turidagi 'key'ni turini 'string' o'girmaydi
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'
console.log( map.has(true) ); // false

console.log( map.size ); // mapning uzunligi(3)