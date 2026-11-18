const lomake = document.getElementById("lomake");
const tila = document.getElementById("tila");
const vastaus = document.getElementById("vastaus");

lomake.addEventListener("submit", async (event) => {
  event.preventDefault();


  const formData = new FormData(lomake);


  const tiedot = Object.fromEntries(formData);
  console.log(tiedot); 

  try {
    tila.textContent = "Lähetetään...";
    vastaus.textContent = "";


    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tiedot)
    });

    if (!response.ok) {
      throw new Error("Palvelin vastasi virhekoodilla " + response.status);
    }

    const data = await response.json();


    tila.textContent = `Käyttäjä luotu! Palvelin antoi id:n ${data.id}.`;
    vastaus.textContent = JSON.stringify(data, null, 2);

    lomake.reset(); 
  } catch (error) {
    tila.textContent = "Tapahtui virhe: " + error.message;
  }
});