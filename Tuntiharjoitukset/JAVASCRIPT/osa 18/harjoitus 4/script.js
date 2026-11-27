const tagit = [" JS ", "css", "js", "HTML", "Css"];

const normalisoidut = tagit.map((tagi) => tagi.trim().toLowerCase());

const uniikit = [...new Set(normalisoidut)];

const maarat = new Map();

normalisoidut.forEach((tagi) => {
    maarat.set(tagi, (maarat.get(tagi) || 0) + 1);
});

console.log(uniikit);
console.log(maarat);
