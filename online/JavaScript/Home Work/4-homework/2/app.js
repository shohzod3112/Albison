let counter = 1;

function myfunk(str){
    for(const i in str) {
        if(str[i] === ' ')
            ++counter;
    }
    return counter;
}

console.log(myfunk("lorem dolor sit amet"));