document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("lang-select");

    // Merr gjuhën e ruajtur ose vendos 'sq' si default
    const savedLang = localStorage.getItem("selectedLang") || "sq";
    langSelect.value = savedLang;
    changeLanguage(savedLang);

    langSelect.addEventListener("change", (e) => {
        const lang = e.target.value;
        localStorage.setItem("selectedLang", lang);
        changeLanguage(lang);
    });
});

function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
