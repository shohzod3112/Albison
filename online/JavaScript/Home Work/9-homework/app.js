// https://islomapi.uz   shu apidan foydalangan holda namoz vaqtlarini ko'rsatuvchi sayt qilishilar kerak

let viloyatNomi = document.querySelector('#reg');

fetch(`https://islomapi.uz/api/present/day?region=${viloyatNomi.value}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        document.querySelector('.namozTime1').innerHTML = data.times.tong_saharlik
        document.querySelector('.namozTime2').innerHTML = data.times.quyosh
        document.querySelector('.namozTime3').innerHTML = data.times.peshin
        document.querySelector('.namozTime4').innerHTML = data.times.asr
        document.querySelector('.namozTime5').innerHTML = data.times.shom_iftor
        document.querySelector('.namozTime6').innerHTML = data.times.hufton
    })
viloyatNomi.addEventListener('change', ()=>{
    fetch(`https://islomapi.uz/api/present/day?region=${viloyatNomi.value}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        document.querySelector('.namozTime1').innerHTML = data.times.tong_saharlik
        document.querySelector('.namozTime2').innerHTML = data.times.quyosh
        document.querySelector('.namozTime3').innerHTML = data.times.peshin
        document.querySelector('.namozTime4').innerHTML = data.times.asr
        document.querySelector('.namozTime5').innerHTML = data.times.shom_iftor
        document.querySelector('.namozTime6').innerHTML = data.times.hufton
    })
})
