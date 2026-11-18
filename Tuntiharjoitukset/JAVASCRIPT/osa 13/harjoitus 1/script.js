const kortit = document.getElementById("kortit");



async function haeKayttajat() {

    try {
        
    const response = await fetch ("https://randomuser.me/api/?results=10");

        if (!response.ok) {
            throw new Error ("Sivu ei vastannut.")
        }

    const data = await response.json();

    
        data.results.forEach(kayttaja => {
            
            const kortti = document.createElement("article")
            kortti.classList.add("kortti");

            const nimi = document.createElement("h2")
            nimi.textContent = `${kayttaja.name.first} ${kayttaja.name.last}`;

            const email = document.createElement("p");
            email.textContent = kayttaja.email;

            const kaupunki = document.createElement("p");
            kaupunki.textContent = kayttaja.location.city;

            kortti.append (nimi, email, kaupunki);
            kortit.append (kortti);
        });


    }




    catch (error) {
        document.getElementById("error").textContent = error.message;
    }

}

haeKayttajat();
