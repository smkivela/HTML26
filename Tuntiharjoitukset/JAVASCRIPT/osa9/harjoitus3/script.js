



const tuote = {
  nimi: 'Näppäimistö',
  hinta: 79,
  saatavilla: true
};


const article = document.createElement("article");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const button = document.createElement("button");

h2.textContent = tuote.nimi;
p.textContent = `Hinta: ${tuote.hinta} €`;
button.textContent = tuote.saatavilla ? "Osta" : "Ei saatavilla";

article.appendChild(h2);
article.appendChild(p);
article.appendChild(button);

const products = document.querySelector(".products");
products.appendChild(article);


if (!tuote.saatavilla) {
    article.classList.add("sold-out");
}
article.classList.add("product-card");