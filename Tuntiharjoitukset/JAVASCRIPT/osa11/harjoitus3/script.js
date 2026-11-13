const lomake = document.getElementById('lomake');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const rating = document.getElementsByName('rating');
const contact = document.getElementById('contact');
const yhteenveto = document.getElementById('yhteenveto');

lomake.addEventListener('submit', (event) => {
    event.preventDefault();
    let valittuRating = '';
    for (const r of rating) {
        if (r.checked) {
            valittuRating = r.value;
            break;
        }
    }
    yhteenveto.textContent = `Aihe: ${subject.value}, Viesti: ${message.value}, Arvosana: ${valittuRating}, Haluatko yhteydenoton: ${contact.checked ? 'Kyllä' : 'Ei'}`;
});