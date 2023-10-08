let myarr = [1,4,2];
let middle = 0;
let sana = 0;

function myfunk(str){
    for(const i in str) {
        middle = middle + str[i];
        ++sana;
    }
    middle /= sana;
    return Math.trunc(middle);
    // console.log(middle);
}

console.log(myfunk(myarr));