
function minmax(a, b){
    if(a > b){
        return a;
    }
    else {
        return b;
    }
}

let son1 = +prompt("son1");
let son2 = +prompt("son2");

console.log(minmax(son1, son2));