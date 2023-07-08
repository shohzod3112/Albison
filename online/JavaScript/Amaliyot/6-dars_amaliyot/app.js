
// let counter = 0;
// function myfunk(str){
//     for (const i in str) {
//         if(str[i] === 'i' || str[i] === 'a' || str[i] === 'e' || str[i] === 'u' || str[i] === '0')
//             counter++;
//     }
//     return counter;
// }

// console.log(myfunk("nimadurlar"));

let newu = '';
let counter = 0;

function myfunk(str, ){
    for(const i in str) {
        if(str[i] === 'i')
            counter++;
        if(counter > 0)
            str[i] == '*';
    }
    return str;
}

console.log(myfunk("nimadurlari", ));