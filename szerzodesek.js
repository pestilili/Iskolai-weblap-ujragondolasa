
import data from './szerzodesek.json' with { type: 'json' };

class Szerzodes {
    constructor(data) {
        Object.assign(this, data);
    }
}

const szerzodesek = [];

for (let i = 0; i < data.length; i++) {
    szerzodesek.push(new Szerzodes(data[i]));
}

const megyeLista = document.getElementById("megye_lista");
const telepulesLista = document.getElementById("telepules_lista");
const helyszinLista = document.getElementById("helyszin_lista");

const megyek = [];

for (let i = 0; i < szerzodesek.length; i++) {
    let megvan = false;

    for (let j = 0; j < megyek.length; j++) {
        if (megyek[j] === szerzodesek[i].megye) {
            megvan = true;
        }
    }

    if (megvan === false) {
        megyek.push(szerzodesek[i].megye);
    }
}

for (let i = 0; i < megyek.length; i++) {
    const megye = megyek[i];

    const gomb = document.createElement("button");
    gomb.classList.add("gomb");
    gomb.textContent = megye + " ▶";

    megyeLista.appendChild(gomb);

    gomb.addEventListener("click", function() {
        const gombok = megyeLista.children;

        for (let j = 0; j < gombok.length; j++) {
            gombok[j].classList.remove("aktiv");
        }

        gomb.classList.add("aktiv");

        telepulesLista.innerHTML = "";
        helyszinLista.innerHTML = "";

        const telepulesek = [];

        for (let j = 0; j < szerzodesek.length; j++) {
            if (szerzodesek[j].megye === megye) {
                let megvan = false;

                for (let k = 0; k < telepulesek.length; k++) {
                    if (telepulesek[k] === szerzodesek[j].telepules) {
                        megvan = true;
                    }
                }

                if (megvan === false) {
                    telepulesek.push(szerzodesek[j].telepules);
                }
            }
        }

        for (let j = 0; j < telepulesek.length; j++) {
            const telepules = telepulesek[j];

            const telepulesGomb = document.createElement("button");
            telepulesGomb.classList.add("gomb");
            telepulesGomb.textContent = telepules + " ▶";

            telepulesLista.appendChild(telepulesGomb);

            telepulesGomb.addEventListener("click", function() {
                helyszinLista.innerHTML = "";

                const helyszinek = [];

                for (let k = 0; k < szerzodesek.length; k++) {
                    if (
                        szerzodesek[k].megye === megye &&
                        szerzodesek[k].telepules === telepules
                    ) {
                        let megvan = false;

                        for (let m = 0; m < helyszinek.length; m++) {
                            if (
                                helyszinek[m] ===
                                szerzodesek[k].nev
                            ) {
                                megvan = true;
                            }
                        }

                        if (megvan === false) {
                            helyszinek.push(szerzodesek[k].nev);
                        }
                    }
                }

                
                for (let k = 0; k < helyszinek.length; k++) {
                    const helyszinGomb =
                        document.createElement("button");

                    helyszinGomb.classList.add("gomb");
                    helyszinGomb.textContent = helyszinek[k];

                    helyszinLista.appendChild(helyszinGomb);
                }
            });
        }
    });
}
