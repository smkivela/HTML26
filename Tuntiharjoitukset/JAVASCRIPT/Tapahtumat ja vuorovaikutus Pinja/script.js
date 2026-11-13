// Tulosta viesti painikkeen klikkauksesta. HTML: <button id="nappi">Paina</button>.

// Luo tehtävänannossa mainittu HTML-rakenne ennen JavaScriptin suorittamista.

const viesti = "HELOUST";

document.getElementById("nappi").addEventListener("click", function(){
    console.log(viesti);
});





// Kasvata laskuria painikkeen klikkauksella. HTML: <button id="nappi">Lisää</button>.

// Luo tehtävänannossa mainittu HTML-rakenne ennen JavaScriptin suorittamista.



let laskuri = 0;
const laskuriMäärä = document.getElementById("laskuri");

document.getElementById("nappi2").addEventListener("click", function() {

    laskuri++

    laskuriMäärä.textContent = laskuri;

    
});





// Tulosta tekstikentän sisältö kirjoitettaessa. HTML: <input id="nimi">.

// Luo tehtävänannossa mainittu HTML-rakenne ennen JavaScriptin suorittamista.


let nimi = document.getElementById("nimi");

let nimiLisätty = document.getElementById("nimilisätty");

document.getElementById("nimi").addEventListener("input", function(){

    nimiLisätty.textContent = nimi.value;
    console.log(nimi.value);

});






// Näytä klikatun painikkeen teksti. HTML: <button id="nappi">Hei</button>.

// Luo tehtävänannossa mainittu HTML-rakenne ennen JavaScriptin suorittamista.

const nappi3 = document.getElementById("nappi3");

document.getElementById("nappi3").addEventListener("click", function() {

 console.log(nappi3.textContent);

});






// Tulosta painettu näppäin. HTML: <input id="kentta">.

// Luo tehtävänannossa mainittu HTML-rakenne ennen JavaScriptin suorittamista.




const kentta = document.getElementById("kentta");


kentta.addEventListener("keydown", function (painallus) {

    console.log(painallus.key);

});






// Muuta painikkeen teksti 'Painettu!' klikkauksen jälkeen. HTML: <button id="nappi">Paina</button>.





const nappi4 = document.getElementById("nappi4");

nappi4.addEventListener("click", function(){

    nappi4.textContent = "Painettu!";

});




// Aseta laatikon taustaväriksi 'lightblue' painikkeen klikkauksella. HTML: <button id="vaihda">Vaihda</button><div id="laatikko">Laatikko</div>. classlistin avulla



const laatikko = document.getElementById("laatikko");

document.getElementById("vaihda").addEventListener("click", function(){

        laatikko.classList.add("laatikkotausta");

});




// Näytä teksti 'Hiiri päällä' mouseenter-tapahtumassa. HTML: <div id="alue">Alue</div>.


const alue = document.getElementById("alue");
alue.addEventListener("mouseenter", function(){
    alue.textContent = "Hiiri päällä";
});

alue.addEventListener("mouseleave", function(){
    alue.textContent = "Alue";
});





// Näytä input-kentän sisältö reaaliajassa kappaleessa. HTML: <input id="nimi"><p id="tulos"></p>.




const nimi2 = document.getElementById("nimi2");
let tulos = document.getElementById("tulos");

document.addEventListener("input", function(){

    tulos.textContent = nimi2.value;

})





// Kun käyttäjä painaa Enteriä kentässä, tulosta 'Lähetetty'. HTML: <input id="viesti">.



let ilmoitus = document.getElementById("ilmoitus");

document.getElementById("viesti").addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        ilmoitus.textContent = "Lähetetty";
    }

});















