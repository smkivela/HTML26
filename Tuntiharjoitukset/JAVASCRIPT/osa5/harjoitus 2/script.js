const pisteet = [60, 80, 95, 70, 85, 90];

let summa = 0;

const ensimmainen = pisteet.find(piste => piste > 90);
console.log("Ensimmäinen yli 90 pisteen piste on " + ensimmainen);

for(let i = 0; i < pisteet.length; i++) {
    summa += pisteet[i];
}

if (pisteet.length > 0) {
    console.log(`Pisteiden keskiarvo on ${summa/pisteet.length}`);
} else {
    console.log(`Taulukossa ei ole pisteitä`)
}