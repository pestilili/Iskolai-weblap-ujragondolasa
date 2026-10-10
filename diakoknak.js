const Submit = document.getElementById("skibidi");
const mainDiv = document.getElementsByTagName("main")[0];

const adatok = window.location.search.split("&");
const email = adatok[0].split("=")[1];
const jelsz = adatok[1].split("=")[1];

//#region mainDiv frissitese
if (email == "vonak.bence%40diak.szbi-pg.hu" && jelsz == "teszt1234") {
    
    mainDiv.innerHTML = `
    <div id="diak" style="display: flex; flex-direction: row;">
    <div class="container_flex">
         <div class="orarend-kartya">
            <h2>Órarendem</h2>
            <div id="ora-ido">--:--:--</div>
            <div id="ora-allapot">Betöltés...</div>
            <ul id="ora-lista"></ul>

            <div class="szim">
                <label>Nap
                    <select id="szim-nap">
                        <option value="">Valós</option>
                        <option value="1">Hétfő</option>
                        <option value="2">Kedd</option>
                        <option value="3">Szerda</option>
                        <option value="4">Csütörtök</option>
                        <option value="5">Péntek</option>
                    </select>
                </label>
            </div>
        </div>
        <div id="ebed_kartya">
                    <h1>Mai ebéd:</h1>
                    <ul id="ebed_lista">
                        <li id="leves"></li>
                        <li id="a_menu"></li>
                        <li id="b_menu"></li>
                    </ul>


                </div>

                   
    </div>
<div class="container_flex">
                <div id="esemenyek_kartya">
                <h1 style="text-align: center;">Órarendi változások</h1>
                <div id="valtozas_table"></div>
                <h1 style="text-align: center;">Közelgő események</h1>
                <div id="esemeny_table"></div>

            </div> 
             </div>

    <div class="container_flex"></div>
                <div class="container_flex"></div>            
            
            
    
    
    
    
    
    
    
    
</div>  
    

    `;
    
}
//#endregion
else{
    mainDiv.innerHTML += "<p>Sikertelen Bejelentkezés</p>";
}
//#region valtozok
const csengetes = {
    1: ["07:15", "08:00"],
    2: ["08:10", "08:55"],
    3: ["09:05", "09:50"],
    4: ["10:00", "10:45"],
    5: ["10:55", "11:40"],
    6: ["12:00", "12:45"],
    7: ["13:05", "13:50"],
    8: ["13:55", "14:40"],
    9: ["14:45", "15:30"]
};

const orarend = {
    1: [{ ora: 1, targy: "AAF", terem: "13-as terem" },
        { ora: 2, targy: "AAF", terem: "13-as terem" },
        { ora: 3, targy: "AAF", terem: "13-as terem" },
        { ora: 4, targy: "Projektmunka", terem: "13-as terem" },
        { ora: 5, targy: "Projektmunka", terem: "13-as terem" },
        { ora: 6, targy: "Projektmunka", terem: "13-as terem"},
        {ora: 7, targy: "Webprogramozás", terem: "11-es terem"},
        {ora: 8, targy: "Webprogramozás", terem: "11-es terem"},
        {ora: 9, targy: "Webprogramozás", terem: "11-es terem"},],
    2: [{ ora: 1, targy: "SzoftverTesztelés", terem: "14-es terem" },
        { ora: 2, targy: "SzoftverTesztelés", terem: "14-es terem" },
        { ora: 3, targy: "SzoftverTesztelés", terem: "14-es terem" },
        { ora: 4, targy: "Szakmai Angol", terem: "K1-es terem" },
        { ora: 5, targy: "Szakmai Angol", terem: "K1-es terem" },],
    3: [{ ora: 1, targy: "Hittan", terem: "17-es terem" },
        { ora: 2, targy: "Testnevelés", terem: "csarnok2" },
        { ora: 3, targy: "Matematika", terem: "5-ös terem" },
        { ora: 4, targy: "Irodalom", terem: "3-as terem" },
        { ora: 5, targy: "Történelem", terem: "2-es terem" },
        { ora: 6, targy: "Történelem", terem: "2-es terem" },],
    4: [{ ora: 1, targy: "Hittan", terem: "5-ös terem" },
        { ora: 2, targy: "Történelem", terem: "2-es terem" },
        { ora: 3, targy: "Osztályfőnöki", terem: "4-es terem" },
        { ora: 4, targy: "Irodalom", terem: "3-as terem" },
        { ora: 5, targy: "Matematika", terem: "5-ös terem" },
        { ora: 6, targy: "Állampolgári Ismeretek", terem: "2-es terem" },
        { ora: 7, targy: "Testnevelés", terem: "csarnok1" }],
    5: [{ ora: 1, targy: "Nincs :)", terem: "-" },
        { ora: 2, targy: "Matematika", terem: "5-ös terem" },
        { ora: 3, targy: "Matematika", terem: "5-ös terem" },
        { ora: 4, targy: "Irodalom", terem: "3-as terem" },
        { ora: 5, targy: "Nyelvtan", terem: "3-as terem" },
        { ora: 6, targy: "Nincs :)", terem: "-" },
        { ora: 7, targy: "Történelem", terem: "2-es terem" },
        { ora: 8, targy: "Testnevelés", terem: "csarnok1" },
    ]
};

const napok = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
const ebedek = {
    1: { leves: "Gulyásleves", a: "Rántott csirkecomb rizzsel", b: "Sertéspörkölt galuskával" },
    2: { leves: "Zöldségkrémleves", a: "Gombás tokány", b: "Sült hekk burgonyapürével" },
    3: { leves: "Paradicsomleves", a: "Spagetti bolognai", b: "Grízes Tészta" },
    4: { leves: "Húsleves cérnametélttel", a: "Rakott krumpli", b: "Sobri szelet burgonyapürével" },
    5: { leves: "Lencsefőzelék", a: "Rántott sajt hasábburgonyával", b: "Mustáros tokány" }
}
const perc = s => { const [h, m] = s.split(":").map(Number); return h * 60 + m; };
const ketjegy = n => String(n).padStart(2, "0");

const ebed_kartya = document.getElementById("ebed_kartya")
const a_menu = document.getElementById("a_menu")
const b_menu = document.getElementById("b_menu")
const leves = document.getElementById("leves")
const most = new Date();
let nap = most.getDay();
const ma = orarend[nap];

let esemenyek = {
    1: {type: "Helyettesítés" , tortenes: "Hétfő/1/Nincs: Kis Gábor István, Helyettesíti: Csősz Beáta"},
    2: {type: "Elmarad", tortenes: "Péntek/8/Elmarad."},
    3: {type: "Ünnep", tortenes: "Október 23.-án ünnepség a csarnokban!"}
}
//#endregion
if(!ma){
    ebed_kartya.innerHTML = "<h1> Ma nincs ebéd :( </h1>"
}
else{
a_menu.textContent = `${ebedek[nap].a}`
b_menu.textContent = `${ebedek[nap].b}`
leves.textContent = `${ebedek[nap].leves}`
}


function frissit() {
    const most = new Date();
    let nap = most.getDay();
    let aktPerc = most.getHours() * 60 + most.getMinutes();
    let mp = most.getSeconds();

    const szimNap = document.getElementById("szim-nap").value;
    if (szimNap) nap = Number(szimNap);

    document.getElementById("ora-ido").textContent =
        `${ketjegy(Math.floor(aktPerc / 60))}:${ketjegy(aktPerc % 60)}:${ketjegy(mp)}`;

    const ma = orarend[nap];
    const allapot = document.getElementById("ora-allapot");
    const lista = document.getElementById("ora-lista");

    if (!ma) {
        allapot.textContent = `${napok[nap]}: ma nincs tanítás 🎉`;
        lista.innerHTML = "";
        return;
    }

    let aktualis = null, kovetkezo = null;
    for (const o of ma) {
        const [kezd, vege] = csengetes[o.ora].map(perc);
        if (aktPerc >= kezd && aktPerc < vege) aktualis = o;
        else if (aktPerc < kezd && !kovetkezo) kovetkezo = o;
    }

    if (aktualis) {
        const vege = perc(csengetes[aktualis.ora][1]);
        allapot.innerHTML = `Most: <b>${aktualis.targy}</b> (${aktualis.terem})<br>még ${vege - aktPerc} perc`;
    } else if (kovetkezo) {
        const kezd = perc(csengetes[kovetkezo.ora][0]);
        allapot.innerHTML = `Szünet. Következő: <b>${kovetkezo.targy}</b> (${kovetkezo.terem})<br>${kezd - aktPerc} perc múlva`;
    } else {
        allapot.textContent = "Mára vége az óráidnak ✅";
    }

    
    lista.innerHTML = "";
    for (const o of ma) {
        const [kezd, vege] = csengetes[o.ora];
        const li = document.createElement("li");
        li.innerHTML = `<span>${o.ora}. ${o.targy}</span><span>${kezd}</span>`;
        if (perc(vege) <= aktPerc) li.className = "elmult";
        else if (o === aktualis) li.className = "aktualis";
        else if (o === kovetkezo) li.className = "kovetkezo";
        lista.appendChild(li);
    }
}

frissit();
setInterval(frissit, 1000);