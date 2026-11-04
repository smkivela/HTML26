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




// T19. Muunna taulukon (["Matti", "Anna", "Eeva"]) merkkijonojen kaikki kirjaimet isoiksi ja tulosta taulukko konsoliin

const nimet5 = ["matti", "anna", "eeva"];
const isotNimet = nimet5.map(nimi => nimi.toUpperCase());
console.log(isotNimet);







// T20. Poista taulukosta ([1, 2, 3, 4, 5]) kaikki neljää pienemmät numerot ja tulosta taulukko konsoliin

const numerot2 = [1, 2, 3, 4, 5];

const vainsuuret = numerot2.filter (numerot2 => numerot2 > 3);

console.log(vainsuuret);





// T21. Lisää luku 4 taulukon [1, 2, 3] loppuun push-metodilla.

const taulukko4 = [1, 2, 3];

taulukko4.push(4);

console.log(taulukko4);





// T22. Poista taulukon ["omena", "banaani", "päärynä"] ensimmäinen alkio shift-metodilla.

const hedelmat = ["omena", "banaani", "päärynä"];
hedelmat.shift();
console.log(hedelmat);





// T23. Lisää "punainen" alkio taulukon ["sininen", "vihreä"] alkuun unshift-metodilla.

const värit = ["sininen", "vihreä"];
värit.unshift("punainen");
console.log(värit);



// T24. Poista taulukon ["koira", "kissa", "lintu"] viimeinen alkio pop-metodilla.

const eläimet = ["koira", "kissa", "lintu"];
eläimet.pop();
console.log(eläimet);




// T25. Etsi alkion "Mikko" indeksi taulukosta ["Anna", "Mikko", "Laura"] indexOf-metodilla.



const nimitaulukko2 = ["Anna", "Mikko", "Laura"];

console.log(nimitaulukko2.indexOf("Mikko"));





// T26. Kopioi b ja c taulukosta ["a", "b", "c", "d"] slice-metodilla.

const taulukko5 = ["a", "b", "c", "d"];
const kopio1 = taulukko5.slice(1, 3);
console.log(kopio1);




// T27. Poista "Helmi" ja lisää "Huhti" taulukosta ["Tammi", "Helmi", "Maalis"] splice-metodilla.

const kuukaudet = ["Tammi", "Helmi", "Maalis"];
kuukaudet.splice(1, 1, "Huhti");
console.log(kuukaudet);



// T28. Yhdistä kaksi taulukkoa [1, 2] ja [3, 4] spread-operaattorilla


const taulu1 = [1, 2];
const taulu2 = [3, 4];

const yhdistetty1 = [...taulu1, ...taulu2];

console.log(yhdistetty1);



// T29. Tee kopio taulukosta ["x", "y", "z"] spread-operaattorilla

const xytaulukko = ["x", "y", "z"];

const kopioxytaulukko = [...xytaulukko];

console.log(kopioxytaulukko);



// T30. Poista kaikki alkiot yhdellä splice-kutsulla taulukosta [10, 20, 30]


const leikattavataulukko = [10, 20, 30];

leikattavataulukko.splice(0, leikattavataulukko.length);

console.log(leikattavataulukko);





// T31. Lisää alkiot 1 ja 2 taulukon [3, 4] alkuun unshift-metodilla



const lisättävätaulukko = [3, 4];

lisättävätaulukko.unshift(1, 2);

console.log(lisättävätaulukko);






// T32. Poista alkio "b" indexOf + splice yhdistelmällä taulukosta ["a", "b", "c"]


const alkiot = ["a", "b", "c"];

const poistettavaindeksi = alkiot.indexOf("b");

alkiot.splice(poistettavaindeksi, 1);
console.log(alkiot);





// T33. Käännä taulukko [1, 2, 3] spread-operaattorilla ja reverse-metodilla

const taulukko6 = [1, 2, 3];
const kaannetty = [...taulukko6].reverse();
console.log(kaannetty);





// T34. Lisää alkio 3 keskelle taulukkoa [1, 2, 4, 5] splice-metodilla.



const taulukko7 = [1, 2, 4, 5];
taulukko7.splice(2, 0, 3);
console.log(taulukko7);

 



// T35. Poista kaikki numero 2:n esiintymät taulukosta [1, 2, 3, 2, 4]

const numerot = [1, 2, 3, 2, 4];
for (let i = numerot.length - 1; i >= 0; i--) {
    if (numerot[i] === 2) {
        numerot.splice(i, 1);
    }
}
console.log(numerot);




//T36. Tarkista, onko "html"-alkio olemassa indexOf-metodilla taulukossa ["js", "html", "css"]

const kielet = ["js", "html", "css"];
const onHtml = kielet.indexOf("html") !== -1;
console.log(onHtml);



// T37. Kopioi taulukon [10, 20, 30, 40] viimeiset 2 alkiota slice-metodilla

const taulukko8 = [10, 20, 30, 40];
const viimeisetKaksi = taulukko8.slice(-2);
console.log(viimeisetKaksi);



// T38. Yhdistä taulukko [1, 2] itseensä kahdesti spread-operaattorilla 

const taulukko9 = [1, 2];
const yhdistetty2 = [...taulukko9, ...taulukko9, ...taulukko9];
console.log(yhdistetty2);


// T39. Poista taulukon [10, 20, 30, 40] ensimmäinen ja viimeinen alkio 

const taulukko10 = [10, 20, 30, 40];
taulukko10.shift();
taulukko10.pop();
console.log(taulukko10);



// T40. Tee uusi taulukko, jossa on alkuperäinen [1, 2, 3, 4, 5] ilman keskimmäistä alkiota 

const alkuperainen2 = [1, 2, 3, 4, 5];
const ilmanKeskimmaista = [...alkuperainen2.slice(0, 2), ...alkuperainen2.slice(3)];
console.log(ilmanKeskimmaista);

