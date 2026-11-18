
const kayttajaVaatimukset = "https://randomuser.me/api/?results=50&gender=female&nat=fi";


const kortit = document.getElementById("kortit");
const virhe = document.getElementById("error");


async function haeData() {

    try {

        const vastaus = await fetch(kayttajaVaatimukset);


        if (!vastaus.ok) {
            throw new Error(`Tapahtui virhe ${vastaus.status}`);
        }

        else {  


        const data = await vastaus.json();


        kortit.innerHTML = data.results.map(user => `
            <article class="kortti">
                <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
                <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
                <p class="ika">${user.dob.age} vuotta</p>

                <ul>
                    <li> ${user.location.city}</li>
                    <li> ${user.email}</li>
                    <li> ${user.phone}</li>
                </ul>
            </article>
        `).join("");

        }
    }

    catch (error) {

        virhe.textContent = `Tapahtui virhe: ${error.message}`;
    }
}


haeData();
