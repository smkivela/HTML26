

const lomake = document.getElementById('lomake');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const yhteenveto = document.getElementById('yhteenveto');

lomake.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(lomake);
    const data = Object.fromEntries(formData.entries());
    yhteenveto.textContent = `Nimi: ${data.name}, Sähköposti: ${data.email}, Salasana: ${data.password}, Vahvistus: ${data.confirmPassword}`;
});


lomake.addEventListener('input', () => {
    if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity('Salasanat eivät täsmää');
    } else {
        confirmPassword.setCustomValidity('');
    }
});


lomake.addEventListener('submit', (event) => {
    if (!lomake.checkValidity()) {
        event.preventDefault();
    }
});

lomake.addEventListener('submit', (event) => {
    if (lomake.checkValidity()) {
        yhteenveto.textContent = 'Lomake lähetetty onnistuneesti!';
    }
});

