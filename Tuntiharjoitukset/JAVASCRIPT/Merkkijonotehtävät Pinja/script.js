// Tulosta tekstin merkkimäärä.
// Lähtötiedot:

const teksti1 = 'JavaScript';

console.log(teksti1.length);



// Muunna teksti isoiksi kirjaimiksi.
// Lähtötiedot:

const teksti2 = 'hei';
console.log(teksti2.toUpperCase());


// Muunna teksti pieniksi kirjaimiksi.
// Lähtötiedot:

const teksti3 = 'HEI';
console.log(teksti3.toLowerCase());



// Tarkista, sisältääkö sana merkkijonon Script.
// Lähtötiedot:

const sana = 'JavaScript';
console.log(sana.includes('Script'));



// Poista tekstin alun ja lopun välilyönnit.
// Lähtötiedot:
    
const teksti4 = '  Aino  ';
console.log(teksti4.trim());



// Tulosta sanan 'Ohjelmointi' ensimmäinen merkki.


const sana2 = 'Ohjelmointi';
console.log(sana2[0]);

 
// Tulosta tekstin 'JavaScript!' viimeinen merkki pituuden avulla.


const teksti5 = 'JavaScript!';
console.log(teksti5[teksti5.length - 1]);


// Muunna teksti '  AINO  ' pieniksi kirjaimiksi ja poista reunavälit.

const teksti6 = '  AINO  ';
console.log(teksti6.trim().toLowerCase());


// Selvitä indexOf-metodilla, mistä kohdasta 'Script' alkaa tekstissä 'JavaScript'.

const teksti7 = 'JavaScript';
console.log(teksti7.indexOf('Script'));

// Poimi sanasta 'Tietokone' viisi ensimmäistä merkkiä slice-metodilla.

const sana3 = 'Tietokone';
console.log(sana3.slice(0, 5));



// Muuta tekstin 'Pidän kahvista' sana 'kahvista' sanaksi 'teestä'.

const teksti8 = "Pidän kahvista";

const tekstimuutettu = teksti8.replace("kahvista", "teestä");

console.log(tekstimuutettu);




// Jaa teksti 'punainen,vihreä,sininen' taulukoksi pilkun kohdalta.


const teksti9 = "punainen, vihreä, sininen";

const tekstiTaulukoksi = teksti9.split(",");

console.log(tekstiTaulukoksi);



// Yhdistä taulukko ['HTML','CSS','JavaScript'] tekstiksi, jossa sanat erotetaan ' / '-merkeillä.


const taulukko = ['HTML','CSS','JavaScript'];

const taulukkoTekstiksi = taulukko.join(" / ")

console.log(taulukkoTekstiksi);



// Tutki startsWith-metodilla, alkaako 'JS-2026-01' tekstillä 'JS-'.

const teksti10 = 'JS-2026-01';
console.log(teksti10.startsWith('JS-'));





// Selvitä endsWith-metodilla, päättyykö 'kuva.png' merkkijonoon '.png'.

const teksti11 = 'kuva.png';
console.log(teksti11.endsWith('.png'));




// Laske for...of-silmukalla, kuinka monta a-, e-, i-, o- tai u-kirjainta sanassa 'autokoulu' on.

const sana4 = 'autokoulu';
let vokaalienMaara = 0;
for (const merkki of sana4) {
    if ('aeiou'.includes(merkki)) {
        vokaalienMaara++;
    }
}
console.log(vokaalienMaara);



// Käännä merkkijono 'kissa' silmukalla ilman reverse-metodia.

const sana5 = 'kissa';
let kaannetty = '';
for (const merkki of sana5) {
    kaannetty = merkki + kaannetty;
}
console.log(kaannetty);


// Teksti on 'ABC123456'. Näytä vain kolme ensimmäistä merkkiä ja korvaa loput tähdillä repeat-metodilla.

const teksti12 = 'ABC123456';
const kolmeEnsimmista = teksti12.slice(0, 3);
const loputTahdilla = '*'.repeat(teksti12.length - 3);
console.log(kolmeEnsimmista + loputTahdilla);


// Laske tekstin '  Opiskelen JavaScriptiä tänään  ' sanojen määrä trim- ja split-metodeilla.

const teksti13 = '  Opiskelen JavaScriptiä tänään  ';
const sanat = teksti13.trim().split(' ');
console.log(sanat.length);




// Tee funktio, joka tarkistaa, onko 'saippuakauppias' sama etu- ja takaperin.

function onPalindromi(teksti) {
    const kaannetty = teksti.split('').reverse().join('');
    return teksti === kaannetty;
}

const sana6 = 'saippuakauppias';
console.log(onPalindromi(sana6));

