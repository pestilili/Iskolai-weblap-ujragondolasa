const Submit = document.getElementById("skibidi");
const mainDiv = document.getElementsByTagName("main")[0];

const adatok = window.location.search.split("&");
    const email = adatok[0].split("=")[1];
    const jelsz = adatok[1].split("=")[1];
    console.log(email);
    
    if (email == "vonak.bence%40diak.szbi-pg.hu" && jelsz == "teszt1234") {
        
        mainDiv.innerHTML = "<p>Sikeres Bejelentkezés</p>";
        
    }
    else{
        mainDiv.innerHTML += "<p>Sikertelen Bejelentkezés</p>";
    }
