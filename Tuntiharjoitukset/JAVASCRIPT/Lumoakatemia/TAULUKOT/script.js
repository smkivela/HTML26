// T01. Luo taulukko nimeltä 'kauppalista' ja lisää siihen joitakin ostettavia tuotteita (esim. 'maito', 'leipä', 'omenat'). Tulosta koko kauppalista konsoliin


const kauppalista = ["kananmunat", "mustikat", "banaani", "leipä"];

console.log(kauppalista);





// T02. Luo taulukko, joka sisältää viisi eri nimeä ja tulosta taulukko konsoliin


const nimet = ["aino", "matti", "pekka", "jari", "liisa"];

console.log(nimet);





// T03. Laske taulukon pituus, kun taulukko = [1, 2, 3, 4, 5]. Tulosta pituus konsoliin

const taulukko = [1, 2, 3, 4, 5];

console.log(taulukko.length);




// T04. Lisää uusi nimi taulukkoon (["Matti", "Anna", "Eeva"]) ja tulosta taulukko


const nimet2 = ["Matti", "Anna", "Eeva"];

nimet2.push("Theodor");

console.log(nimet2);




// T05. Yhdistä seuraavat taulukot (taul1 = [1, 2, 3] ja taul2 = [4, 5, 6]) ja tulosta yhdistetty taulukko consoliin





const taul1 = [1, 2, 3];
const taul2 = [4, 5, 6];

const yhdistetty = taul1.concat(taul2);
console.log(yhdistetty);



// T06. Luo uusi taulukko, joka sisältää vain parilliset numerot alkuperäisestä taulukosta ([1, 2, 3, 4, 5, 6 7, 8, 9, 10] ja tulosta uusi taulukko konsoliin.


const alkuperainen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parilliset = alkuperainen.filter(numero => numero % 2 === 0);
console.log(parilliset);



// T07. Lajittele taulukko ([5, 2, 9, 1, 5, 8, 3])nousevaan järjestykseen ja tulosta lajiteltu taulukko konsoliin

const taulukko2 = [5, 2, 9, 1, 5, 8, 3];
taulukko2.sort();
console.log(taulukko2);





// T08. Käännä taulukko ([1, 2, 3, 4, 5]) ympäri niin, että viimeisestä alkiosta tulee ensimmäinen ja päinvastoin ja tulosta käännetty taulukko konsoliin

const taulukko3 = [1, 2, 3, 4, 5];
taulukko3.reverse();
console.log(taulukko3);






// T09. Muuta taulukko (["Matti", "Anna", "Eeva"]) merkkijonoksi, jossa alkiot ovat pilkuilla eroteltuja ja tulosta merkkijono konsoliin


const nimitaulukko = ["Matti", "Anna", "Eeva"];

console.log(nimitaulukko.join(", "));





// T10. Poista taulukosta ([1, 2, 3, 4, 5]) kolmas alkio ja tulosta taulukko konsoliin


const numerotaulukko = [1, 2, 3, 4, 5];

numerotaulukko.splice(2, 1);

console.log(numerotaulukko);





// T11. Etsi taulukosta tietty alkio ja palauta sen indeksi consoliin. Palauta myös viesti, jos alkiota ei löytynyt


const etsittäväalkio = [4, 6, 78, 5];


const etsittävä = 6;
const indeksi2 = etsittäväalkio.indexOf(etsittävä);
if (indeksi2 !== -1) {
    console.log(`Alkio löytyi indeksistä: ${indeksi2}`);
} else {
    console.log("Alkiota ei löytynyt");
}




// T12. Kopioi taulukosta ([1, 2, 3, 4, 5]) kaksi viimeisintä uuteen taulukkoon ja tulosta uusi taulukko consoliin


const numerotaulukko2 = [1, 2, 3, 4, 5];

const kopio = numerotaulukko2.splice(3);

console.log(kopio);





// T13. Muuta taulukon ([1, 2, 3, 4, 5]) keskimmäinen jäsen 6:ksi ja tulosta taulukko konsoliin



const numerotaulukko3 = [1, 2, 3, 4, 5]; 

numerotaulukko3[2] = 6;
console.log(numerotaulukko3);


// T14. Laske taulukon ([1, 2, 3, 4, 5]) arvot yhteen ja tulosta summa konsoliin


const numerotaulukko4 = [1, 2, 3, 4, 5];
let summa = 0;

for (let i = 0; i < numerotaulukko4.length; i++) {
    summa += numerotaulukko4[i];
}
console.log(summa);






// T15. Laske taulukon ([1, 2, 3, 4, 5]) arvojen keskiarvo ja tulosta se konsoliin

const numerotaulukko5 = [1, 2, 3, 4, 5];
let summa2 = 0;

for (let i = 0; i < numerotaulukko5.length; i++) {
    summa2 += numerotaulukko5[i];
}
const keskiarvo = summa2 / numerotaulukko5.length;
console.log(keskiarvo);






// T16. Luo uusi taulukko, jossa on alkuperäisen taulukon ([1, 2, 3]) arvot monistettu 3 kertaa ja tulosta uusi taulukko konsoliin

const alkuperäinen = [1, 2, 3];
const monistettu = ([...alkuperäinen, ...alkuperäinen, ...alkuperäinen]);
console.log(monistettu);






// T17. Luo uusi taulukko, joka sisältää uniikit arvot alkuperäisestä taulukosta ([1, 2, 2, 3, 4, 4, 5]) ja tulosta uusi taulukko konsoliin

const alkuperäinen2 = [1, 2, 2, 3, 4, 4, 5];
const uniikit = [...new Set(alkuperäinen2)];
console.log(uniikit);



// T18. Vaihda taulukon ([1, 2, 3, 4, 5]) ensimmäisen ja viimeisen alkion paikkoja ja tulosta taulukko konsoliin

const numerotaulukko6 = [1, 2, 3, 4, 5];
const ensimmäinen = numerotaulukko6[0];
const viimeinen = numerotaulukko6[numerotaulukko6.length - 1];
numerotaulukko6[0] = viimeinen;
numerotaulukko6[numerotaulukko6.length - 1] = ensimmäinen;
console.log(numerotaulukko6);