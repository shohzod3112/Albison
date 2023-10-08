let mystr = '';

function myfunk(str){
    let newarr = [];
    for(let i in str){
        mystr = str[i];
        let j = 0;
        for (j in mystr) {
            newarr += mystr[j];
        }
        newarr += ' ';
        newarr += Number(j) + 1;
        newarr += ' ';
    }
    return newarr;
}

console.log(myfunk(["apple", "ban"]));
console.log(myfunk(["you", "will", "win"]));