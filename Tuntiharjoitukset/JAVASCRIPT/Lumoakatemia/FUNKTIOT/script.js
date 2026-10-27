// F01. Kirjoita funktio laskeSumma, joka ottaa kaksi numeroparametria ja palauttaa niiden summan. Testaa funktiota tulostamalla lukujen 3 ja 5 summa konsoliin.



function laskeSumma(luku1, luku2) {
    return luku1 + luku2;
}

console.log("Lukujen summa on " + laskeSumma(5, 3));







// F02. Kirjoita funktio laskeNelionPintaAla, joka ottaa neliön sivun pituuden parametrina ja palauttaa sen pinta-alan. Testaa funktiota tulostamalla lopputulos konsoliin


function laskeNelionPintaAla(sivuPituus) {
    return sivuPituus * sivuPituus;
}

console.log("Neliön pinta-ala on " + laskeNelionPintaAla(7) + " neliömetriä.");








// F03. Kirjoita funktio laskeYmpyranPintaAla, joka ottaa ympyrän säteen parametrina ja palauttaa sen pinta-alan. Käytä Math.PI -vakioita piin arvona. Kaava on Pii * säde2. Testaa funktiota tulostamalla lopputulos konsoliin.


function laskeYmpyranPintaAla(säde) {
    return Math.PI * (säde * säde);
}

console.log("Ympyrän pinta-ala on " + laskeYmpyranPintaAla(5) + " neliösenttimetriä.");









// F04. Kirjoita funktio laskeKeskiarvo, joka ottaa taulukon numeroparametrina ja palauttaa niiden keskiarvon. Testaa funktiota tällä taulukolla: [1, 2, 3, 4, 5] ja tulosta keskiarvo konsoliin

function laskeKeskiarvo(numerotaulukko) {

    let summa = 0;
    for (let i = 0; i < numerotaulukko.length; i++) {
        summa += numerotaulukko[i];
    }

    return summa / numerotaulukko.length;
}

console.log("Taulukon lukujen keskiarvo on " + laskeKeskiarvo([1, 2, 3, 4, 5, 7, 8, 9, 4]));








// F05. Kirjoita funktio onkoParillinen, joka ottaa numeron parametrina ja palauttaa true, jos luku on parillinen, muuten false. Testaa funktiota sekä parillisella, että parittomalla luvulla tulostamalla lopputulokset konsoliin.


function onkoParillinen(numero) {

return numero % 2 === 0;

}

console.log(onkoParillinen(6));
console.log(onkoParillinen(27));









// F06. Kirjoita funktio laskeMerkkijononPituus, joka ottaa merkkijonon parametrina ja palauttaa sen pituuden. Testaa funktiota tulostamalla lopputulos konsoliin

function laskeMerkkijononPituus(merkkijono) {
    return merkkijono.length;
}

console.log(laskeMerkkijononPituus("hui9873hdsb23232"));








// F07. Kirjoita funktio onkoMerkkijonoTyhja, joka ottaa merkkijonon parametrina ja palauttaa true, jos merkkijono on tyhjä, muuten false. Testaa sekä tyhjällä, että 'täydellä' merkkijonolla tulostaen konsoliin vastaukset

function onkoMerkkijonoTyhja(merkkijono2) {
    
}