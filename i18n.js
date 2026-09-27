document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-select');
    const savedLang = localStorage.getItem('lang') || 'sq';

    if (langSelect) {
        langSelect.value = savedLang;
        updateLanguage(savedLang);

        langSelect.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            localStorage.setItem('lang', selectedLang);
            updateLanguage(selectedLang);
        });
    } else {
        updateLanguage(savedLang);
    }
});

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
