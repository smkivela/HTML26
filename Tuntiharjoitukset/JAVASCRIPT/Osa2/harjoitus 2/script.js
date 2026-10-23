let kirjautunut = false;
let admin = false;
let opettaja = false;

if (kirjautunut === true && (admin || opettaja === true)) {
    console.log("Muokkausoikeus hyväksytty.")
} else if (kirjautunut === false) {
    console.log("Kirjaudu sisään.")
}  
    else
    {
    console.log("Muokkausoikeus hylätty.")
}

