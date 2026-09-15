const piirto = document.getElementById("piirto");  
const ctx = piirto.getContext("2d");  

console.log(ctx);

/*

ctx.fillStyle = "yellow";
ctx.fillRect(30, 90, 50, 50)
ctx.fillStyle = "rgba(240, 50, 29, 0.2)";
ctx.fillRect(30, 30, 50, 50)

ctx.fillStyle = "rgba(240, 50, 29, 0.9)";

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(300, 300);
ctx.stroke();
ctx.lineTo(0, 300);
ctx.stroke();
ctx.lineTo(150, 150);
ctx.stroke();
ctx.fill();


ctx.beginPath();
ctx.arc(350, 300, 80, 0, Math.PI);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(350, 350, 50, 0, Math.PI / 2);
ctx.stroke();

ctx.fillStyle = "black";

ctx.font = "50px 'Times New Roman'";
ctx.textAlign = "center";
ctx.textBaseline = "middle";  
ctx.fillText("Hieno kuva", 250, 200);

const butterfly = new Image();
butterfly.src = "images/butterfly.png"

butterfly.onload = function () {  
    ctx.globalAlpha = 0.5;  
    ctx.drawImage(butterfly, 0, 0, 150, 150); 
    ctx.globalAlpha = 1;  
    
}; 

*/

// Luodaan muuttujat

// Isompi pallo

let x = 250;
let y = 200;
let vx = 2; 
let vy = 2; 

// Pienempi pallo

let x2 = 130;
let y2 = 50;
let vx2 = 4; 
let vy2 = 4; 



// Animaation funktio

function paivita() { 
    
    
    
    
    ctx.clearRect(0, 0, piirto.width, piirto.height);
    
    // ISOMPI PALLO

    x = x + vx;
    y = y + vy;
    vy = vy +0.1;


    // Reunatarkistus oikea

    if (x + 20 >= 500) {  
    vx = -vx;  
    }   


    // Reunatarkistus ala

    if (y + 20 >400) {
    vy = -vy;
    }

     // Reunatarkistus vasen

    if (x - 20 < 0) {  
    vx = -vx;  
    }  

     // Reunatarkistus ylä

    if (y - 20 < 0) {  
    vy = -vy;  
    }  

    // Törmäystarkistus pallojen välillä  
  
const dx = x - x2;               
const dy = y - y2;               
const etaisyys = Math.sqrt(dx * dx + dy * dy);  
  

if (etaisyys < 30) {  
  // Normaalivektori: yksikkövektori törmäyssuunnassa  
  const pituus = etaisyys;  
  const nx = dx / pituus;  
  const ny = dy / pituus;  
  
  // Suhteellinen nopeus törmäyssuunnassa  
  const suhteellinenVx = vx - vx2;  
  const suhteellinenVy = vy - vy2;  
  
  // Vain jos lähestytään — estää "juuttumisen"  
  const lahestytaan = suhteellinenVx * nx + suhteellinenVy * ny;  
  
  if (lahestytaan < 0) {  
    // Impulssi: pienempi massa siirtää vauhtia, isompi menettää vähemmän  
    const massaIso = 4;    // kokeile eri arvoja — isompi = painavampi  
    const massaPieni = 1;  
  
    const impulssi = (2 * lahestytaan) / (massaIso + massaPieni);  
  
    vx  = vx - (impulssi * massaPieni * nx);   // iso pallo muuttuu vähemmän  
    vy  = vy - (impulssi * massaPieni * ny);  
    vx2 = vx2 + (impulssi * massaIso * nx);    // pieni pallo saa enemmän  
    vy2 = vy2 + (impulssi * massaIso * ny);  
  }  
}  

    // PIENEMPI PALLO

    x2 = x2 + vx2;
    y2 = y2 + vy2;
    vx2 = vx2 * 0.999;
    vy2 = vy2 * 0.999;

    // Reunatarkistus oikea

    if (x2 + 10 >= 500) {  
    vx2 = -vx2;  
    }   


    // Reunatarkistus ala

    if (y2 + 10 >400) {
    vy2 = -vy2;
    }

     // Reunatarkistus vasen

    if (x2 - 10 < 0) {  
    vx2 = -vx2;  
    }  

     // Reunatarkistus ylä

    if (y2 - 10 < 0) {  
    vy2 = -vy2;  
    }  


   
   


    ctx.fillStyle = "rgba(169, 6, 6, 1)";

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill(); 

    ctx.fillStyle = "rgb(6, 44, 169)";

    ctx.beginPath();
    ctx.arc(x2, y2, 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill(); 

    requestAnimationFrame(paivita); 
     
}  
  
paivita(); 











