let counter = 0;

function myfunk(str, char){
    for(let i = 0; i <= str.length; i++){
        let s = '';
        s = str.substring(i, i + char.length)
        if(s == char){
            ++counter;
        }
    }
    return counter;
}

console.log(myfunk("lorem ipsum main dolor sit main amet bundaHamainBor", 'lo'));