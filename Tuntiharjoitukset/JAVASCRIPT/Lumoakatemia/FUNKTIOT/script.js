// F01. Kirjoita funktio laskeSumma, joka ottaa kaksi numeroparametria ja palauttaa niiden summan.
//  Testaa funktiota tulostamalla lukujen 3 ja 5 summa konsoliin.



function laskeSumma(luku1, luku2) {
    return luku1 + luku2;
}

console.log("Lukujen summa on " + laskeSumma(5, 3));







// F02. Kirjoita funktio laskeNelionPintaAla, joka ottaa neliön sivun pituuden parametrina ja palauttaa sen pinta-alan. 
// Testaa funktiota tulostamalla lopputulos konsoliin


function laskeNelionPintaAla(sivuPituus) {
    return sivuPituus * sivuPituus;
}

console.log("Neliön pinta-ala on " + laskeNelionPintaAla(7) + " neliömetriä.");








// F03. Kirjoita funktio laskeYmpyranPintaAla, joka ottaa ympyrän säteen parametrina ja palauttaa sen pinta-alan. 
// Käytä Math.PI -vakioita piin arvona. Kaava on Pii * säde2. Testaa funktiota tulostamalla lopputulos konsoliin.


function laskeYmpyranPintaAla(säde) {
    return Math.PI * (säde * säde);
}

console.log("Ympyrän pinta-ala on " + laskeYmpyranPintaAla(5) + " neliösenttimetriä.");









// F04. Kirjoita funktio laskeKeskiarvo, joka ottaa taulukon numeroparametrina ja palauttaa niiden keskiarvon. 
// Testaa funktiota tällä taulukolla: [1, 2, 3, 4, 5] ja tulosta keskiarvo konsoliin

function laskeKeskiarvo(numerotaulukko) {

    let summa = 0;
    for (let i = 0; i < numerotaulukko.length; i++) {
        summa += numerotaulukko[i];
    }

    return summa / numerotaulukko.length;
}

console.log("Taulukon lukujen keskiarvo on " + laskeKeskiarvo([1, 2, 3, 4, 5, 7, 8, 9, 4]));








// F05. Kirjoita funktio onkoParillinen, joka ottaa numeron parametrina ja palauttaa true, jos luku on parillinen, muuten false.
//  Testaa funktiota sekä parillisella, että parittomalla luvulla tulostamalla lopputulokset konsoliin.


function onkoParillinen(numero) {

return numero % 2 === 0;

}

console.log(onkoParillinen(6));
console.log(onkoParillinen(27));









// F06. Kirjoita funktio laskeMerkkijononPituus, joka ottaa merkkijonon parametrina ja palauttaa sen pituuden.
//  Testaa funktiota tulostamalla lopputulos konsoliin

function laskeMerkkijononPituus(merkkijono) {
    return merkkijono.length;
}

console.log(laskeMerkkijononPituus("hui9873hdsb23232"));








// F07. Kirjoita funktio onkoMerkkijonoTyhja, joka ottaa merkkijonon parametrina ja palauttaa true, 
// jos merkkijono on tyhjä, muuten false. Testaa sekä tyhjällä, että 'täydellä' merkkijonolla tulostaen konsoliin vastaukset

function onkoMerkkijonoTyhja(merkkijono2) {
    return merkkijono2.length === 0;
}

console.log(onkoMerkkijonoTyhja("i98db"));
console.log(onkoMerkkijonoTyhja(""));








// F08. Kirjoita funktio laskeSuurin, joka ottaa taulukon numeroparametrina ja palauttaa siinä olevan suurimman arvon konsoliin.
//  Testaa tällä taulukolla: [2, 7, 1, 9, 3]

function laskeSuurin(lukutaulukko) {
    
    let suurin = lukutaulukko[0];

    for (let i = 0; i < lukutaulukko.length; i++) {
        if (lukutaulukko[i]>suurin) {
            suurin = lukutaulukko[i];
        }
    }

    return suurin;
}

console.log(laskeSuurin([-1, -4, -3, -9, -2]));





// F09. Kirjoita funktio laskePienin, joka ottaa taulukon numeroparametrina ja palauttaa siinä olevan pienimmän arvon konsoliin. 
// Testaa tällä taulukolla: [2, 7, 1, 9, 3]

function laskePienin(lukutaulukko2) {

    let pienin = lukutaulukko2[0];

    for(let i = 0; i < lukutaulukko2.length; i++) {
        if (lukutaulukko2[i] < pienin) {
            pienin = lukutaulukko2[i];
        }
    }

    return pienin;

}

console.log(laskePienin([1, 2, 9, 10, -230]));









// F10. Kirjoita funktio laskeTaulukonSumma, joka ottaa taulukon numeroparametrina ja palauttaa niiden summan konsoliin.
//  Testaa tällä taulukolla: [1, 2, 3, 4, 5].


function laskeTaulukonSumma(lukutaulukko3) {

    let taulukonSumma = 0;

    for (let i = 0; i < lukutaulukko3.length; i++) {
        taulukonSumma += lukutaulukko3[i];
    }

    return taulukonSumma;
}

console.log(laskeTaulukonSumma([1, 33, 5, 2, 599]));











// F11. Kirjoita funktio laskePotenssi, joka ottaa kaksi numeroparametria: kantaluvun ja eksponentin, ja palauttaa kantaluvun eksponentin potenssina konsoliin

function laskePotenssi(kantaluku, eksponentti) {
  let tulos = 1;

  for (let i = 0; i < eksponentti; i++) {
    tulos = tulos * kantaluku;
  }

  return tulos;
}

console.log(laskePotenssi(2, 3)); // 8









// F12. Kirjoita funktio onkoAlkuluku, joka ottaa numeron parametrina ja palauttaa true, jos luku on alkuluku, muuten false konsoliin.


function onkoAlkuluku(luku3) {

    let jakaja = 2;

    for (let i = 2; i < 100; i++) {
        if (luku3 % jakaja === 0) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(onkoAlkuluku(9));







// F13. Kirjoita funktio kaannaMerkkijono, joka ottaa merkkijonon parametrina ja palauttaa sen käänteisenä konsoliin.

// opiskelin splitin reversen ja joinin itsenäisesti. reverse ei toimi yksinään merkkijonolle, koska reverse toimii vain taulukoille. siksi 
// merkkijono pilkotaan ensin taulukoksi splitillä, sen jälkeen käännetään, ja sen jälkeen muutetaan taulukosta takaisin merkkijonoksi joinilla. heittomerkkien
// sisään laitetaan se kohta mistä halutaan splitata tai joinata. tässä tapauksessa siis niiden sisään ei laiteta mitään.

function kaannaMerkkijono(merkkijono3) {
    return merkkijono3.split('').reverse().join('');
}

console.log(kaannaMerkkijono("BUTTISOIKOON"));










// F14. Kirjoita funktio onkoPalindromi, joka ottaa merkkijonon parametrina ja palauttaa true, 
// jos se on palindromi (luetaan samalla tavalla eteen- ja taaksepäin), muuten false konsoliin.


function onkoPalindromi(merkkijono4) {

    let toisinpäin = merkkijono4.split('').reverse().join('');

    return merkkijono4 === toisinpäin;
}

console.log(onkoPalindromi("saippuakauppias"));
console.log(onkoPalindromi("oijoi"));









// F15. Kirjoita funktio onkoAnagrammi, joka ottaa kaksi merkkijonoa parametreina ja palauttaa true, jos ne ovat toistensa anagrammeja
//  (sisältävät samat kirjaimet eri järjestyksessä), muuten false konsoliin.

// opiskelin myös sortin. sort järjestää merkit aakkosjärjestykseen. Kun molemmat sanat järjestetään aakkosjärjestykseen, pitäisi 
// niistä tulla sama merkkijono molemmista, jos ne ovat anagrammi.


function onkoAnagrammi(merkkijono5, merkkijono6) {
    let järkätty1 = merkkijono5.split('').sort().join('');
    let järkätty2 = merkkijono6.split('').sort().join('');
    return järkätty1 === järkätty2;
}

console.log(onkoAnagrammi("kaappi", "aapkip"));
console.log(onkoAnagrammi("justiinsa", "joo"));






// F16. Kirjoita funktio laskeTaulukonKeskiarvo, joka ottaa taulukon numeroparametrina ja palauttaa niiden keskiarvon konsoliin.



function laskeTaulukonKeskiarvo(pisteet) {

    let pisteidensumma = 0;
    for (let i = 0; i < pisteet.length; i++) {
        pisteidensumma += pisteet[i];
    }

    return pisteidensumma / pisteet.length;
}

console.log(laskeTaulukonKeskiarvo([1, 3, 4, 4, 4, 5, 4, 8, 17]));



// F17. Kirjoita funktio onkoKarkausvuosi, joka ottaa vuosiluvun parametrina ja palauttaa true, jos se on karkausvuosi 
// (divisio neljällä ilman jakojäännöstä, mutta ei sadalla), muuten false konsoliin.

// tässä oleellinen oivallus oli että !== tarkoittaa että EI ole sama kuin.

function onkoKarkausvuosi(vuosi) {
    return (vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0);
}

console.log(onkoKarkausvuosi(2024));
console.log(onkoKarkausvuosi(1900));
console.log(onkoKarkausvuosi(2003));









// F18. Kirjoita funktio onkoTaulukkoJarjestetty, joka ottaa taulukon numeroparametrina ja palauttaa true, 
// jos taulukko on järjestetty nousevaan järjestykseen, muuten false konsoliin.


function onkoTaulukkoJarjestetty(lukuja) {

    for (let i = 0; i < lukuja.length - 1; i++) {
        if (lukuja[i] > lukuja[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(onkoTaulukkoJarjestetty([1, 2, 3, 4, 5]));
console.log(onkoTaulukkoJarjestetty([1, 3, 2, 4, 5]));









// F19. Kirjoita funktio muutaEkaKirjainIsoksi, joka ottaa merkkijonon parametrina ja palauttaa saman merkkijonon, 
// mutta ensimmäinen kirjain isona konsoliin.


// Uusi asia toUpperCase ja slice. [0] kertoo monesko merkki muutetaan isoksi ja toUpperCase muuttaa sen isoksi. Eli tässä tapauksessa ensimmäinen kirjain muutetaan.
// jos sliceä ei olisi tässä niin tulostuisi pelkkä H. slice(1) tarkoittaa että merkkijonon toisesta kirjaimesta eteenpäin kirjoitetaan taas.

function muutaEkaKirjainIsoksi(merkkijono) {
    if (merkkijono.length === 0) {
        return merkkijono;
    }
    return merkkijono[0].toUpperCase() + merkkijono.slice(1);
}

console.log(muutaEkaKirjainIsoksi("hello"));
console.log(muutaEkaKirjainIsoksi("world"));










// F20. Kirjoita funktio laskeFibonacci, joka ottaa kokonaisluvun n parametrina ja palauttaa Fibonacci-sarjan n-s jäsenen konsoliin.

function laskeFibonacci(n) {

    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

console.log(laskeFibonacci(0));
console.log(laskeFibonacci(1));
console.log(laskeFibonacci(14));