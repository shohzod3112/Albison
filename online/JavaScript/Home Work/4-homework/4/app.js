let ism = prompt("Ismingizni kiriting");
let gender = prompt("Jinsingizni kiriting");
let age = +prompt("Yoshingizni kiriting");

function pensiya(ism, gender, age){
    if(gender == 'erkak' && age >= 65)
        return ism + " Siz pensiyaga chiqishingiz mumkin";
    else {
        if(gender == 'erkak' && age < 65)
        return ism + " Siz pensiyaga chiqishingizga " + (65 - age) + " yil bor";
        }

    if(gender == 'ayol' && age >= 60)
        return ism + " Siz pensiyaga chiqishingiz mumkin";
    else {
        if(gender == 'ayol' && age < 60)
            return ism + " Siz pensiyaga chiqishingizga " + (60 - age) + " yil bor";
        }
    }

console.log(pensiya(ism, gender, age));