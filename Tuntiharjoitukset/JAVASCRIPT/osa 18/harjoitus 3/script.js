function normalizePhone(value) {
    const puhdistettu = value.trim().replace(/[\s().-]/g, "");

    if (!/^\+?[0-9]+$/.test(puhdistettu)) {
        return null;
    }

    return puhdistettu;
}

console.log(normalizePhone("+358 (40) 123-4567"));
console.log(normalizePhone("abc123"));
console.log(normalizePhone("12+34"));
console.log(normalizePhone("+"));
