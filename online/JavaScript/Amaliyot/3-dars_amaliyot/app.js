// function declaration

function sum(a = 0, b = 0, c = 0){
    return a + b + c;
}

console.log(sum(1, 2, 3));

function logger(arg1){
    console.log("Sizning ismingiz = " + arg1);
}

let ism = prompt("Ismingiz: ");

// let ism = "Mohira";

logger(ism);

// function dtm(name, ball){
//     const kon = 130;
//     const grand = 180;
//     const superkon = 12;

//     if(ball >= 180){
//         return console.log(name + " siz o'qishga grand asosida kirdingiz!");
//     }

//     if(ball >= 130)
//         return console.log(name + " siz kontrakt sosida o'qishga kirdingiz!");
    
//     else 
//         return console.log(name + " siz qo'shimcha kontrakt sosida o'qishga kirdingiz! Agar o'qimoqchi bo'lsangiz " + ball * 5 + " mln to'lang");
// }

// dtm("shoh", 12);
















// let mysrt = '' + 123;

// function nom(ism, age)
// {
//     console.log("Sizning ismingiz: ", ism + " Yoshingiz "  + age); 
// }

// let ism = prompt("ismingiz: ");
// let age = prompt("yoshingiz: ");

// nom(ism, age);