document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.hash.split("?")[1]);
    const color = params.get("color");
    const cite = params.get("cite");

    if (!color || !cite) return;

    // Apply color
    document.querySelectorAll(`[data-cite="${cite}"]`).forEach(el => {
        el.style.setProperty('--clip-color', color);
    });

    // Scroll to the first matching element
    const firstMatch = document.querySelector(`[data-cite="${cite}"]`);
    if (firstMatch) {
        firstMatch.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});