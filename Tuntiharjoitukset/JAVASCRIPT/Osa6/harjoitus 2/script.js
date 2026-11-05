const pisteet = [60, 80, 95, 70, 85, 90];

const summa = pisteet.reduce((summa, numero) => {
    return summa + numero;
}, 0);

console.log(summa);

const löytyyköSuuri = pisteet.some (piste => piste >= 95);

console.log(löytyyköSuuri);

const onkoVälillä = pisteet.every(piste => piste >= 0 && piste <= 100);

console.log(onkoVälillä);