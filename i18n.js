(function () {
    var supportedLangs = ['sq', 'en', 'it', 'de'];
    var stored = localStorage.getItem('ca2net-lang');
    var lang = supportedLangs.indexOf(stored) !== -1 ? stored : 'sq';

    function applyLang(newLang) {
        var dict = window.translations[newLang];
        if (!dict) return;

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        var titleKey = document.body.getAttribute('data-i18n-title');
        if (titleKey && dict[titleKey]) {
            document.title = dict[titleKey];
        }

        document.documentElement.setAttribute('lang', newLang);

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === newLang);
        });

        localStorage.setItem('ca2net-lang', newLang);
        lang = newLang;
    }

    document.addEventListener('DOMContentLoaded', function () {
        applyLang(lang);
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                applyLang(btn.getAttribute('data-lang'));
            });
        });
    });
})();
