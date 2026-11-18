const lomake = document.getElementById("hakulomake");
const hakukentta = document.getElementById("hakukentta");
const tila = document.getElementById("tila");
const tulokset = document.getElementById("tulokset");

lomake.addEventListener("submit", async (event) => {
  event.preventDefault();

  const hakusana = hakukentta.value;

  const parametrit = new URLSearchParams({ q: hakusana });
  const url = `https://dummyjson.com/users/search?${parametrit}`;
  console.log(url);

  try {
    tila.textContent = "Haetaan...";
    tulokset.innerHTML = "";

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Palvelin vastasi virhekoodilla " + response.status);
    }
    const data = await response.json();

    if (data.users.length === 0) {
      tila.textContent = "Ei tuloksia.";
      return;
    }

    tulokset.innerHTML = data.users.map(user => `
      <div class="kortti">
        <img src="${user.image}" alt="Käyttäjän asettama kuva.">
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>${user.email}</p>
      </div>
    `).join("");

    tila.textContent = "";
  } catch (error) {
    tila.textContent = "Tapahtui virhe: " + error.message;
  }
});