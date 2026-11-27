

function laskeIka(syntymaaika, tanaan = new Date()) {


    if (!/^\d{4}-\d{2}-\d{2}$/.test(syntymaaika)) {
        return null;
    }

    const [vuosi, kuukausi, paiva] = syntymaaika.split("-").map(Number);

    if (vuosi < 1850) {
        return null;
    }


    const syntyma = new Date(vuosi, kuukausi - 1, paiva);


    if (
        syntyma.getFullYear() !== vuosi ||
        syntyma.getMonth() !== kuukausi - 1 ||
        syntyma.getDate() !== paiva
    ) {
        return null;
    }


    if (syntyma > tanaan) {
        return null;
    }


    let ika = tanaan.getFullYear() - vuosi;

    const tamaKuukausi = tanaan.getMonth() + 1;
    const tamaPaiva = tanaan.getDate();


    if (
        tamaKuukausi < kuukausi ||
        (tamaKuukausi === kuukausi && tamaPaiva < paiva)
    ) {
        ika--;
    }

    return ika;
}


const testi = new Date(2026, 7, 7);

console.log(laskeIka("2000-08-07", testi)); 
console.log(laskeIka("2000-08-08", testi)); 
console.log(laskeIka("2001-02-29", testi)); 
console.log(laskeIka("2027-01-01", testi)); 
console.log(laskeIka("moi", testi));        
