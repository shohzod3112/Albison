
let a = Math.floor(Math.random() * 100 + 1);

let sanagich = 1;

document.getElementById("mybtn").onclick = function () {

    let b = document.getElementById("son").value;

    if (b == a) {
        document.getElementById('forseen').innerHTML = "Tabriklaymiz!!! Topdingiz Urunishlar soni: " + sanagich;
    }

    else if (b > a) {
        sanagich++;
        document.getElementById('forseen').innerHTML = "Kompyuter o'ylagan son kichik";
    }
    else {
        sanagich++;
        document.getElementById('forseen').innerHTML = "Kompyuter o'ylagan son katta";
    }
}
