const haku = document.getElementById("haku");

const cards = document.querySelectorAll(".card");


haku.addEventListener("input", function() {


    const hakutermi = haku.value.toLowerCase();

    cards.forEach(function(card) {

        const teksti = card.textContent.toLowerCase();
        if (teksti.includes(hakutermi)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });

});


const lista = document.querySelector("ul");
lista.addEventListener("click", function(event) {
    if (event.target.classList.contains("fav-btn")) {
        const card = event.target.closest(".card");
        card.classList.toggle("suosikki");
    }
});


const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const nimi = formData.get("nimi");
    if (nimi) {
        const li = document.createElement("li");
        li.classList.add("card");
        li.innerHTML = `<h3>${nimi}</h3> <button class="fav-btn">♡</button>`;
        lista.appendChild(li);
    }
});


