const opiskelijat = [
    { id: 1, nimi: "Aino", pisteet: 82, aktiivinen: true },
    { id: 2, nimi: "Mika", pisteet: 64, aktiivinen: false },
    { id: 3, nimi: "Sara", pisteet: 78, aktiivinen: true }
];

const aktiiviset = opiskelijat.filter(opiskelija => opiskelija.aktiivinen);

console.log(aktiiviset);


const tekstit = aktiiviset.map(opiskelija => `${opiskelija.nimi} - ${opiskelija.pisteet} p`);

console.log(tekstit);


const pisteetYhteensa = aktiiviset.reduce((summa, opiskelija) => {
    return summa + opiskelija.pisteet;
}, 0);

console.log(pisteetYhteensa);

if (aktiiviset.length > 0) {
    const keskiarvo = pisteetYhteensa / aktiiviset.length;
    console.log("Aktiivisten keskiarvo on " + keskiarvo);
} else {
    console.log("Ei aktiivisia opiskelijoita");
}


function haeOpiskelija(id) {
    const opiskelija = opiskelijat.find(opiskelija => opiskelija.id === id);

    if (opiskelija) {
        console.log("Löytyi: " + opiskelija.nimi + " (" + opiskelija.pisteet + " p)");
    } else {
        console.log("Opiskelijaa id:llä " + id + " ei löydy");
    }
}

haeOpiskelija(2);
haeOpiskelija(99);
