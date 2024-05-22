let elWrapper = document.querySelector(".Tab_wrapper__1rL46")
let selectedEl = document.querySelectorAll(".Tab_item__33Cjq");
let isDragging = false;
//console.log(elWrapper.getBoundingClientRect());

const dragging = (e) => {
    if(!isDragging) return;
    console.log("dragging...");
    elWrapper.classList.add("dragging");
    elWrapper.scrollLeft -= e.movementX;
}

const dragStop = () => {
    isDragging = false;
    elWrapper.classList.remove("dragging");
}

selectedEl.forEach(icon => {
    icon.addEventListener("click", () => {
        selectedEl.forEach(item => {
            if(item.classList.contains("Tab_item--active__2yRfm")) {
                item.classList.remove("Tab_item--active__2yRfm");
                icon.classList.add("Tab_item--active__2yRfm");
            }
            else
                icon.classList.add("Tab_item--active__2yRfm");
        })
        scrollValue = (elWrapper.scrollWidth * 40) / 100;
        console.log(scrollValue);
        console.log(icon.getBoundingClientRect().x);
        if(icon.getBoundingClientRect().x > scrollValue){
            elWrapper.scrollLeft += 350;
        }
        else {
            elWrapper.scrollLeft -= 350;
        }
    });
});


elWrapper.addEventListener("mousemove", dragging);
elWrapper.addEventListener("mousedown", () => isDragging = true);
document.addEventListener("mouseup", dragStop);
