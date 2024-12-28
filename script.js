document.addEventListener("DOMContentLoaded", (event) => {
    const div = document.getElementById("glavniDiv")
    const text = document.createElement("p")
    text.innerHTML = "Stranica učitana"

    div.appendChild(text)

  });



function promjenaSadrzaja () {
    const text1 = "Acti labores iucundi. - Dovršeni su poslovi ugodni.";
    const paragraph = document.getElementById("paragraph"); 
    paragraph.innerHTML = text1;
}

function promjenaSlike () {
    const slika2 = `images/francuski.jpg`
    const slika = document.getElementById("slika")
    slika.src = slika2
}

function promjenaSlikeDva () {
    const slika2 = `images/vino.jpg`
    const slika = document.getElementById("slika")
    slika.src = slika2
}


function promjenaVelicineSadrzaja () {
    const paragraph = document.getElementById("paragraph"); 
    paragraph.style.fontSize = "20px";
}

function sakrijParagraph () {
    const paragraph = document.getElementById("paragraph"); 
    paragraph.style.display = "none"
}

function prikaziParagraph () {
    const paragraph = document.getElementById("paragraph");
    paragraph.style.display = "block"
}






