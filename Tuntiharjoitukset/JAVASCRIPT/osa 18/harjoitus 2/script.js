function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const heitot = [];

for (let i = 0; i < 100; i++) {
    heitot.push(randomInt(1, 6));
}

const jakauma = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

heitot.forEach((heitto) => {
    jakauma[heitto]++;
});

console.table(jakauma);
