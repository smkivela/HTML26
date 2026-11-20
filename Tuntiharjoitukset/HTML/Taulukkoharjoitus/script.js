const rows = document.querySelectorAll("tbody tr");

rows.forEach(row => {
    const html = Number(row.children[1].textContent);
    const css = Number(row.children[2].textContent);
    const javascript = Number(row.children[3].textContent);

    const total = html + css + javascript;
    row.children[4].textContent = total;
});

