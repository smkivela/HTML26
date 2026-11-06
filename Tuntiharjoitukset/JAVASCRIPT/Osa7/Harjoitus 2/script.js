// lisää id ja tuotteen saldo


const tuotteet = [
    { id: 1, nimi: "Hiiri", hinta: 30, saldo: 10 },
    { id: 2, nimi: "Näppäimistö", hinta: 20, saldo: 0 },
    { id: 3, nimi: "Muistikampa", hinta: 350, saldo: 30 },
    { id: 4, nimi: "Näyttö", hinta: 500, saldo: 40 }
];

// hae id:llä 2 ja id:llä 99. ilmoita jos etsittyä id:tä ei löydy

const tuote2 = tuotteet.find(tuote => tuote.id === 2);
const tuote99 = tuotteet.find(tuote => tuote.id === 99);

if (!tuote2) {
    console.log("Tuotetta id:llä 2 ei löytynyt");
} else {
    console.log("Tuote id:llä 2 löytyi:", tuote2);
}

if (!tuote99) {
    console.log("Tuotetta id:llä 99 ei löytynyt");
} else {
    console.log("Tuote id:llä 99 löytyi:", tuote99);
}

// tee uusi taulukko jossa tuotteen id:llä 2 hinta on 19,90. muut säilyvät samana

const uusitaulukko = tuotteet.map(tuote => {
    if (tuote.id === 2) {
        return { ...tuote, hinta: 19.90 };
    }
    return tuote;
});
console.log("Uusi taulukko:", uusitaulukko);