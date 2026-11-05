const tuotteet = [
    {nimi: "Hiiri", hinta: 25, saldo: 4 },
    {nimi: " Näyttö", hinta: 240, saldo: 0 },
    {nimi:"Kaapeli", hinta: 12, saldo: 7 },

];

const saatavilla = tuotteet.filter((tuote) => tuote.saldo > 0);

const pelkätnimet = saatavilla.map((tuote) => tuote.nimi);

const alvillisethinnat = saatavilla.map((tuote) => tuote.hinta * 1.255);

