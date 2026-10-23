// IE01 -------------------------------------------------------------

const luku1 = 30
const luku2 = 20

if (luku1 > luku2) {
    console.log("Suurempi luku on " + luku1);
} else if (luku2 > luku1) {
    console.log("Suurempi luku on " + luku2);
} else {
    console.log("Luvut ovat samat");
}




// IE02 -------------------------------------------------------------


const luku3 = 8050;
const luku4 = 8000;
const luku5 = 80300;

if (luku3 > luku4 && luku3 > luku5) {
    console.log("Suurin luku on " + luku3);
} else if (luku4 > luku3 && luku4 > luku5) {
    console.log("Suurin luku on " + luku4);
} else if (luku3 === luku4 && luku4 === luku5) {
    console.log("Kaikki luvut ovat yhtä suuria");
} else {
    console.log("Suurin luku on " + luku5)
}




// IE04 ------------------------------------------------------------------



const luku6 = prompt("Anna luku. Tarkistan onko se jaollinen 5:llä tai 11:lla");

if (luku6 % 5 === 0 || luku6 % 11 === 0) {
    console.log("Luku on jaollinen 5:llä tai 11:lla.");
} else {
    console.log("Luku ei ole jaollinen kummallakaan.");
}






// IE05 -------------------------------------------------------------------

const vuosiluku = 2024;

if (vuosiluku % 4 === 0 ) {
    console.log("Vuosi on karkausvuosi");
} else {
    console.log("Vuosi ei ole karkausvuosi");
}



// IE06 --------------------------------------------------------------------

const luku7 = 101;

if (luku7 % 2 === 0) {
    console.log("Luku on parillinen");
} else {
    console.log("Luku ei ole parillinen");
}



// IE11 ---------------------------------------------------------------------



const myynnit = 6770;
const ostot = 4000;

let myyntitulos = myynnit - ostot;

if (myynnit - ostot < 0) {
    console.log("Teit tappiota " + myyntitulos + " euroa");
} else {
    console.log("Teit voittoa " + myyntitulos  + " euroa");
}




// IE12 --------------------------------------------------------------------

const ma = 80;
const KeFy = 40
const en = 2
const ru = 99
const äi = 100

if (ma >= 90) {
    console.log("Matematiikka K5");
} else if (ma >= 80) {
    console.log("Matematiikka H4");
} else if (ma >= 70) {
    console.log("Matematiikka H3");
} else if (ma >= 60) {
    console.log("Matematiikka T2");
} else if (ma >= 50) {
    console.log("Matematiikka T1");
} else {
    console.log("Matematiikka Hylätty");
}

if (KeFy >= 90) {
    console.log("Kemia/Fysiikka K5");
} else if (KeFy >= 80) {
    console.log("Kemia/Fysiikka H4");
} else if (KeFy >= 70) {
    console.log("Kemia/Fysiikka H3");
} else if (KeFy >= 60) {
    console.log("Kemia/Fysiikka T2");
} else if (KeFy >= 50) {
    console.log("Kemia/Fysiikka T1");
} else {
    console.log("Kemia/Fysiikka Hylätty");
}

if (en >= 90) {
    console.log("Englanti K5");
} else if (en >= 80) {
    console.log("Englanti H4");
} else if (en >= 70) {
    console.log("Englanti H3");
} else if (en >= 60) {
    console.log("Englanti T2");
} else if (en >= 50) {
    console.log("Englanti T1");
} else {
    console.log("Englanti Hylätty");
}

if (ru >= 90) {
    console.log("Ruotsi K5");
} else if (ru >= 80) {
    console.log("Ruotsi H4");
} else if (ru >= 70) {
    console.log("Ruotsi H3");
} else if (ru >= 60) {
    console.log("Ruotsi T2");
} else if (ru >= 50) {
    console.log("Ruotsi T1");
} else {
    console.log("Ruotsi Hylätty");
}

if (äi >= 90) {
    console.log("Äidinkieli K5");
} else if (äi >= 80) {
    console.log("Äidinkieli H4");
} else if (äi >= 70) {
    console.log("Äidinkieli H3");
} else if (äi >= 60) {
    console.log("Äidinkieli T2");
} else if (äi >= 50) {
    console.log("Äidinkieli T1");
} else {
    console.log("Äidinkieli Hylätty");
}


// IE14 --------------------------------------------------------------


const luku8 = 50;
const luku9 = 40;

if (luku8 === luku9) {
    console.log("Luvut ovat sama.");
} else {
    console.log("Luvut eivät ole sama.")
}



