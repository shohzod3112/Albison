
document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');

    //console.log(event);
    // Show modal
    modal.classList.add('show');

    // After 5 seconds, return modal to top
    setTimeout(() => {
        modal.classList.remove('show');
    }, 5000);
});
