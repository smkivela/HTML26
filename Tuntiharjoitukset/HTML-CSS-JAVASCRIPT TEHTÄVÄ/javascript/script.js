
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
const lomakeFieldset = document.getElementById("LomakeKentta");

const lomake = document.getElementById("Lomake");


const oppilaslista = document.getElementById("oppilaslista");
let muokattavaRivi = null;

// TEHDÄÄN FUNKTIOt, JOTKA LISÄÄVÄT UUDEN RIVIN TAULUKKOON NAPPIA PAINAMALLA//

lomake.addEventListener("submit", function(event) {
    event.preventDefault();

if (muokattavaRivi) {

    muokattavaRivi.children[0].textContent = etunimet.value;
    muokattavaRivi.children[1].textContent = sukunimi.value;
    muokattavaRivi.children[2].textContent = opiskelijanumero.value;
    muokattavaRivi.children[3].textContent = sähköposti.value;
    muokattavaRivi.children[4].textContent = puhelinnumero.value;
    muokattavaRivi.children[5].textContent = katuosoite.value;
    muokattavaRivi.children[6].textContent = postinumero.value;
    muokattavaRivi.children[7].textContent = postitoimipaikka.value;

    muokattavaRivi = null;
    nappi.textContent = "Lisää opiskelija";
    lomake.reset();
    lomakeFieldset.classList.remove("muokkaus");

    return;
}

    
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

    // LOMAKKEEN TYHJENTÄMINEN //
    lomake.reset();

    // MUOKKAA-NAPPI //
    
    const toiminnotSolu = document.createElement("td");
    const muokkaaNappi = document.createElement("button");
    muokkaaNappi.textContent = "Muokkaa";
    toiminnotSolu.appendChild(muokkaaNappi);
    uusirivi.appendChild(toiminnotSolu);
    
    
    muokkaaNappi.addEventListener("click", function() {

       
    
        muokattavaRivi = muokkaaNappi.closest("tr");
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
        lomakeFieldset.classList.add("muokkaus");
        
        // NAPISTA HYPÄTÄÄN TAKAISIN LOMAKKEESEEN //

        lomake.scrollIntoView({ behavior: "smooth" });
        
    });
});












