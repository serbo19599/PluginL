//28.04.2026 - Update
(function () {
    'use strict';

    function myPlug() {
        this.init = function () {
            Lampa.Listener.follow('app', function (e) {
                if (e.type == 'ready') {
                    var item = {
                        title: 'МОЙ САЙТ',
                        icon: '<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg>',
                        onSelect: function () {
                            Lampa.Platform.openURL('https://www.chaturbate.best/couple-cams/');
                        }
                    };
                    Lampa.Menu.add(item);
                }
            });
        };
    }

    if (!window.my_custom_site_loaded) {
        window.my_custom_site_loaded = true;
        Lampa.Plugins.add('my_custom_site', myPlug);
    }
})();
