(function () {
    'use strict';

    // Защита от повторного запуска
    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            // 1. Меняем только текст и цвет
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            // 2. Вешаем только клик, как в самой первой рабочей версии
            target.on('click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ВАША ССЫЛКА

                // Самая стабильная команда для Tizen
                try {
                    Lampa.Platform.openURL(url);
                } catch(err) {
                    window.location.href = url;
                }
                
                return false;
            });

            target.data('modded', true);
        }
    }

    // Проверка раз в 2 секунды, чтобы не перегружать память
    setInterval(startMod, 2000);
})();
