(function () {
    'use strict';

    if (window.my_final_plugin_loaded) return;
    window.my_final_plugin_loaded = true;

    function init() {
        if (window.Lampa && Lampa.Menu) {
            Lampa.Menu.add({
                title: 'Мой Сайт',
                icon: '<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg>',
                onSelect: function () {
                    // Замените на нужную вам ссылку
                    Lampa.Platform.openURL('https://www.chaturbate.best/couple-cams/');
                }
            });
        } else {
            setTimeout(init, 500);
        }
    }

    init();
})();
 
