
let nimi = document.getElementById("preview");

const nimiInput = document.getElementById("name");

const merkkimäärä = document.getElementById("Merkkimäärä");

const ilmoitus = document.getElementById("ilmoitus");

document.getElementById("name").addEventListener("input", function(){
   
   if (nimiInput.value === ""){
    nimi.textContent = "vieras";
   }
   else {

     nimi.textContent = nimiInput.value;
   }

   console.log(nimiInput.value.length);


   merkkimäärä.textContent = nimiInput.value.length;

   if (nimiInput.value.length >= 30) {
    ilmoitus.textContent = "Merkkimäärä täyttyi!";
   } else {
    ilmoitus.textContent = "";
   }
});




