const nimilista = ["Sara", "Aino", "Mika"];

nimilista.push("Oskari");

console.log(nimilista.includes("Aino"));
console.log(nimilista.indexOf("Leevi"));
console.log(nimilista.indexOf("Mika"));

const kopio = [...nimilista];

kopio.sort();

console.log(nimilista.join(", "));
console.log(kopio.join(", "));