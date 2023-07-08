
function turtburchak(a, b, c, d){
    if(a === c && b == d)
    {
        let s = a * b;
        return "To'g'ri to'rtburchakning yuzasi = " + s;
    }
}

let t1 = +prompt("To'g'ri to'rtburchakning 1-tomonini kiriting");
let t2 = +prompt("To'g'ri to'rtburchakning 2-tomonini kiriting");
let t3 = +prompt("To'g'ri to'rtburchakning 3-tomonini kiriting");
let t4 = +prompt("To'g'ri to'rtburchakning 4-tomonini kiriting");

console.log(turtburchak(t1, t2, t3, t4));