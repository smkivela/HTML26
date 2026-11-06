const opiskelijaObjekti = {
    nimi: "Aino",
    ika: 25,
    ala: "ohjelmistokehitys",
    aktiivinen: true
};
 
opiskelijaObjekti.ika = 21;
opiskelijaObjekti.pisteet = 82;

 

opiskelijaObjekti.esittele = function() {
    console.log("Nimi:", opiskelijaObjekti.nimi);
    console.log("Ikä:", opiskelijaObjekti.ika);
    console.log("Ala:", opiskelijaObjekti.ala);
    console.log("Pisteet:", opiskelijaObjekti.pisteet);
}; 

opiskelijaObjekti.esittele();


opiskelijaObjekti.yhteysTiedot = { osoite: "Keulatie 5", puhnumero: "0400721586", sahkoposti: "aino@example.com" }
console.log(opiskelijaObjekti);
console.log(opiskelijaObjekti.yhteysTiedot?.sahkoposti);
