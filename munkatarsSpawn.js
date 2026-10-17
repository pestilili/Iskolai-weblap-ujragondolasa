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

let kepHata = [
    `<div>
            <h1 style="text-align: center;">Csenkiné Bihal Mária</h1>
            <h2 style="text-align: center;">gépírás</h2>
            <p style="text-align: center;">"A QWERTZ-t jegyezzétek meg!!"</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Csősz Beáta</h1>
            <h2 style="text-align: center;">magyar nyelv és irodalom</h2>
            <p style="text-align: center;">"Ezek a mai golyák kikészítenek!"</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Csuka Tibor</h1>
            <h2 style="text-align: center;">informatika</h2>
            <p style="text-align: center;">"Magasra a kezeket!"</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Dobos László</h1>
            <h2 style="text-align: center;">szakirányú oktatásért felelős igazgatóhelyettes, informatika</h2>
            <p style="text-align: center;">"Szeretem a gyermekek mosolyát, mikor belépnek ide."</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Erdélyi Szabolcs</h1>
            <h2 style="text-align: center;">testnevelés, <i>a 12.B osztályfőnöke</i></h2>
            <p style="text-align: center;">"Ne rugdosd a röplabdát!"</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Gálfi Tamás Imre</h1>
            <h2 style="text-align: center;">kollégiumvezető</h2>
            <p style="text-align: center;">"Ha kollégiumba jössz, várlak szeretettel!"</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Havas Attila</h1>
            <h2 style="text-align: center;">informatika, <i>A 12.I osztályfönöke</i></h2>
            <p style="text-align: center;">"Még bírom!"</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Kiss Károly</h1>
            <h2 style="text-align: center;">hittan</h2>
            <p style="text-align: center;">Nem vagyok AI, esküszöm ;)</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Kovács István Zoltán</h1>
            <h2 style="text-align: center;">gépszerelő, karbantartó</h2>
            <p style="text-align: center;">"Kérem csukja be a kondi ajtaját!"</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Kun Tímea</h1>
            <h2 style="text-align: center;">angol nyelv <i>a 9.KnyD osztályfőnöke</i></h2>
            <p style="text-align: center;">"Mesterséges Intelligencia"</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Pásztor Zoltán Albert</h1>
            <h2 style="text-align: center;">informatika <i>a 13.I osztályfőnöke </i></h2>
            <p style="text-align: center;">"Milyen nap van ma? Ó, akkor számonkérés ;)"</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Rokolya Csaba</h1>
            <h2 style="text-align: center;">igazgató, informatikus mérnöktanár</h2>
            <p style="text-align: center;">"Szeptemberben várok minden 8. osztályos tanulót a PG-ben. Mert a jövőd a PG-ben kezdődik."</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Tarjányi Andrásné</h1>
            <h2 style="text-align: center;">pénztáros</h2>
            <p style="text-align: center;">"Befizette már az ebédet?"</p>
    </div>`,
    `<div>
            <h1 style="text-align: center;">Tarjányi Mihály</h1>
            <h2 style="text-align: center;">karbantartó</h2>
            <p style="text-align: center;">"Isten milyen szép napot teremtett nekünk!"</p>
    </div>`
    







]

const foDiv = document.getElementById("biggest-container2")
const Kepek = document.getElementById("Kepek")
for (let i = 0; i < kepek.length; i++) {
    const kepDiv = document.createElement("div")
    const kep = document.createElement('img')
    const kepSzov = document.createElement("div")
    const CardInner = document.createElement("div")

    kep.src = "kepek/" + kepek[i]
    const kepHat = document.createElement("div")
    kepHat.innerHTML = kepHata[i]
    kepSzov.appendChild(kepHat)
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


