let kepek = [
    "Csenkiné Bihal Mária.jpg",
    "Csősz Beáta.jpg",
    "Csuka Tibor.jpg",
    "Dobos László.jpg",
    "Erdélyi Szabolcs.jpg",
    "Gálfi Tamás.jpg",
    "Havas Attila.jpg",
    "KissKároly.jpg",
    "Kovács István Zoltán.jpg",
    "Kun_Tímea.jpg",
    "Pásztor Zoltán.jpg",
    "Rokolya Csaba.jpg",
    "Tarjányi Andrásné.jpg",
    "Tarjányi Mihály.jpg"
];
let kepekhezSzov = [
    "Csenkiné Bihal Mária.jpg",
    "Csősz Beáta.jpg",
    "Csuka Tibor.jpg",
    "Dobos László.jpg",
    "Erdélyi Szabolcs.jpg",
    "Gálfi Tamás.jpg",
    "Havas Attila.jpg",
    "KissKároly.jpg",
    "Kovács István Zoltán.jpg",
    "Kun_Tímea.jpg",
    "Pásztor Zoltán.jpg",
    "Rokolya Csaba.jpg",
    "Tarjányi Andrásné.jpg",
    "Tarjányi Mihály.jpg"
]

const foDiv = document.getElementById("biggest-container2")
const Kepek = document.getElementById("Kepek")
for (let i = 0; i < kepek.length; i++) {
    const kepDiv = document.createElement("div")
    const kep = document.createElement('img')
    const kepSzov = document.createElement("div")
    const CardInner = document.createElement("div")

    kep.src = "képek/" + kepek[i]
    const kepSzovSzov = document.createTextNode(i)
    kepSzov.appendChild(kepSzovSzov)
    kepDiv.classList += "card"
    CardInner.classList += "card-inner"
    kep.classList += "card-front" 
    kepSzov.classList += "card-back"

    CardInner.appendChild(kep)
    CardInner.appendChild(kepSzov)
    kepDiv.appendChild(CardInner)
    Kepek.appendChild(kepDiv)
    
    
}

Kepek.style.display = "flex";
Kepek.style.flexWrap = "wrap"; 
Kepek.style.gap = "15px";
Kepek.style.backgroundColor = "rgba(80, 135, 255, 0.767)"


