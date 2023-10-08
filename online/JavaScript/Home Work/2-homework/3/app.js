
function uchburchak(a, b, c){
    if(a + b > c && a + c > b && b + c > a)
    {
        let p = a + b + c;
        return "Uchburchakning Perimetri = " + p;
    }
}

let t1 = +prompt("Uchburchakning 1-tomonini kiriting");
let t2 = +prompt("Uchburchakning 2-tomonini kiriting");
let t3 = +prompt("Uchburchakning 3-tomonini kiriting");


console.log(uchburchak(t1, t2, t3));
