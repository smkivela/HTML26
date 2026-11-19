const vaaleaNappi = document.getElementById("vaalea");
const tummaNappi = document.getElementById("tumma");
const tila = document.getElementById("tila");

function asetaTeema(teema) {

    if (teema === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
    tila.textContent = "Nykyinen teema: " + teema;
}


vaaleaNappi.addEventListener("click", function () {
    asetaTeema("light");
    localStorage.setItem("teema", "light");
});

tummaNappi.addEventListener("click", function () {
    asetaTeema("dark");
    localStorage.setItem("teema", "dark");
});


const tallennettu = localStorage.getItem("teema"); 

if (tallennettu) {
   
    asetaTeema(tallennettu);
} else {

    const jarjestelmaTumma = window.matchMedia("(prefers-color-scheme: dark)").matches;
    asetaTeema(jarjestelmaTumma ? "dark" : "light");
}
