(function () {
    'use strict';

    function my_site_init() {
        var item = {
            title: 'https://www.chaturbate.best/couple-cams/',
            icon: '<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg>',
            onSelect: function () {
                Lampa.Platform.openURL('https://google.com');
            }
        };

        // Самый простой способ добавления в конец списка
        Lampa.Menu.add(item);
    }

    // Регистрируем плагин без лишних оберток
    try {
        // Подписываемся на событие готовности
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') {
                my_site_init();
            }
        });
    } catch (e) {
        console.error("Plugin load error");
    }
})();
