(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            target.on('hover:enter click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; 

                // ПРОВЕРКА MSX API
                if (typeof TVX === 'undefined') {
                    // Если MSX API не загружен, пробуем открыть через стандарт
                    Lampa.Platform.openURL(url);
                } else {
                    // КОМАНДА ДЛЯ MSX: Открыть как контент
                    // Это заставляет MSX держать пульт под контролем
                    TVX.Navigation.navigateTo(url, {
                        type: 'html',
                        title: 'Рецепты'
                    });
                }
                
                return false;
            });

            target.data('modded', true);
        }
    }

    // В MSX иногда нужно подождать загрузки библиотеки TVX
    var timer = setInterval(function() {
        if (typeof $ !== 'undefined' && $('.menu__item[data-action="tv"]').length) {
            startMod();
        }
    }, 1000);
})();
