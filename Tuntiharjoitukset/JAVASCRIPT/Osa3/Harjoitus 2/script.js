


const pisteet = [8, 7, 6, 9, 10,];

let summa = 0;

for (let i = 0; i < pisteet.length; i++) {
    summa += pisteet[i];
}

const keskiarvo = summa/pisteet.length; {
    console.log(`Pisteiden summa on ${summa}`)
    console.log(`Pisteiden keskiarvo on ${keskiarvo}`)
}