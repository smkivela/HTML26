
const kurssit = [
    { nimi: "HTML", taso: "aloittelija", aktiivinen: true },
    { nimi: "CSS", taso: "aloittelija", aktiivinen: true },
    { nimi: "JavaScript", taso: "keskitaso", aktiivinen: false },
    { nimi: "C#", taso: "keskitaso", aktiivinen: true },
    { nimi: "CPP", taso: "edistynyt", aktiivinen: false }
];



const grid = document.querySelector(".grid");

for (const kurssi of kurssit) {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = kurssi.nimi;
    p.textContent = `Taso: ${kurssi.taso}`;

    article.appendChild(h2);
    article.appendChild(p);

    if (!kurssi.aktiivinen) {
        article.classList.add("inactive");
    }

    article.classList.add("course-card");
    grid.appendChild(article);
}





for (let i = 0; i < kurssit.length; i++) {
    const article = grid.children[i];
    article.dataset.courseId = i;
    console.log(article.dataset.courseId);
}