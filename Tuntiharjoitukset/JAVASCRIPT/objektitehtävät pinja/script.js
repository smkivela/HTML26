// Luo opiskelija-olio ja tulosta nimi.
// Lähtötiedot:

const opiskelija = { nimi: 'Aino', pisteet: 82 };

console.log(opiskelija.nimi);

// Kasvata olion pisteitä viidellä.

opiskelija.pisteet += 5;

console.log(opiskelija);








// Lue olion ominaisuus hakasulkunotaatiolla.
// Lähtötiedot:

const tuote = { hinta: 20 };

console.log(tuote["hinta"]);








// Tulosta taulukon ensimmäisen olion nimi.
// Lähtötiedot:

const opiskelijat = [{ nimi: 'Aino' }, { nimi: 'Mika' }];


console.log(opiskelijat[0].nimi);






// Lue sisäkkäisen olion kaupungin nimi.
// Lähtötiedot:

const henkilo = { osoite: { kaupunki: 'Helsinki' } };

console.log(henkilo.osoite.kaupunki);





// Luo tuote-olio, jossa nimi on 'Kynä', hinta 2.5 ja varastossa 12. Tulosta kuvaava viesti.

const tuotekortti = {nimi: "Kynä", hinta: 2.5, varastossa: 12};

console.log(`Tuotteen nimi: ${tuotekortti.nimi}. Hinta on: ${tuotekortti.hinta} euroa. Tuotteita jäljellä ${tuotekortti.varastossa} kappaletta.`);



// Lisää olioon {nimi:'Sara'} ominaisuus aktiivinen arvolla true ja tulosta olio.

const nimiolio = {nimi:'Sara'};

nimiolio.aktiivinen = true;

console.log(nimiolio);




// Poista olion {nimi:'Aino',vanhaNumero:'123',puhelin:'456'} vanhaNumero-ominaisuus.

const yhteystiedot = {nimi:'Aino', vanhaNumero:'123', puhelin:'456'};
delete yhteystiedot.vanhaNumero;
console.log(yhteystiedot);






// Olio on {nimi:'Mika',ika:21} ja kentän nimi on muuttujassa 'ika'. Tulosta kentän arvo hakasulkunotaatiolla.

const olio = {nimi:'Mika', ika:21};
const kentta = 'ika';
console.log(olio[kentta]);




// Tarkista, onko oliolla {nimi:'Liisa',email:'liisa@example.fi'} oma email-ominaisuus.

const henkilo2 = {nimi:'Liisa', email:'liisa@example.fi'};
console.log(henkilo2.hasOwnProperty('email'));





// Tulosta olion {nimi:'Kahvi',hinta:4,maara:6} avaimet Object.keys-metodilla.

const tuote2 = {nimi:'Kahvi', hinta:4, maara:6};
console.log(Object.keys(tuote2));




// Muodosta oliosta {tammi:12,helmi:18,maalis:15} taulukko sen arvoista.

const kuukaudet = {tammi:12, helmi:18, maalis:15};
console.log(Object.values(kuukaudet));





// Tulosta kaupungin ja kadun nimi oliosta {nimi:'Sara',osoite:{katu:'Asematie 3',kaupunki:'Kerava'}}.

const sara = {nimi:'Sara', osoite:{katu:'Asematie 3', kaupunki:'Kerava'}};
console.log(sara.osoite.kaupunki);
console.log(sara.osoite.katu);




// Luo alkuperäisestä {nimi:'Kynä',hinta:2} spread-syntaksilla uusi olio, jossa hinta on 3. Alkuperäinen ei saa muuttua.

const kynä = {nimi:'Kynä', hinta:2};
const uusiKynä = {...kynä, hinta:3};
console.log(uusiKynä);
console.log(kynä);




// Yhdistä oletukset {teema:'vaalea',kieli:'fi'} ja käyttäjän asetukset {teema:'tumma'} niin, että käyttäjän arvo voittaa.

const oletukset = {teema:'vaalea', kieli:'fi'};
const kayttajanAsetukset = {teema:'tumma'};
const yhdistetty = {...oletukset, ...kayttajanAsetukset};
console.log(yhdistetty);



// Poimi oliosta {nimi:'Aino',pisteet:85} muuttujat nimi ja pisteet destrukturoinnilla.

const opiskelija2 = {nimi:'Aino', pisteet:85};
const {nimi, pisteet} = opiskelija2;
console.log(nimi);
console.log(pisteet);




// Laske olioita sisältävästä taulukosta [{nimi:'A',hinta:4},{nimi:'B',hinta:9}] hintojen summa.

const tuotteet = [{nimi:'A', hinta:4}, {nimi:'B', hinta:9}];
const summa = tuotteet.reduce((iteraatio, tuote) => iteraatio + tuote.hinta, 0);
console.log(summa);




// Poimi opiskelijoista [{nimi:'Aino',p:70},{nimi:'Mika',p:42},{nimi:'Sara',p:91}] yli 60 pisteen opiskelijat.

const opiskelijat3 = [{nimi:'Aino', p:70}, {nimi:'Mika', p:42}, {nimi:'Sara', p:91}];
const yli60 = opiskelijat.filter(opiskelija => opiskelija.p > 60);
console.log(yli60);




// Tee funktio, joka vähentää tuotteen varastosaldoa annetulla määrällä vain, jos saldo riittää. Käytä tuotetta {nimi:'Kahvi',saldo:8} ja kokeile määrää 3.

const tuote3 = {nimi:'Kahvi', saldo:8};
function vahennaSaldoa(tuote, maara) {
    if (tuote.saldo >= maara) {
        tuote.saldo -= maara;
        return true;
    } else {
        return false;
    }
}
const onnistui = vahennaSaldoa(tuote3, 3);
console.log(onnistui);
console.log(tuote3);




// Laske tilausten [{tuote:'A',hinta:10,maara:2},{tuote:'B',hinta:5,maara:4}] loppusumma ja tee uusi olio, jossa on tilausten määrä ja summa.
const tilaukset = [{tuote:'A', hinta:10, maara:2}, {tuote:'B', hinta:5, maara:4}];
const loppusumma = tilaukset.reduce((summa, tilaus) => summa + tilaus.hinta * tilaus.maara, 0);
const tulos = {maara: tilaukset.length, summa: loppusumma};
console.log(tulos);