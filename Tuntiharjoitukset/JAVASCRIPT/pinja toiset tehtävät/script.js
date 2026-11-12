// pyydä käyttäjältä luku ja tarkista, onko se positiivinen vai negatiivinen



const luku0 = -5;
if (luku0 >= 0) {
    console.log("Luku on positiivinen");
} else {
    console.log("Luku on negatiivinen");
}



// pyydä käyttäjältä viikonpäivän numero ja tulosta viikonpäivä

const viikonpaiva = 3;
if (viikonpaiva === 1) {
    console.log("Maanantai");
} else if (viikonpaiva === 2) {
    console.log("Tiistai");
} else if (viikonpaiva === 3) {
    console.log("Keskiviikko");
} else if (viikonpaiva === 4) {
    console.log("Torstai");
} else if (viikonpaiva === 5) {
    console.log("Perjantai");
} else if (viikonpaiva === 6) {
    console.log("Lauantai");
} else if (viikonpaiva === 7) {
    console.log("Sunnuntai");
} else {
    console.log("Virheellinen viikonpäivä");
}



// pyydä käyttäjältä vuosiluku ja tarkista, onko se karkausvuosi

const vuosi = 2024;
if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
    console.log("Vuosi on karkausvuosi");
} else {
    console.log("Vuosi ei ole karkausvuosi");
}






// Laske viiden luvun summa ja keskiarvo

const luku1 = 1;
const luku2 = 2;
const luku3 = 3;
const luku4 = 4;
const luku5 = 5;

const summa = luku1 + luku2 + luku3 + luku4 + luku5;
const keskiarvo = summa / 5;

console.log("lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo);





// Tulosta kertotaulu annetulle luvulle

const luku = 5;
let lause = "";
for (let i = 1; i <= 10; i++) {
    lause += luku + "x " + i + " = " + luku * i + "\n";
}
console.log(lause);
