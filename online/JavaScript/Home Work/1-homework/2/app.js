
function valyuta(sum){
    return "Bu " + sum / 11404 + " usd yoki " + sum / 140.7 + " rubl"
}

let  summa = +prompt("So'mni kiriting");

console.log(valyuta(summa));