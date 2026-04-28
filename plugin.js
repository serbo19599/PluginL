(function () {
    'use strict';

    if (window.my_plugin_active) return;
    window.my_plugin_active = true;

    var btnId = 'plugin_site_button';

    function openSite() {
        Lampa.Platform.openURL('https://google.com');
    }

    function createButton() {
        if (document.getElementById(btnId)) return;

        var menu = document.querySelector('.menu__list');
        if (!menu) return;

        var html = '<div class="menu__item selector focusable" id="' + btnId + '">' +
            '<div class="menu__ico"><svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg></div>' +
            '<div class="menu__text">https://www.chaturbate.best/couple-cams/</div>' +
        '</div>';

        menu.insertAdjacentHTML('beforeend', html);

        var btn = document.getElementById(btnId);

        // 1. Для мышки/сенсорных пультов
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openSite();
        });

        // 2. Для кнопочных пультов (ловим нажатие OK/Enter)
        btn.addEventListener('keydown', function(e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                openSite();
            }
        });
        
        // 3. Регистрация в контроллере Лампы (самый надежный способ для "ОК")
        if (window.Lampa && Lampa.Controller) {
            Lampa.Controller.add({
                name: 'my_site_btn_ctrl',
                selector: '#' + btnId,
                onEnter: function() {
                    openSite();
                }
            });
        }
    }

    setInterval(function() {
        if (document.querySelector('.menu__list') && !document.getElementById(btnId)) {
            createButton();
        }
    }, 2000);
})();
