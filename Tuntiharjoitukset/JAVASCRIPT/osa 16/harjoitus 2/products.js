/*
  HARJOITUS 2 – LUOTETTAVA API-HAKU
  Tavoite: käsittele sekä verkkovirhe että HTTP-virhe.

  VAATIMUKSET
  - 404/500 -> oma virhe
  - käyttäjälle ymmärrettävä ilmoitus
  - tekninen virhe console.erroriin
  - loading poistuu aina
  - onnistunut data renderöidään vasta tarkistusten jälkeen

  HAASTE
  - Lisää Retry-painike, joka yrittää latausta uudelleen
    ilman sivun uudelleenlatausta.
*/

async function loadProducts() {

    const loading = document.getElementById("loading");

    
    // Aloitetaan puhtaalta pöydältä (tärkeää Retry-yrityksessä)
    document.getElementById("retry").hidden = true;
    document.getElementById("error").textContent = "";
    document.getElementById("products").innerHTML = "";

    try {

      // 1. loading true
      loading.hidden = false;
      
      // 2. fetch
      const response = await fetch("https://dummyjson.com/products");
      
      // 3. response.ok
    if (!response.ok) {
      throw new Error(`Palvelin vastasi virheellä: ${response.status}`)
    }
    
    
    // 4. json

    const data = await response.json();

    // 5. render

    const products = document.getElementById("products");

    data.products.forEach(product => {
      
      const li = document.createElement("li");
      li.textContent = `${product.title} - ${product.price} €`;
      products.appendChild(li);
    });
  }


  
  catch (error) {
    // 6. catch

  console.error("Tuotteiden lataus epäonnistui:", error);
  document.getElementById("error").textContent =
  "Tuotteiden lataus epäonnistui. Yritä myöhemmin uudelleen.";
    
    document.getElementById("retry").hidden = false;
  }

  // 7. finally

  finally {

    loading.hidden = true;
  }




}

document.getElementById("retry").addEventListener("click", () => {
  loadProducts();
});

loadProducts();
