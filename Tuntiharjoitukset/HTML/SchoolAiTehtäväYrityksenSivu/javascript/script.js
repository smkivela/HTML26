const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    const zoom = 100 + scrollY * 0.05;

    header.style.backgroundSize = `${zoom}%`;
});