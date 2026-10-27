// S01 ------------------------------------------------------------------

const lainasumma = 5000;
const korko = 0.02;
const aika = 2;

for (let i = 1; i <= aika; i++) {
    console.log(`Korkosumma on yhteensä ${lainasumma*korko*aika} €`);
}







// S02 ---------------------------------------------------------------------


const luku1 = 7;
let tulos = 1;

for (let i = luku1; i > 0; i--) {
    tulos *= i;
}

console.log(`Luvun ${luku1} kertoma on ${tulos}  `);







// S04 -----------------------------------------------------------------------


const sana = "Roskakuski"
let reverse = "";

for (let i = sana.length - 1; i >= 0; i--) {
    reverse += sana[i]
}

console.log(`Sana "${sana}" on toisinpäin "${reverse}"`);







// S06 ----------------------------------------------------------------------


const pisteet = [6,7,2,4,3,8,1];

let summa = 0;

for (let i = 0; i < pisteet.length; i++) {
    summa += pisteet[i];
}

console.log(`Pisteet ovat ${pisteet}. Pisteiden keskiarvo: ${summa/pisteet.length}`);



// S10 ---------------------------------------------------------------------


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Viisitoista");
    } else if (i % 5 === 0) {
        console.log("Viisi");
    } else if (i % 3 === 0) {
        console.log("Kolme");
    } else {
        console.log(i);
    }
}







// S11 ---------------------------------------------------------------------


const ekaluku = 0;
const tokaluku = 1;

let edellistensumma = ekaluku+tokaluku;

let fibonacciluvut = [ekaluku, tokaluku];

// En keksinyt ratkaisua silmukalle. Copilot ehdotti pushia, joten selvitin mitä se tekee.

for (let i = 3; i <= 10; i++) {
    edellistensumma = fibonacciluvut[fibonacciluvut.length - 1] + fibonacciluvut[fibonacciluvut.length - 2];
    fibonacciluvut.push(edellistensumma);
}
console.log(`Kymmenen ensimmäistä Fibonaccin lukua: ${fibonacciluvut}`);









// S12 ---------------------------------------------------------------------

const onkopalindromi = "saippuakauppias";

let reverse2 = "";

for(let i = onkopalindromi.length - 1; i >= 0; i--) {
    reverse2 += onkopalindromi[i];
}

if (reverse2 === onkopalindromi) {
    console.log("Sana on palindromi!!!!!")
} else {
    console.log("Sana ei todellakaan ole palindromi :(")
}







// S13 ---------------------------------------------------------------------


const ekaluku2 = 0;
const tokaluku2 = 1;

let edellistensumma2 = ekaluku2+tokaluku2;

let fibonacciluvut2 = [0,1];

for (let i = 3; i <= 10; i++) {
    edellistensumma2 = fibonacciluvut2[fibonacciluvut2.length - 1] + fibonacciluvut2[fibonacciluvut2.length - 2];
    fibonacciluvut2.push(edellistensumma2);
}
for (let i = 0; i < fibonacciluvut2.length; i++) {
    if (fibonacciluvut2[i] % 2 === 0) {
        console.log(`Kymmenestä ensimmäisestä fibonaccin luvusta parillisia ovat: ${fibonacciluvut2[i]}`);
    }
}











// S14 ---------------------------------------------------------------------


const ekaluku3 = 0;
const tokaluku3 = 1;

let edellistensumma3 = ekaluku3+tokaluku3;

let fibonacciluvut3 = [0,1];
let parittomienSumma = 0;

for (let i = 3; i <= 10; i++) {
    edellistensumma3 = fibonacciluvut3[fibonacciluvut3.length - 1] + fibonacciluvut3[fibonacciluvut3.length - 2];
    fibonacciluvut3.push(edellistensumma3);
}
for (let i = 0; i < fibonacciluvut3.length; i++) {
    if (fibonacciluvut3[i] % 2 === 1) {
        parittomienSumma += fibonacciluvut3[i];
    }
}
console.log(`Kymmenestä ensimmäisestä fibonaccin luvusta parittomien lukujen summa on ${parittomienSumma}`);







// S15 ---------------------------------------------------------------------




const lukuA = 56;
const lukuB = 98;

// copilot teki, chatgpt selitti ja sen jälkeen kirjoitin itse:

let pienempi = lukuA < lukuB ? lukuA : lukuB;
let suurinYhteinenNimittäjä = 1;

for (let i = 1; i <= pienempi; i++) {
    if (lukuA % i === 0 && lukuB % i === 0) {
        suurinYhteinenNimittäjä = i;
    }
}
console.log(`Lukujen ${lukuA} ja ${lukuB} suurin yhteinen nimittäjä on ${suurinYhteinenNimittäjä}`);



