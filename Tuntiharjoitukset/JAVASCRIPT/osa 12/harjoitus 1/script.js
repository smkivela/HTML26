const tila = document.getElementById("tila");
const kayttajat = document.getElementById("kayttajat");




async function haeKayttajat() {
  try 
  
  {
    const response = await fetch("https://dummyjson.com/users");

    if (!response.ok) {
      throw new Error("Palvelin vastasi virhekoodilla " + response.status);
    }

    const data = await response.json();

    kayttajat.innerHTML = data.users.map(user => `
      <tr>
        <td>${user.firstName} ${user.lastName}</td>
        <td>${user.email}</td>
      </tr>
    `).join("");
  } 
  
  catch (error) {
    tila.textContent = "Tapahtui virhe: " + error.message;
  }
}

haeKayttajat(); 