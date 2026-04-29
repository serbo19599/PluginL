(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    // Создаем пустой компонент-заглушку, чтобы Лампа не паниковала
    Lampa.Component.add('my_site_component', function (object) {
        this.create = function () {
            // Как только компонент создается, открываем сайт
            Lampa.Platform.openURL(object.url);
            // Возвращаемся назад в меню, чтобы не висеть в пустом компоненте
            setTimeout(function() {
                Lampa.Activity.backward();
            }, 500);
        };
        this.render = function () { return $('<div></div>'); };
        this.pause = function () {};
        this.active = function () {};
        this.destroy = function () {};
    });

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            target.off('click').on('click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();

                // Запускаем наш компонент
                Lampa.Activity.push({
                    url: 'https://www.russianfood.com/recipes/recipe.php?rid=119475/', // ВАШ АДРЕС
                    title: 'МОЙ САЙТ',
                    component: 'my_site_component'
                });

                return false;
            });

            target.data('modded', true);
        }
    }

    var timer = setInterval(function() {
        if (typeof $ !== 'undefined' && $('.menu__item[data-action="tv"]').length) {
            startMod();
        }
    }, 1000);
})();
