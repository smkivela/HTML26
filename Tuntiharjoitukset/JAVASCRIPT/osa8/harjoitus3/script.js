const data = " HTML, CSS, JavaScript, React";


const teknologiat = data.split(",").map(tekniikka => tekniikka.trim());
console.log(teknologiat);



const ilmanReactia = teknologiat.filter(tekniikka => tekniikka.toLowerCase() !== "react");
const yhdistetty = ilmanReactia.join(" | ");
console.log(yhdistetty);