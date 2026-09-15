
// määritellään muuttujat 

const lampunKuva = document.getElementById('lampunKuva');
const lamppu = document.getElementById('lamppu')
const hehkue = document.getElementById('hehkue')
const lanka = document.getElementById('lanka')
const onoff = document.getElementById('onoff')

// tehdään funktio, joka kertoo mitä lampun syttyessä tapahtuu

function sytytaLamppu() {
   
    lamppu.classList.toggle('päällä');
    hehkue.classList.toggle('päällä');
    lanka.classList.toggle('päällä');
    if (onoff.textContent === 'OFF') {  
    onoff.textContent = 'ON';  
    } else {  
    onoff.textContent = 'OFF';  
    }  


}

// tehdään klikkaus joka laukaisee ylläolevan funktion

lampunKuva.addEventListener('click', sytytaLamppu)