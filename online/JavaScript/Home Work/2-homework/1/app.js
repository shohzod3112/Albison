
function fasl(num1){
    switch (num1) {
        case 1:
        case 2:
        case 12:
            console.log("Qish");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Bahor");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Yoz");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Kuz");
            break;
        default:
            console.log("fasl topilmadi");
            break;
    }
}

let oy = +prompt("Oy raqamini kiriting");

console.log(fasl(oy));