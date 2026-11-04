/* Tehtävä 1: Kuukauden sähkönkulutus
Tee ohjelma, joka käsittelee 12 kuukauden sähkönkulutusta.

Sähkönkulutus on jokaisena kuukautena seuraava:

[320, 280, 410, 350, 290, 180, 160, 190, 240, 330, 390, 440]

Ohjelman pitää tulostaa:
- Jokaisen kuukauden kulutus.
- Kuinka monena kuukautena kulutus ylitti 300 kWh.
- Kuinka suuri oli suurin kuukausittainen kulutus. */



const kulutukset = [320, 280, 410, 350, 290, 180, 160, 190, 240, 330, 390, 440];

let ylitti300 = 0;



console.log("Vuoden sähkönkulutus kilowattitunteina kuukausittain oli " + kulutukset);

for (let i = 0; i < kulutukset.length; i++) {
    if (kulutukset[i] >= 300) {
        ylitti300 += 1;
    }
}

console.log("300 kwh ylitettiin " + ylitti300 + " kertaa")

let suurin = 320;

for (let i = 0; i < kulutukset.length; i++) {
    if (kulutukset[i] > suurin) {
        suurin = kulutukset[i];
    }
}

console.log("Suurin kuukauden kulutus oli " + suurin + "kwh");








/*
Tehtävä 2: Myyntiraportti

Verkkokauppa on kerännyt myyntitulokset euroina:

const myynnit = [145, 320, 85, 410, 275, 320, 190, 460, 125, 410, 350, 210];

Selvitä ohjelmallisesti:

1. Kuinka monena päivänä myynti oli vähintään 300 €?
2. Mikä oli suurin myynti?
3. Mikä oli myyntien keskiarvo?
4. Kuinka monena päivänä myynti jäi alle keskiarvon?

Tulosta jokainen vastaus konsoliin selkeällä tekstillä.

Ohjelman pitää toimia myös silloin, jos muutat taulukon lukuja.

Huomio: Samat myyntiluvut voivat esiintyä useamman kerran.
Jokainen taulukon jäsen lasketaan omana päivänään.
*/


const myynnit = [145, 320, 85, 410, 275, 320, 190, 460, 125, 410, 350, 210,];

let väh300 = 0;

let suurinmyynti = 0;

let myyntienlukumäärä = myynnit.length;

let myynnityhteensä = 0;

let päivätalle = 0;



for (let i = 0; i < myynnit.length; i++) {
    if (myynnit[i] >= 300) {
        väh300 += 1;
    }

    if (myynnit[i] > suurinmyynti) {
        suurinmyynti = myynnit[i];
    }

    myynnityhteensä += myynnit[i];

}

let keskiarvo = myynnityhteensä/myyntienlukumäärä;

for (let i = 0; i < myynnit.length; i++) {

    if (myynnit[i] < keskiarvo) {
        päivätalle += 1;
    }
}



console.log("Myynti oli vähintään 300€ " + väh300 + " päivänä.");

console.log("Suurin myynti oli " + suurinmyynti + " euroa.");

console.log(`Myynnit yhteensä on ${myynnityhteensä} euroa ja niiden keskiarvo on ${myynnityhteensä/myyntienlukumäärä}.` );

console.log(`Myynti jäi alle keskiarvon ${päivätalle} päivänä.`)










/*
Tehtävä 3: Sääaseman raportti

Sääasema mittasi päivän keskilämpötilan 14 peräkkäisenä päivänä:

const lampotilat = [12, 15, 11, 9, 14, 18, 17, 13, 8, 10, 16, 19, 14, 11];

Selvitä ohjelmallisesti:

Kuinka monena päivänä lämpötila oli vähintään 15 astetta?

Mikä oli korkein lämpötila ja minä päivänä se mitattiin?

Mikä oli matalin lämpötila ja minä päivänä se mitattiin?

Kuinka monena päivänä lämpötila oli korkeampi kuin edellisenä päivänä?


Tulosta kaikki vastaukset konsoliin selkeällä tekstillä.

Ohjelman pitää toimia myös silloin, jos muutat taulukon lukuja.

Huomio:

Päivä 1 tarkoittaa taulukon ensimmäistä lukua.

Ensimmäistä päivää ei voi verrata edelliseen päivään.

Jos sama korkein tai matalin lämpötila esiintyy useana päivänä, riittää että ilmoitat niistä ensimmäisen.
*/


const lämpötilat = [12, 15, 11, 9, 14, 18, 17, 13, 8, 10, 16, 19, 14, 11];

let lämpimätpäivät = 0;

let korkein = 12;

let matalin = 12;

let viikonpäivät = ["maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai", "sunnuntai"]

let korkeinIndeksi = 0;

let matalinIndeksi = 0;






for (let i = 0; i < lämpötilat.length; i++) {
    if (lämpötilat[i] >= 15) {
        lämpimätpäivät += 1;
    }
    if (lämpötilat[i] > korkein) {
        korkein = lämpötilat[i];
        korkeinIndeksi = i;
    }

    if (lämpötilat[i] < matalin) {
        matalin = lämpötilat[i];
        matalinIndeksi = i;
    }

}

let korkeampiKuinEdellinen = 0;

for (let i = 1; i < lämpötilat.length; i++) {
        if (lämpötilat[i] > lämpötilat[i-1]) {
        korkeampiKuinEdellinen += 1;
    }
}




let viikonpäiväIndeksi = korkeinIndeksi % 7;
let viikonpäivä = viikonpäivät[viikonpäiväIndeksi];

let viikonpäiväIndeksi2 = matalinIndeksi % 7;
let viikonpäivä2 = viikonpäivät[viikonpäiväIndeksi2];

console.log(`Vähintään 15 asteen päiviä oli ${lämpimätpäivät}`);
console.log(`Korkein mitattu lämpötila oli ${korkein} astetta ja se mitattiin ${viikonpäivä}na.`);
console.log(`Matalin mitattu lämpötila oli ${matalin} astetta ja se mitattiin ${viikonpäivä2}na.`);
console.log(`Lämpötila oli korkeampi kuin edellisenä päivänä ${korkeampiKuinEdellinen} päivänä.`);



// FUNKTIOT MUKAAN

/*
Tehtävä 1: Lämpötilan tarkistaja

Tee funktio nimeltä tarkistaLampotila.

Funktion pitää saada yksi lämpötila.

Jos lämpötila on vähintään 15 astetta, tulosta "Lämmin päivä".

Muussa tapauksessa tulosta "Viileä päivä".

Kutsu funktiota kolmella eri lämpötilalla: 8, 15 ja 22.

Esimerkkitulostus:

Viileä päivä
Lämmin päivä
Lämmin päivä
*/



function tarkistaLämpötila(lämpötilaluku){
    if(lämpötilaluku<=15) {
        return "Viileä päivä";
    } else {
        return "Lämmin päivä";
    }
}

console.log(tarkistaLämpötila(12)); 
console.log(tarkistaLämpötila(16));
console.log(tarkistaLämpötila(15));
console.log(tarkistaLämpötila(19));




/* Funktiotreeni: Ostoskorin laskuri
Tehtävänä on tehdä funktio nimeltä laskeOstokset, joka ottaa parametrina ostosten hinnat sisältävän taulukon.

Esimerkiksi:
laskeOstokset([10, 15, 20, 5])


Funktio palauttaa ostosten yhteishinnan.

Mutta tässä tulee kolme lisävaatimusta:
1. Laske kaikkien ostosten yhteishinta.
2. Jos summa on yli 50 €, anna 10 % alennus.
3. Palauta lopullinen hinta.
 */



function laskeOstokset(ostokset) {

    let yhteishinta = 0;

    for (let i = 0; i < ostokset.length; i++) {
        yhteishinta += ostokset[i];
    }

    if (yhteishinta <= 50) {
        return yhteishinta;
    } else {
        return yhteishinta*0.9;
    }

}

console.log("Ostosten yhteishinta on " + laskeOstokset([10, 20, 30]) + "€");



/* Funktiotreeni 3: Arvosanalaskuri
Tee funktio nimeltä laskeArvosana, joka ottaa parametrina taulukon opiskelijan koepisteistä.

Esimerkiksi:
laskeArvosana([8, 7, 9, 6, 10])


Funktion pitää laskea pisteiden keskiarvo ja palauttaa sitä vastaava arvosana.

Arvosana-asteikko:
Keskiarvo	Arvosana
9–10	5
8–alle 9	4
7–alle 8	3
6–alle 7	2
5–alle 6	1
Alle 5	0

*/

function laskeArvosana(koepisteet) {

    let pisteetyht = 0;

    if (koepisteet.length === 0) {
    return "Ei koepisteitä";
}
    

    for(let i = 0; i < koepisteet.length; i++) {
        pisteetyht += koepisteet[i];
    }

    let keskiarvo = pisteetyht / koepisteet.length;

        if (keskiarvo >= 9) {
            return "Kiitettävä 5";
        } else if (keskiarvo >= 8) {
            return "Erinomainen 4";
        } else if (keskiarvo >= 7) {
            return "Hyvä 3";
        } else if (keskiarvo >= 6) {
            return "Menettelee 2";
        } else if (keskiarvo >= 5) {
            return "Tyydyttävä 1";
        } else {
            return "Hylätty 0";
        }
}

console.log(laskeArvosana([1, 4, 6, 7]));


