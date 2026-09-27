document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("lang-select");

    // Lexo gjuhën nga localStorage ose vendos 'sq' si kryesore
    let currentLang = localStorage.getItem("selectedLang") || "sq";
    
    if (langSelect) {
        langSelect.value = currentLang;
        
        // Përkthe faqen sapo të ngarkohet
        applyLanguage(currentLang);

        // Ndrysho gjuhën kur përdoruesi zgjedh një opsion tjetër
        langSelect.addEventListener("change", (e) => {
            const selectedLang = e.target.value;
            localStorage.setItem("selectedLang", selectedLang);
            applyLanguage(selectedLang);
        });
    } else {
        applyLanguage(currentLang);
    }
});

function applyLanguage(lang) {
    if (!translations || !translations[lang]) return;

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
