

let count = 0;
let countElement = document.getElementById("count");
const minusButton = document.getElementById("minus");

minusButton.disabled = true;

document.getElementById("plus").addEventListener("click", function(){
    count++;
    countElement.textContent = count;
    minusButton.disabled = count <= 0;
})   

document.getElementById("minus").addEventListener("click", function(){
    count--;
    countElement.textContent = count;
    minusButton.disabled = count <= 0;
})




