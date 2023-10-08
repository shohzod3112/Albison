
setInterval(()=>{
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;

    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();  
    let s = d.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById('soat').innerHTML = h;
    document.getElementById('minut').innerHTML = m;
    document.getElementById('sekund').innerHTML = s;    
}, 1000);