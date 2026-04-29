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
                
                if (typeof Lampa.Platform.openURL === 'function') {
                    // 1. Открываем сайт (ваша рабочая база)
                    Lampa.Platform.openURL(url);

                    // 2. СИСТЕМНЫЙ ХАК ДЛЯ НАВИГАЦИИ
                    // Через 2 секунды пробуем "разбудить" браузер
                    setTimeout(function() {
                        try {
                            // Вызываем системную навигацию Tizen
                            if (window.tizen) {
                                tizen.tvinput.registerKey("FocusIn");
                            }
                        } catch(e) {}
                    }, 2000);

                } else {
                    window.location.href = url;
                }
                
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

