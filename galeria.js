const mainDiv = document.getElementsByTagName("main")[0];
function Kezdo() {
    

    mainDiv.innerHTML = `<div class="container_flex2" style="align-items: center; flex-wrap: wrap;">
            </div>
            
            `
const container = document.getElementsByClassName("container_flex2")[0]
for (let i = 0; i < 5; i++) {
            const card_5 = document.createElement("div")
            card_5.classList.add("card_5");
            card_5.id = i
            const kep = document.createElement("img")
            for (let j = 0; j < 5; j++) {
                
                kep.src = `kepek/Galeria/${i}/${j}.jpg`
                
            }
            card_5.appendChild(kep)
            container.appendChild(card_5)
        }
const cards = document.getElementsByClassName("card_5");
for (const element of cards) {
    element.addEventListener("click", function () {
        const id = element.id
        mainDiv.innerHTML = `
        <div id="vissza"><p>Vissza a Galériába</p></div>
            <div class="container_flex2">
                
            </div>
        `;
        const container = document.getElementsByClassName("container_flex2")[0]
        container.setAttribute("style", "justify-content: center;")
        for (let i = 0; i < 5; i++) {
            const card_5 = document.createElement("div")
            card_5.classList.add("card_5");
            const kep = document.createElement("img")
            kep.src = `kepek/Galeria/${id}/${i}.jpg`
            card_5.appendChild(kep)
            container.appendChild(card_5)
        }
        const vissza = document.getElementById("vissza")
        vissza.addEventListener("click", Kezdo)
        

    })
}
}
Kezdo();
