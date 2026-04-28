(function () {
    'use strict';

    // 1. Создаем функцию добавления
    var pluginInit = function () {
        var item = {
            title: 'МОЙ САЙТ',
            icon: '<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg>',
            onSelect: function () {
                Lampa.Platform.openURL('https://www.chaturbate.best/couple-cams/');
            }
        };

        // Добавляем в меню, если еще не добавлено
        if (Lampa.Menu && Lampa.Menu.add) {
            Lampa.Menu.add(item);
        }
    };

    // 2. Пытаемся запуститься всеми возможными способами
    try {
        // Способ для новых версий
        Lampa.Plugins.add('my_site', {
            init: pluginInit
        });
        
        // Запасной способ (если приложение уже готово)
        if (window.appready) pluginInit();
        
        // Слушатель для подстраховки
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') pluginInit();
        });
    } catch (e) {}
})();
