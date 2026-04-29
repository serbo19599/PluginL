(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            // Используем прямой обработчик, который давал прокрутку
            target.on('click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();

                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ВАШ АДРЕС

                // Метод, который открывал окно и давал скролл
                if (window.Lampa && Lampa.Platform) {
                    Lampa.Platform.openURL(url);
                } else {
                    window.location.href = url;
                }
                
                return false;
            });

            target.data('modded', true);
        }
    }

    // Проверка раз в 1.5 секунды (оптимально для Tizen)
    setInterval(startMod, 1500);
})();
