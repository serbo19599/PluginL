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
                
                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ВАШ АДРЕС

                if (window.Lampa && Lampa.Platform) {
                    // 1. Открываем сайт проверенным способом
                    Lampa.Platform.openURL(url);

                    // 2. ХИТРОСТЬ: Через 2 секунды после открытия сайта
                    // мы заставляем Лампу "забыть" про пульт,
                    // чтобы Tizen сам переключился в режим навигации по ссылкам.
                    setTimeout(function() {
                        if (Lampa.Controller) {
                            Lampa.Controller.enabled().pause();
                        }
                    }, 2000);
                }
                
                return false;
            });

            target.data('modded', true);
        }
    }

    // Тот самый рабочий таймер
    setInterval(function() {
        if (typeof $ !== 'undefined' && $('.menu__item[data-action="tv"]').length) {
            startMod();
        }
    }, 1000);
})();
