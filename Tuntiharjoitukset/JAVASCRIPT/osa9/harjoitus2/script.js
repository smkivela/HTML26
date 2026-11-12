const kielet = ["HTML, CSS, JavaScript"];

const lista = document.querySelector("#languages");



for (const kieli of kielet) {
    const li = document.createElement("li");
    li.textContent = kieli;
    lista.appendChild(li);
}

    li.classList.add("language-item");