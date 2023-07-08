let mybool = true;

function myfunk(str, char){
    for(let i = 0; i < str.length; i++){
        if(str.includes(char[i])){
            continue;
        }
        else
        mybool = false;
        console.log(str.includes(char[i]));
    }
    return mybool;
}

console.log(myfunk("12as", "21ds"));