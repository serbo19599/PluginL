// Последнее обновление: 28.04.2026
// Версия: 1.0.5-tizen-fix
(function () {
    'use strict';

    // Вспомогательная функция (как в вашем рабочем плагине)
    function checkCompatibility() {
        return typeof Lampa !== 'undefined';
    }

    function MyNewPlugin() {
        this.init = function () {
            var ready = function () {
                var item = {
                    title: 'МОЙ САЙТ',
                    icon: '<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg>',
                    onSelect: function () {
                        // Прямой метод открытия для Tizen
                        Lampa.Platform.openURL('https://www.chaturbate.best/couple-cams/');
                    }
                };
                
                // Проверка на дубликаты
                var menu = $('.menu__list');
                if (menu.length > 0 && !menu.data('my-site-added')) {
                    Lampa.Menu.add(item);
                    menu.data('my-site-added', true);
                }
            };

            // Ждем готовности приложения
            if (window.appready) ready();
            else {
                Lampa.Listener.follow('app', function (e) {
                    if (e.type == 'ready') ready();
                });
            }
        };
    }

    // Регистрация с проверкой, чтобы не было ошибки "Не удалось загрузить"
    try {
        if (!window.my_site_initialized) {
            window.my_site_initialized = true;
            var plugin = new MyNewPlugin();
            Lampa.Plugins.add('my_custom_site_fixed', plugin);
        }
    } catch (e) {
        console.log('Plugin error:', e);
    }
})();
