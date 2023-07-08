let myarr = ['abs2d', 'qwer41s', 'we3'];
let middle = [];
let sana = 0;
let natija = [];

function myfunk(str){
    for(let i in str) {
        // +str[i];
        middle += str[i];
    }

    for(let i in middle){
        // +middle[i];
        if(middle[i] > 0)
        {
            natija += middle[i];
        }
    }
    // console.log(natija);
    return natija;
}

console.log(myfunk(myarr));