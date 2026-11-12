// Tee ohjelma, joka pyytää käyttäjältä kolmea numeroa ja laittaa ne järjestykseen. ei tarvi oikeasti pyytää

const numerot = [5, 2, 8]; 
numerot.sort((a, b) => a - b);
console.log("Järjestettynä:", numerot);


// Kirjoita ohjelma, joka ottaa vastaan 5 lukua ja etsii niistä suurimman. käytä silmukkaa

const numerot2 = [3, 7, 1, 9, 4];
let maxNumero = numerot2[0];
for (let i = 1; i < numerot2.length; i++) {
    if (numerot2[i] > maxNumero) {
        maxNumero = numerot2[i];
    }
}
console.log("Suurin luku:", maxNumero);


// Kirjoita ohjelma, joka kertoo, onko antamasi luku parillinen vai pariton

const luku = 7;
if (luku % 2 === 0) {
    console.log("Luku on parillinen");
} else {
    console.log("Luku on pariton");
}



// Kirjoita ohjelma, joka kysyy käyttäjän ikää ja tarkistaa, mitä ajoneuvoa saa ajaa: <16v - polkupyörää, <18v - mopoa, muutoin autoa

const ika = 17;
if (ika < 16) {
    console.log("Saat ajaa polkupyörää");
} else if (ika < 18) {
    console.log("Saat ajaa mopoa");
} else {
    console.log("Saat ajaa autoa");
}



// Kirjoita ohjelma, joka kääntää "Hei maailma" - tekstin valitulle kielelle (englanti, ruotsi, espanja)

const kieli = "englanti";
let teksti = "Hei maailma";
if (kieli === "englanti") {
    teksti = "Hello world";
} else if (kieli === "ruotsi") {
    teksti = "Hej världen";
} else if (kieli === "espanja") {
    teksti = "Hola mundo";
}
console.log(teksti);




