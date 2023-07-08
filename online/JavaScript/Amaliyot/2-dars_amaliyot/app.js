// *************** let var const farqi nima **********************

// var, let, const ham hoistingga uchraydi. 
// Faqatgina let va constga tepada ishlatish uchun ruxsat berilmagan.

// console.log(ism);
// var ism = "Shoh";

// hoisting - yaratilgan funksiyani hoistingga uchradi degani, xoxlagan joydan turib murojaat qilsa (chaqirsa)
// bema'lol ishlay oladi.

// *************************** confirm ***************************

// console.log ni confirm metodida true yoki falsa qiymat qaytadi

// console.log(confirm("odammisan?"));


// ************************* promt *************************

// promt inputli alert. inputdan kelgan qiymatni o'zgaruvchini qiymatiga tenglashimiz mumkin.

// let age = prompt("enter your age?");
// console.log(age);

// console.clear();
// 

// let name = prompt("enter your name:");
// let surname = prompt("enter your surname:");
// let age = prompt("enter your age:");

// console.log(name + surname + age + " yoshda");

// ***************** typeof *****************************

// typeof ichidagi qiymat tipini ko'rsatadi.

// console.log(typeof('12'));



// ****************** type convertion *********************

// o'zimiz xoxlab turib o'zgaruvchi tipini o'zgartirishimiz

// let mynum = 123;

// **************** number to string ********************

// let mystr = String(mynum);
// let mystr = '123';

// console.log(mystr);

// ******************** boolean to string ******************

// let str = "nimadir";

// let mybool = String(true);

// **************** string to number **************

// let str = '123';

// let mynum = Number(str);

// let mynum = +str;

// BigInt to number

// let mybigint = 12n;
// let int =Number(mybigint);
// console.log(int);


// ******************** Boolean to number ******************

// let mybool = Number(true)
// let mybool = +false;

// console.log(mybool);

// string to boolean

// let mystr2 = "luboy";

// let myboolean = Boolean(mystr2);

// let myboolean = Boolean(null);

// let myboolean = Boolean(undefined);

// let myboolean = !!10n;

// console.log(myboolean);




// falsy values 

// 0, "", null, undefined, 0n, false, NaN





// *********************** type coertion *********************

// avtomatik ravishda o'zgaruvchi tipi o'zgarishi

// number to string

// let mystr = mynum + '';

// string to number

// -, *, / larda string dan numberga o'tiladi.

// console.log(12 / '2');
// console.log(12 * '2');
// console.log(12 - '2');

// **************** boolean to number ********************

// console.log(true + 12);
// console.log((true + true) * 12);
// console.log((true + false) * 12);


// console.log(63 % 12);




// ============================================== || Comparisions || =================================================

// console.clear();

// console.log(12  > 4);

// 1 ta tenglik -> qiymatni yuklash
// 2 ta tenglik -> tekshirib ko'radi
// 3 ta tenglik -> tipini ham tekshirib ko'radi 


// let mysrt = '' + 123;

// function nom(ism, age)
// {
//     console.log("Sizning ismingiz: ", ism + " Yoshingiz "  + age); 
// }

// let ism = prompt("ismingiz: ");
// let age = prompt("yoshingiz: ");

// nom(ism, age);

let a = 12;


// console.log(c);
let c = 3;

var b;
console.log(b);
// console.log(a == '12');
// console.log(a !== '12');

// ==, ===, > < <= >=

// == -> qiymatni solishtiradi

// === -> 1-typini tekshiradi. 

// > < >= <= -> numberga o'giradi. 