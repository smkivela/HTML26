
// LUODAAN MUUTTUJAT //


const etunimet = document.getElementById("etunimet");
const sukunimi = document.getElementById("sukunimi");
const opiskelijanumero = document.getElementById("opiskelijanumero");
const sähköposti = document.getElementById("mail");
const puhelinnumero = document.getElementById("puhelinnumero");
const katuosoite = document.getElementById("osoite");
const postinumero = document.getElementById("postinumero");
const postitoimipaikka = document.getElementById("paikka");
const nappi = document.getElementById("nappi");


const oppilaslista = document.getElementById("oppilaslista");
let muokattavaRivi = null;

// TEHDÄÄN FUNKTIOt, JOTKA LISÄÄVÄT UUDEN RIVIN TAULUKKOON NAPPIA PAINAMALLA//

nappi.addEventListener("click", function() {

    
    
    const uusirivi = document.createElement("tr")
    
    const etunimetSolu = document.createElement("td");
    const sukunimiSolu = document.createElement("td");
    const opiskelijanumeroSolu = document.createElement("td");
    const sähköpostiSolu = document.createElement("td");
    const puhelinnumeroSolu = document.createElement("td");
    const katuosoiteSolu = document.createElement("td");
    const postinumeroSolu = document.createElement("td");
    const postitoimipaikkaSolu = document.createElement("td");

// LISÄTÄÄN UUDEN RIVIN SOLUIHIN KÄYTTÄJÄN SYÖTTÄMÄT TIEDOT //
    
    
    etunimetSolu.textContent = etunimet.value;
    sukunimiSolu.textContent = sukunimi.value;
    opiskelijanumeroSolu.textContent = opiskelijanumero.value;
    sähköpostiSolu.textContent = sähköposti.value;
    puhelinnumeroSolu.textContent = puhelinnumero.value;
    katuosoiteSolu.textContent = katuosoite.value;
    postinumeroSolu.textContent = postinumero.value;
    postitoimipaikkaSolu.textContent = postitoimipaikka.value;



// LISÄTÄÄN UUSI RIVI TAULUKKOON //


    uusirivi.appendChild(etunimetSolu);
    uusirivi.appendChild(sukunimiSolu);
    uusirivi.appendChild(opiskelijanumeroSolu);
    uusirivi.appendChild(sähköpostiSolu);
    uusirivi.appendChild(puhelinnumeroSolu);
    uusirivi.appendChild(katuosoiteSolu);
    uusirivi.appendChild(postinumeroSolu);
    uusirivi.appendChild(postitoimipaikkaSolu);

    oppilaslista.appendChild(uusirivi);

    // MUOKKAA-NAPPI //
    
    const toiminnotSolu = document.createElement("td");
    const muokkaaNappi = document.createElement("button");
    muokkaaNappi.textContent = "Muokkaa";
    toiminnotSolu.appendChild(muokkaaNappi);
    uusirivi.appendChild(toiminnotSolu);
    
    
    muokkaaNappi.addEventListener("click", function() {

        if (muokattavaRivi) {

            muokattavaRivi.children[0].textContent = etunimet.value;
            muokattavaRivi.children[1].textContent = sukunimi.value;
            muokattavaRivi.children[2].textContent = opiskelijanumero.value;
            muokattavaRivi.children[3].textContent = sähköposti.value;
            muokattavaRivi.children[4].textContent = puhelinnumero.value;
            muokattavaRivi.children[5].textContent = katuosoite.value;
            muokattavaRivi.children[6].textContent = postinumero.value;
            muokattavaRivi.children[7].textContent = postitoimipaikka.value;

            nappi.textContent = "Lisää opiskelija";
            muokattavaRivi = null;

            etunimet.value = "";
            sukunimi.value = "";
            opiskelijanumero.value = "";
            sähköposti.value = "";
            puhelinnumero.value = "";
            katuosoite.value = "";
            postinumero.value = "";
            postitoimipaikka.value = "";

            return;
        }
    
        const muokattavaRivi = muokkaaNappi.closest("tr");
        const etunimetSolu = muokattavaRivi.children[0];
        const sukunimiSolu = muokattavaRivi.children[1];
        const opiskelijanumeroSolu = muokattavaRivi.children[2];
        const sähköpostiSolu = muokattavaRivi.children[3];
        const puhelinnumeroSolu = muokattavaRivi.children[4];
        const katuosoiteSolu = muokattavaRivi.children[5];
        const postinumeroSolu = muokattavaRivi.children[6];
        const postitoimipaikkaSolu = muokattavaRivi.children[7];
    
        etunimet.value = etunimetSolu.textContent;
        sukunimi.value = sukunimiSolu.textContent;
        opiskelijanumero.value = opiskelijanumeroSolu.textContent;
        sähköposti.value = sähköpostiSolu.textContent;
        puhelinnumero.value = puhelinnumeroSolu.textContent;
        katuosoite.value = katuosoiteSolu.textContent;
        postinumero.value = postinumeroSolu.textContent;
        postitoimipaikka.value = postitoimipaikkaSolu.textContent;
    
        
        nappi.textContent = "Tallenna muutokset";
        
        oppilaslista.removeChild(muokattavaRivi);
    });
});








// LAMPPUTREENI //

const lamppu = document.getElementById("lamppu")

lamppu.addEventListener("click", function() {

    if (lamppu.src.includes("Kuvat/lamppusam.png")) {
        lamppu.src = "Kuvat/lamppusyt.png";
    } else {
        lamppu.src = "Kuvat/lamppusam.png";
    }


});




