(function () {
    'use strict';

    function initMyPlugin() {
        var item = {
            id: 'my_unique_site_button', // Уникальный ID, чтобы не плодились
            title: 'МОЙ САЙТ',
            icon: '<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg>',
            onSelect: function () {
                Lampa.Platform.openURL('https://www.chaturbate.best/couple-cams/');
            }
        };

        // Проверяем: если кнопка с таким ID уже есть в меню, ничего не делаем
        var exists = Lampa.Menu.get().some(function(m) { return m.id === item.id; });
        
        if (!exists) {
            Lampa.Menu.add(item);
        }
    }

    // Запуск с защитой от двойного старта
    if (!window.my_site_init_done) {
        window.my_site_init_done = true;
        
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') {
                initMyPlugin();
            }
        });

        // На случай, если приложение уже готово
        if (window.appready) initMyPlugin();
    }
})();
