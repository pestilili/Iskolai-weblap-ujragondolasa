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
]



const foDiv = document.createElement("div")

for (let i = 0; i < kepek.length; i++) {
    const kep = document.createElement('img')
    kep.src = "képek/" + kepek[i]
    kep.style.width = "250px"
    kep.style.height = "auto"
    foDiv.appendChild(kep)    
    
}

document.body.appendChild(foDiv)
foDiv.style.display = "flex";
foDiv.style.display = "flex";
foDiv.style.flexWrap = "wrap"; 
foDiv.style.gap = "15px";
