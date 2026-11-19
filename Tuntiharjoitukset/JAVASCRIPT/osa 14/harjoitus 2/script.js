const nimi = document.getElementById("nimi");
const aihe = document.getElementById("aihe");
const viesti = document.getElementById("viesti");
const laheta = document.getElementById("laheta");
const ilmoitus = document.getElementById("ilmoitus");

function tallennaLuonnos() {
    const luonnos = {
        nimi: nimi.value,
        aihe: aihe.value,
        viesti: viesti.value
    };

    sessionStorage.setItem("luonnos", JSON.stringify(luonnos));
}


nimi.addEventListener("input", tallennaLuonnos);
aihe.addEventListener("input", tallennaLuonnos);
viesti.addEventListener("input", tallennaLuonnos);


const tallennettu = sessionStorage.getItem("luonnos");

if (tallennettu) {
   
    const luonnos = JSON.parse(tallennettu);
    nimi.value = luonnos.nimi;
    aihe.value = luonnos.aihe;
    viesti.value = luonnos.viesti;
}


laheta.addEventListener("click", function () {
    sessionStorage.removeItem("luonnos");
    nimi.value = "";
    aihe.value = "";
    viesti.value = "";
    ilmoitus.textContent = "Viesti lähetetty!";
});
