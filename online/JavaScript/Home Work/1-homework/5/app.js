
function juft(a){
    if(a % 2 === 0)
        return a + " juft son";
    else
        return a + " toq son";
}

let son1 = +prompt();
console.log(juft(son1));