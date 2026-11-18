const lomake = document.getElementById("hakulomake");
const hakukentta = document.getElementById("hakukentta");
const tila = document.getElementById("tila");
const uudelleen = document.getElementById("uudelleen");
const tulokset = document.getElementById("tulokset");


let viimeisinHaku = "";


async function haeTuotteet(hakusana) {
  viimeisinHaku = hakusana;


  tila.textContent = "Ladataan...";
  uudelleen.hidden = true;
  tulokset.innerHTML = "";

  const parametrit = new URLSearchParams({ q: hakusana });
  const url = `https://dummyjson.com/products/search?${parametrit}`;

  try {
    const response = await fetch(url);

  
    if (!response.ok) {
      throw new Error("Palvelin vastasi virhekoodilla " + response.status);
    }

    const data = await response.json();


    if (data.products.length === 0) {
      tila.textContent = `Ei tuloksia haulla "${hakusana}".`;
      return;
    }


    tulokset.innerHTML = data.products.map(tuote => `
      <div>
        <img src="${tuote.thumbnail}" alt="" width="100">
        <h3>${tuote.title}</h3>
        <p>${tuote.price} €</p>
      </div>
    `).join("");

    tila.textContent = `Löytyi ${data.products.length} tuotetta.`;
  }
  
  catch (error) {

    tila.textContent = "Tapahtui virhe: " + error.message;
    uudelleen.hidden = false;
  }
}

lomake.addEventListener("submit", (event) => {
  event.preventDefault();
  haeTuotteet(hakukentta.value);
});


uudelleen.addEventListener("click", () => {
  haeTuotteet(viimeisinHaku);
});


haeTuotteet("");