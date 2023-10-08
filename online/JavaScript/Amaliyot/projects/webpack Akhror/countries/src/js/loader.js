const loaderEl = document.querySelector('.loader');

export const loaderToggler = (info) => {
    if(info){
        loaderEl.classList.remove('hidden');
    } else {
        loaderEl.classList.add('hidden');
    }
}