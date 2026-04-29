(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        // Ищем кнопку Сериалы
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            // Меняем оформление
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            // Тот самый простой обработчик клика
            target.on('click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ЗАМЕНИТЕ НА ВАШ АДРЕС
                
                // Простейший вызов, который давал прокрутку
                if (typeof Lampa.Platform.openURL === 'function') {
                    Lampa.Platform.openURL(url);
                } else {
                    window.location.href = url;
                }
                
                return false;
            });

            target.data('modded', true);
        }
    }

    // Проверка раз в секунду
    var timer = setInterval(function() {
        if (typeof $ !== 'undefined' && $('.menu__item[data-action="tv"]').length) {
            startMod();
        }
    }, 1000);
})();
