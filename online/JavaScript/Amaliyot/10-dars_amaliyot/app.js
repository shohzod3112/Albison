let people = {
    person1: 300,
    person2: 400,
}

function sum(obj){
    let summa = 0;
    for (let i in obj){
        summa += obj[i];
        console.log(obj[i]);
    }
    return summa;
}

console.log(sum(people));

// arrow functionda this ishlamaydi.