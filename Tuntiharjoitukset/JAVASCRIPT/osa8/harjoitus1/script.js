


    const nimi = '   Aino Virtanen   ';

// poistin välit:

    const reunatPoisNimi = nimi.trim();

    console.log(reunatPoisNimi);

// kirjaimet pieniksi

    const nimiPienillä = reunatPoisNimi.toLowerCase();

    console.log(nimiPienillä);

// merkkijonon pituus

    console.log(nimiPienillä.length);

// tulostin ensimmäisen ja viimeisen kirjaimen

    console.log(reunatPoisNimi[0]);
    console.log(reunatPoisNimi[reunatPoisNimi.length -1]);


// tein käyttäjätunnuksen replacella


    const käyttäjäTunnus = nimiPienillä.replace(" ", ".")

    console.log(käyttäjäTunnus);







