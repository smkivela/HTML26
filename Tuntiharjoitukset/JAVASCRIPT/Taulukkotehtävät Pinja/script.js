// Muodosta lukujen kaksinkertaiset arvot map-metodilla.
// Lähtötiedot:

const luvut = [2, 4, 6];

const kaksinkertaiset = luvut.map(luku => luku * 2);
console.log(kaksinkertaiset);   


// Suodata vähintään 10 suuruiset luvut.
// Lähtötiedot:

const luvut2 = [4, 12, 8, 20];

const suurimmat = luvut2.filter(luku => luku >= 10);
console.log(suurimmat);




// Etsi ensimmäinen yli 10 oleva luku.
// Lähtötiedot:

const luvut3 = [2, 8, 15, 20];
const ekaYliKymmenen = luvut3.find(luku => luku > 10);
console.log(ekaYliKymmenen);




// Tutki, onko jokin luku negatiivinen.
// Lähtötiedot:

const luvut4 = [4, -2, 8];
const onNegatiivinen = luvut4.some(luku => luku < 0);
console.log(onNegatiivinen);




// Laske lukujen summa reduce-metodilla.
// Lähtötiedot:

const luvut5 = [2, 3, 5];
const summa = luvut5.reduce((iteraatio, luku) => iteraatio + luku, 0);
console.log(summa);



// Muunna hinnat [20, 40, 80] map-metodilla 10 % halvemmiksi.

const hinnat = [20, 40, 80];
const alennetutHinnat = hinnat.map(hinta => hinta * 0.9);
console.log(alennetutHinnat);


// Poimi nimistä ['Li','Anna','Mikko','Eevi'] vain vähintään viiden merkin nimet.

const nimet = ['Li','Anna','Mikko','Eevi'];
const pitkätNimet = nimet.filter(nimi => nimi.length >= 5);
console.log(pitkätNimet);



// Etsi paikoista [false,false,true,false] ensimmäinen vapaa (true).

const paikat = [false,false,true,false];
const ekaVapaa = paikat.find(paikka => paikka === true);
console.log(ekaVapaa);



// Tarkista every-metodilla, ovatko pisteet [67,82,49,90] kaikki vähintään 50.

const pisteet = [67,82,49,90];
const kaikkiVähintäänViisikymmentä = pisteet.every(piste => piste >= 50);
console.log(kaikkiVähintäänViisikymmentä);



// Laske ostoskorin [12.5,9.9,3.6] yhteissumma reduce-metodilla.

const ostoskori = [12.5,9.9,3.6];
const yhteissumma = ostoskori.reduce((iteraatio, hinta) => iteraatio + hinta, 0);
console.log(yhteissumma);


// Järjestä nimet ['Veera','Aino','Oona'] aakkosjärjestykseen.

const nimet2 = ['Veera','Aino','Oona'];
const aakkosjärjestys = nimet2.sort();
console.log(aakkosjärjestys);



// Järjestä numerot [12,3,25,8] laskevaan numerojärjestykseen.

const numerot = [12,3,25,8];
const laskevaJärjestys = numerot.sort((a, b) => b - a);
console.log(laskevaJärjestys);




// Selvitä indexOf-metodilla, monesko nimi 'Sara' on taulukossa ['Aino','Sara','Mika'].

const nimet3 = ['Aino','Sara','Mika'];
const saraIndeksi = nimet3.indexOf('Sara');
console.log(saraIndeksi);



// Tarkista includes-metodilla, löytyykö 'kahvi' tuotteista ['tee','mehu','kahvi'].

const tuotteet = ['tee','mehu','kahvi'];
const onKahvi = tuotteet.includes('kahvi');
console.log(onKahvi);




// Laske lukujen [14,18,17,21,20] keskiarvo reduce-metodilla ja length-ominaisuudella.

const luvut6 = [14,18,17,21,20];
const keskiarvo = luvut6.reduce((iteraatio, luku) => iteraatio + luku, 0) / luvut6.length;
console.log(keskiarvo);



// Poimi opiskelijoista [{nimi:'Aino',pisteet:75},{nimi:'Mika',pisteet:45},{nimi:'Sara',pisteet:88}] hyväksyttyjen nimet uuteen taulukkoon (raja 50).

const opiskelijat = [{nimi:'Aino',pisteet:75},{nimi:'Mika',pisteet:45},{nimi:'Sara',pisteet:88}];
const hyvaksytyt = opiskelijat.filter(opiskelija => opiskelija.pisteet >= 50).map(opiskelija => opiskelija.nimi);
console.log(hyvaksytyt);



// Etsi hintojen [14,29,8,41] suurin arvo reduce-metodilla.

const hinnat2 = [14,29,8,41];
const suurinHinta = hinnat2.reduce((max, hinta) => hinta > max ? hinta : max, hinnat2[0]);
console.log(suurinHinta);





// Muodosta luvuista [1,2,3,4,5,6,7,8] taulukko, jossa on ensin parilliset ja sitten parittomat.

const luvut7 = [1,2,3,4,5,6,7,8];
const parilliset = luvut7.filter(luku => luku % 2 === 0);
const parittomat = luvut7.filter(luku => luku % 2 !== 0);
const parillisetSittenParittomat = parilliset.concat(parittomat);
console.log(parillisetSittenParittomat);




// Laske tuotteiden [{hinta:5,maara:3},{hinta:8,maara:2},{hinta:12,maara:1}] kokonaisarvo reduce-metodilla.

const tuotteet2 = [{hinta:5,maara:3},{hinta:8,maara:2},{hinta:12,maara:1}];
const kokonaisarvo = tuotteet2.reduce((summa, tuote) => summa + tuote.hinta * tuote.maara, 0);
console.log(kokonaisarvo);




// Tee luvuista [12,5,18,7,20,9] raportti: yli 10 olevien lukujen määrä, summa ja keskiarvo. Käytä filter- ja reduce-metodeja.

const luvut8 = [12,5,18,7,20,9];
const yliKymmenen = luvut8.filter(luku => luku > 10);
const maara = yliKymmenen.length;
const summa6 = yliKymmenen.reduce((summa, luku) => summa + luku, 0);
const keskiarvo2 = summa6 / maara;
console.log(`Määrä: ${maara}, Summa: ${summa6}, Keskiarvo: ${keskiarvo2}`);
    