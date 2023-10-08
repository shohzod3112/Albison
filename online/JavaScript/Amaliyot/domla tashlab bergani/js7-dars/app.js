// console.log("hi");

// string

function myFunction(str, char){
    let newStr = '';
    let myBool = true;
    for (const i in str) {
        if( myBool  && str[i] === char){
            newStr += str[i];
            myBool = false;
        }
        else if(str[i] === char) {
            newStr += '*';
        }else{
            newStr += str[i];
        }
    }
    return newStr;
}


console.log(myFunction('nimadirlarillsdfghll', 'l'));



// n => 0
// i => 1
// ...