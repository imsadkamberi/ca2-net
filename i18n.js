document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("lang-select");
    const savedLang = localStorage.getItem("preferred_lang") || "sq";

    if (langSelect) {
        langSelect.value = savedLang;
        setLanguage(savedLang);

        langSelect.addEventListener("change", (e) => {
            const selectedLang = e.target.value;
            localStorage.setItem("preferred_lang", selectedLang);
            setLanguage(selectedLang);
        });
    } else {
        setLanguage(savedLang);
    }
});

function setLanguage(lang) {
    if (!translations[lang]) return;

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
