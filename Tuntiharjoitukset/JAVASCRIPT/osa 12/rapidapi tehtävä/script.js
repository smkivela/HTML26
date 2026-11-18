const lomake = document.getElementById("lomake");
const kaupunki = document.getElementById("kaupunki");
const tila = document.getElementById("tila");
const vastaus = document.getElementById("vastaus");

lomake.addEventListener("submit", async (event) => {
  event.preventDefault();
  tila.textContent = "Haetaan...";
  vastaus.textContent = "";

  try {

    const kaupunkiVastaus = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${kaupunki.value}&count=1`);
    if (!kaupunkiVastaus.ok) throw new Error("Paikkahaku epäonnistui");
    const kaupunkiData = await kaupunkiVastaus.json();

    if (!kaupunkiData.results) {
      tila.textContent = "Kaupunkia ei löytynyt.";
      return;
    }
    const paikka = kaupunkiData.results[0];

   
    const sääResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${paikka.latitude}&longitude=${paikka.longitude}&current=temperature_2m`);
    if (!sääResponse.ok) throw new Error("Säähaku epäonnistui");
    const sääData = await sääResponse.json();

    tila.textContent = paikka.name;
    vastaus.textContent = `${sääData.current.temperature_2m} °C`;
  } catch (error) {
    tila.textContent = "Tapahtui virhe: " + error.message;
  }
});