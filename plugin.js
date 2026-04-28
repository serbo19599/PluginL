(function () {
    'use strict';

    if (window.my_plugin_active) return;
    window.my_plugin_active = true;

    var btnId = 'plugin_site_button';

    function createButton() {
        if (document.getElementById(btnId)) return;

        var menu = document.querySelector('.menu__list');
        if (!menu) return;

        // Добавляем классы focusable и selector — без них пульт не увидит кнопку
        var html = '<div class="menu__item selector focusable" id="' + btnId + '">' +
            '<div class="menu__ico"><svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg></div>' +
            '<div class="menu__text">ССЫЛКА НА САЙТ</div>' +
        '</div>';

        menu.insertAdjacentHTML('beforeend', html);

        // Обработка нажатия через систему Lampa
        var btn = document.getElementById(btnId);
        btn.addEventListener('click', function() {
            Lampa.Platform.openURL('https://google.com');
        });

        // Заставляем навигацию Лампы «увидеть» новый элемент
        if (window.Lampa && Lampa.Controller) {
            Lampa.Controller.add({
                name: 'my_site_btn',
                selector: '#' + btnId,
                onEnter: function() {
                    Lampa.Platform.openURL('https://www.chaturbate.best/couple-cams/');
                }
            });
        }
    }

    // Проверка наличия меню
    var timer = setInterval(function() {
        if (document.querySelector('.menu__list')) {
            createButton();
            // Не очищаем интервал, так как Лампа может перерисовать меню
        }
    }, 2000);
})();
