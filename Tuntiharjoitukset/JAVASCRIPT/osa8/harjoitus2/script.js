

const tiedosto = "raportti.PDF";

const tiedostoPienilla = tiedosto.toLowerCase();

const onPdf = tiedostoPienilla.endsWith(".pdf");
console.log(onPdf);


const nimiIlmanPaate = tiedostoPienilla.slice(0, -4);
console.log(nimiIlmanPaate);



