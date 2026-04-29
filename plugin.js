(function () {
    'use strict';

    Lampa.Plugins.add('my_site_btn', {
        init: function () {
            // Ждем, пока всё меню будет готово
            Lampa.Listener.follow('app', function (e) {
                if (e.type == 'ready') {
                    var item = {
                        title: 'МОЙ САЙТ',
                        icon: '<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg>',
                        onSelect: function () {
                            // Штатный вызов окна браузера через платформу
                            Lampa.Platform.openURL('https://www.chaturbate.best/couple-cams/');
                        }
                    };

                    // Регистрация кнопки через официальный контроллер меню
                    // Это "прописывает" кнопку в логику пульта
                    Lampa.Menu.add(item);
                }
            });
        }
    });
})();
