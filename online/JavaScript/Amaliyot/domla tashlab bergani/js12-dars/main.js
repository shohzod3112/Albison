// querySelector, querySelectorAll, getElementById;

// const heading = document.querySelector('h1');
// const box = document.querySelector('.box');
// const InputEl = document.querySelector('input[type]');

// const btn = document.getElementById('btn');

// btn.addEventListener('click', ()=>{
    // heading.textContent += 'hello world';
    // heading.style.background = 'red';
    // heading.style.color = 'blue';
    // heading.classList.toggle('blue');
    // console.log('btn clicked!');
// })


// heading.textContent += ' hello world';

// let myAge = 23;

// box.innerHTML = `<p>I'm ${myAge} years old</p>`;



// console.log(InputEl.getAttribute('name'));




// box.style.backgroundColor = 'red';
// box.style.padding = '50px';

// box.classList.remove('box');

// box.classList.add('green');



// console.log(heading.textContent);



// const myHeading2 = document.createElement('h2');

// myHeading2.textContent = 'heading 2'

// document.body.appendChild(myHeading2);


createElement('aylana', 'green'); // tortburchak, aylana


function createElement(shakl, rang){
    const newShakl = document.createElement('div');
    newShakl.style.width = '200px';
    newShakl.style.height = '200px';
    newShakl.style.background = rang;
    if(shakl === 'aylana'){
        newShakl.style.borderRadius = '50%';
    }
    document.body.appendChild(newShakl)
}