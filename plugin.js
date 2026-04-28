(function () {
    'use strict';
    Lampa.Plugins.add('my_final_button', function (object) {
        this.init = function () {
            // Это окно покажет нам, что плагин ЗАГРУЗИЛСЯ
            Lampa.Noty.show('Плагин успешно запущен!'); 
            
            var item = {
                title: 'Мой Сайт',
                icon: '<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg>',
                onSelect: function () {
                    Lampa.Platform.openURL('https://www.chaturbate.best/couple-cams/');
                }
            };
            Lampa.Menu.add(item);
        };
    });
})();
