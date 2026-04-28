(function () {
    'use strict';

    function MyCustomSite() {
        this.init = function () {
            // Ждем полной готовности Лампы, как это делают современные моды
            Lampa.Listener.follow('app', function (e) {
                if (e.type == 'ready') {
                    var item = {
                        title: 'МОЙ САЙТ',
                        icon: '<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg>',
                        onSelect: function () {
                            // Метод открытия, который точно работает на Tizen
                            Lampa.Platform.openURL('https://www.chaturbate.best/couple-cams/');
                        }
                    };

                    // Добавляем кнопку только если её еще нет
                    var menu = $('.menu__list');
                    if (menu.length > 0 && !window.my_site_button_added) {
                        Lampa.Menu.add(item);
                        window.my_site_button_added = true;
                    }
                }
            });
        };
    }

    // Регистрация по стандартам новых плагинов
    if (!window.my_site_plugin_instance) {
        window.my_site_plugin_instance = true;
        var plugin = new MyCustomSite();
        Lampa.Plugins.add('my_custom_site_button', plugin);
    }
})();
