(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            // Используем самый простой способ клика, который у вас РАБОТАЛ
            target.on('click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();

                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ВАШ АДРЕС

                if (window.Lampa && Lampa.Platform) {
                    // 1. Открываем сайт
                    Lampa.Platform.openURL(url);
                    
                    // 2. ФОКУС: Через 3 секунды пробуем "включить" пульт
                    // Мы посылаем системе сигнал, что нужно активировать курсор
                    setTimeout(function() {
                        if (window.Lampa.Controller) {
                            Lampa.Controller.toggle('content'); 
                        }
                    }, 3000);
                }
                return false;
            });

            target.data('modded', true);
        }
    }

    setInterval(function() {
        if (typeof $ !== 'undefined') startMod();
    }, 1000);
})();
