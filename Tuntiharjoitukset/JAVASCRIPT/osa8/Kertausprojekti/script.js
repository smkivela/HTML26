function analysoiTeksti(data) {

    const trimmattu = data.trim();
    console.log(trimmattu);

    const pituus = data.length;
    console.log(pituus);



    const sanojenMaara = trimmattu.split(" ").length;
    console.log(sanojenMaara);

    const onkoSana = trimmattu.includes("soikoon");
    console.log(onkoSana);

    const isoilla = trimmattu.toUpperCase();
    console.log(isoilla);

    const pienillä = trimmattu.toLowerCase();
    console.log(pienillä);

    const ensimmäiset = trimmattu.slice(0, 19);
    console.log(ensimmäiset);
}

analysoiTeksti("butti soikoon perkele gggggööööööööööööööööööööö");