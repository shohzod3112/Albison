
function armiya(name, age){
    if(age >= 27){
        return "Kechirasiz " + name + " siz armiya yoshidan o'tib ketgansiz bora olmaysiz!"
    }
    if(age >= 18){
        return "Hurmatli " + name + " siz armiyaga borishingiz mumkin go bro"
    }
    else {
        return "Hurmatli " + name + " siz hali yoshsiz!"
    }
}

let ism = prompt("Ismingiz");
let yosh = prompt("Yoshingiz");

console.log(armiya(ism, yosh));