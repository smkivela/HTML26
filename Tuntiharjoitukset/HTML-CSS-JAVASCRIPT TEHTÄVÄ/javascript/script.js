
// LUODAAN MUUTTUJAT //


const etunimet = document.getElementById("etunimet");
const sukunimi = document.getElementById("sukunimi");
const opiskelijanumero = document.getElementById("opiskelijanumero");
const sähköposti = document.getElementById("sähköposti");
const puhelinnumero = document.getElementById("puhelinnumero");
const katuosoite = document.getElementById("katuosoite");
const postinumero = document.getElementById("postinumero");
const postitoimipaikka = document.getElementById("postitoimipaikka");
const nappi = document.getElementById("nappi");


const oppilaslista = document.getElementById("oppilaslista");
const uusirivi = document.createElement("tr")
const etunimetSolu = document.createElement("td");

etunimetSolu.textContent = etunimet.value;




// LAMPPUTREENI //

const lamppu = document.getElementById("lamppu")

lamppu.addEventListener("click", function() {

    if (lamppu.src.includes("Kuvat/lamppusam.png")) {
        lamppu.src = "Kuvat/lamppusyt.png";
    } else {
        lamppu.src = "Kuvat/lamppusam.png";
    }


});




