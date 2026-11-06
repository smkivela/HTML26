
const asetukset = { id: 1, teema: 'dark', kieli: 'fi' };


const { teema, kieli } = asetukset;

const { fonttikoko = 16 } = asetukset;
console.log("2. Fonttikoko (puuttuu):", fonttikoko);

const asetukset20 = { ...asetukset, fonttikoko: 20 };
const { fonttikoko: fonttikoko20 = 16 } = asetukset20;
console.log("2. Fonttikoko (20):", fonttikoko20); 

const asetuksetNull = { ...asetukset, fonttikoko: null };
const { fonttikoko: fonttikokoNull = 16 } = asetuksetNull;
console.log("2. Fonttikoko (null):", fonttikokoNull); 

const { id, ...muutAsetukset } = asetukset;
console.log("3. Id:", id);
console.log("3. Muut asetukset:", muutAsetukset); 

function naytaAsetukset({ id, teema = 'light', kieli = 'en', fonttikoko = 16 } = {}) {
    console.log(`Käyttäjä ${id}: teema=${teema}, kieli=${kieli}, fonttikoko=${fonttikoko}`);
}

naytaAsetukset(asetukset);                   
naytaAsetukset(asetukset20);             
naytaAsetukset({ id: 2 });                   
naytaAsetukset();                    
