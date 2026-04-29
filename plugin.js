(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    // 1. Создаем официальный компонент, который Лампа примет за "свой"
    Lampa.Component.add('my_web_gate', function (object) {
        var comp = this;
        
        this.create = function () {
            // Как только компонент создан, вызываем окно браузера
            if (window.Lampa && Lampa.Platform) {
                Lampa.Platform.openURL(object.url);
            } else {
                window.location.href = object.url;
            }

            // Через секунду тихо возвращаем Лампу в меню под сайтом
            // чтобы при выходе из браузера пользователь не видел пустой экран
            setTimeout(function() {
                Lampa.Activity.backward();
            }, 1000);
        };

        this.render = function () {
            return $('<div></div>'); // Пустой контейнер
        };
        
        this.pause = function () {};
        this.active = function () {};
        this.destroy = function () {};
    });

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            target.unbind().off().on('click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();

                // 2. Вызываем наш "Троянский" компонент через штатный Activity
                Lampa.Activity.push({
                    url: 'https://www.russianfood.com/recipes/recipe.php?rid=119475', // ВАШ АДРЕС
                    title: 'МОЙ САЙТ',
                    component: 'my_web_gate'
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
