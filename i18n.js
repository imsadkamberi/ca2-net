document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("lang-select");

    // Lexo gjuhën e ruajtur në localStorage, ose përdor 'sq' si bazë
    const savedLang = localStorage.getItem("selected_lang") || "sq";

    // Vendos vlerën e dropdown-it sipas gjuhës së ruajtur
    if (langSelect) {
        langSelect.value = savedLang;
    }

    // Apliko përkthimin menjëherë pas ngarkimit të faqes
    applyLanguage(savedLang);

    // Dëgjo kur përdoruesi ndryshon gjuhën nga dropdown
    if (langSelect) {
        langSelect.addEventListener("change", (e) => {
            const selectedLang = e.target.value;
            localStorage.setItem("selected_lang", selectedLang);
            applyLanguage(selectedLang);
        });
    }
});

function applyLanguage(lang) {
    // Kontrollo nëse ekzistojnë përkthimet për këtë gjuhë
    if (!translations || !translations[lang]) return;

    // Gjej TË GJITHA elementet që kanë atributin data-i18n
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}
