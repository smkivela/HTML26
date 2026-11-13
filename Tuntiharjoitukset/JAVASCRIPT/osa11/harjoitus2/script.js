// Käytä setCustomValidity()-metodia estämään lähetys, jos salasanat eivät täsmää.

const form = document.querySelector('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (event) => {
    if (password1.value !== password2.value) {
        password2.setCustomValidity('Salasanat eivät täsmää');
        event.preventDefault();
    } else {
        password2.setCustomValidity('');
    }
});