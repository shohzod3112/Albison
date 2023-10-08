let s = 0;

function myfunk(str){
    for(const i in str) {
        if(str[i] >= 0)
            s += +str[i];
    }
    return s;
}

console.log(myfunk("1qwe2e5t5t47"));