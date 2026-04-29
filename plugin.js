(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    // 1. Создаем "пустышку", которую Лампа не боится
    Lampa.Component.add('my_site_fix', function (object) {
        var comp = this;
        var html = $('<div class="video-full" style="background:#000;"></div>');
        // Вставляем ваш сайт прямо в этот компонент
        var frame = $('<iframe src="' + object.url + '" style="width:100%; height:100%; border:none;" sandbox="allow-scripts allow-forms allow-same-origin"></iframe>');

        this.create = function () {
            html.append(frame);
        };

        this.active = function () {
            // Вешаем управление кнопкой "Назад" через контроллер Лампы
            Lampa.Controller.add('my_site_fix', {
                toggle: function () {},
                back: function () {
                    Lampa.Activity.backward(); // Это вернет в меню
                }
            });
            Lampa.Controller.toggle('my_site_fix');
        };

        this.render = function () { return html; };
        this.destroy = function () { html.remove(); };
    });

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            target.on('hover:enter click', function (e) {
                e.preventDefault();
                
                // 2. Вызываем наш новый компонент
                Lampa.Activity.push({
                    url: 'https://www.russianfood.com/recipes/recipe.php?rid=119475',
                    title: 'Рецепты',
                    component: 'my_site_fix',
                    page: 1
                });
                
                return false;
            });
            target.data('modded', true);
        }
    }

    setInterval(function() {
        if (typeof $ !== 'undefined' && $('.menu__item[data-action="tv"]').length) {
            startMod();
        }
    }, 1000);
})();
