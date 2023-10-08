// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');
// const nevara = document.querySelector('.nevara');

const btn = document.getElementById('btn');
// const box = document.querySelector('.box');
const inputEl = document.querySelector('input');
const heading = document.querySelector('h1');
const mySelect = document.getElementById('mySelect');

// parent.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log('parent clicked!');
// })

// child.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log('child clicked!');
// })

// nevara.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log('nevara clicked!');
// })

// parent.addEventListener('mouseleave', ()=>{
//     console.log('mouseleave parent');
// })

// parent.addEventListener('mouseout', ()=>{
//     console.log('mouseout parent');
// })



// btn.addEventListener('dblclick', ()=>{
//     box.classList.toggle('red');
// })

// box.addEventListener('mouseenter', ()=>{
//     console.log('mouse enter');
// })
// box.addEventListener('mouseout', (e)=>{
//     console.log('mouse out', e);
// })
// box.addEventListener('mouseleave', ()=>{
//     console.log('mouse leave');
// })

// keyword events
// document.addEventListener('keyup', (zokir)=>{
//     console.log(`keyup: ${zokir.key}`);
// })
// document.addEventListener('keydown', (e)=>{
//     console.log(`keydown: ${e.key}`);
// })
// document.addEventListener('keypress', (e)=>{
//     console.log(`keypress: ${e.key}`);
// })

// form events
inputEl.addEventListener('input', (e)=>{
    console.log(e);
    heading.innerHTML = e.target.value;
})

mySelect.addEventListener('change', (e)=>{
    console.log(e.target.value);
})

document.getElementById('submitBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('form submitted');
})



// mouse event, keyword events, form event



// event bubbling and event capturing