(function () {
    'use strict';

    function myPlugin() {
        this.name = 'My Custom Plugin';

        // Инициализация плагина
        this.init = function () {
            // Добавляем пункт в боковое меню
            Lampa.Component.add('my_plugin_component', {
                render: function () {
                    return '<div>Тут будет контент вашего сайта</div>';
                }
            });

            // Слушаем событие готовности меню
            Lampa.Listener.follow('app', function (e) {
                if (e.type == 'ready') {
                    var menu_item = {
                        title: 'Мой Сайт',
                        icon: '<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="white"/></svg>',
                        onSelect: function () {
                            // --- МЕСТО ДЛЯ ВАШЕЙ ССЫЛКИ ---
                            var url = 'https://www.chaturbate.best/couple-cams/'; 
                            
                            // Открываем во встроенном браузере Lampa или системном
                            Lampa.Platform.openURL(url);
                        }
                    };

                    // Вставляем пункт в меню
                    Lampa.Menu.add(menu_item);
                }
            });
        };
    }

    // Регистрация плагина в системе
    if (!window.my_plugin_registered) {
        window.my_plugin_registered = true;
        Lampa.Plugins.add('my_plugin', myPlugin);
    }
})();
