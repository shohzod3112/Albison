let counter = 0;

function myfunk(str, harf){
    for(const i in str) {
        if(str[i] === harf)
            ++counter;
    }
    return counter;
}

console.log(myfunk("nimadurlari", 'm'));