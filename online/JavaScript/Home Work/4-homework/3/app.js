let counter = 0;
let newstr = '';
let a = false;

function myfunk(str){
    for(const i in str) {
        ++counter;
    }
    for(let i = counter - 1; i >= 0; i--){
        newstr += str[i];
    }
    for(let i = counter - 1; i >= 0; i--){
        let k = 0;
        if(str[k] === newstr[i]){
            a = true;
        }
        else {
            a = false;
        }
        k++;
    }
    return a;
}

console.log(myfunk("kiyik"));