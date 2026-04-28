(function () {
    'use strict';

    // 1. ЖЕСТКИЙ СТОПОР (Уникальный ключ для текущей сессии ТВ)
    if (window.my_plugin_active) return;
    window.my_plugin_active = true;

    var btnId = 'plugin_site_button';

    function createButton() {
        // 2. ОЧИСТКА (Сначала удаляем всё старое, если оно просочилось из кэша)
        var old = document.getElementById(btnId);
        if (old) old.remove();

        var menu = document.querySelector('.menu__list');
        if (!menu) return;

        // 3. СОЗДАНИЕ (Чистый HTML без посредников Лампы)
        var html = '<div class="menu__item selector" id="' + btnId + '">' +
            '<div class="menu__ico"><svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg></div>' +
            '<div class="menu__text">https://www.chaturbate.best/couple-cams/</div>' +
        '</div>';

        menu.insertAdjacentHTML('beforeend', html);

        // 4. ДЕЙСТВИЕ
        document.getElementById(btnId).onclick = function() {
            Lampa.Platform.openURL('https://google.com');
        };
    }

    // 5. КОНТРОЛЬ (Tizen часто перерисовывает меню, проверяем наличие кнопки каждые 3 сек)
    setInterval(function() {
        if (!document.getElementById(btnId)) {
            createButton();
        }
    }, 3000);
})();
