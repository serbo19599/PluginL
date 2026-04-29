(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    // 1. Регистрируем сайт как "Родной раздел" Лампы
    Lampa.Component.add('my_site_native', function (object) {
        var comp = this;
        var html = $('<div class="video-full"></div>');
        var frame = $('<iframe src="' + object.url + '" style="width: 100%; height: 100%; border: none;"></iframe>');

        this.create = function () {
            html.append(frame);
            
            // Ждем загрузки и заставляем Лампу "увидеть" содержимое
            frame.on('load', function() {
                Lampa.Controller.enable('my_site_native');
            });
        };

        this.active = function () {
            // Передаем управление пультом этому компоненту
            Lampa.Controller.add('my_site_native', {
                toggle: function () {},
                up: function () { frame[0].contentWindow.postMessage('up', '*'); },
                down: function () { frame[0].contentWindow.postMessage('down', '*'); },
                left: function () { frame[0].contentWindow.postMessage('left', '*'); },
                right: function () { frame[0].contentWindow.postMessage('right', '*'); },
                back: function () { Lampa.Activity.backward(); }
            });
            Lampa.Controller.toggle('my_site_native');
        };

        this.render = function () { return html; };
        this.pause = function () {};
        this.stop = function () {};
        this.destroy = function () { html.remove(); };
    });

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            target.on('click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();

                // 2. Запускаем сайт внутри "родного" контейнера
                Lampa.Activity.push({
                    url: 'https://www.russianfood.com/recipes/recipe.php?rid=119475', // ВАШ САЙТ
                    title: 'МОЙ САЙТ',
                    component: 'my_site_native',
                    page: 1
                });
                return false;
            });
            target.data('modded', true);
        }
    }

    setInterval(function() {
        if (typeof $ !== 'undefined') startMod();
    }, 1000);
})();
