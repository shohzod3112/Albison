
function typecon(val1, val2, val3){
    if(typeof(val1) == typeof(val2) && typeof(val1) === typeof(val3) && typeof(val2) === typeof(val3))
        return "true";
    else
        return "false";
}

console.log(typecon(1, 2, '3'));
console.log(typecon(false, true, false));