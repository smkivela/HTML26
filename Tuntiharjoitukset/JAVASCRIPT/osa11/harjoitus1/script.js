const form = document.querySelector('form');

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const formData = new FormData(form)

    console.log(Object.fromEntries(formData));
})