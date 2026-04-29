(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            // Полностью переписываем обработчик на уровне jQuery событий Лампы
            target.on('hover:enter click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation(); // Останавливаем вообще все процессы Лампы для этой кнопки
                
                // Пробуем два метода открытия
                if (typeof Lampa.Platform.openURL === 'function') {
                    Lampa.Platform.openURL('https://www.chaturbate.best/couple-cams/');
                } else {
                    window.open('https://google.com', '_blank');
                }
                
                return false;
            });

            target.data('modded', true);
        }
    }

    // Запускаем через короткие интервалы, пока меню не прогрузится
    var timer = setInterval(function() {
        if (typeof $ !== 'undefined' && $('.menu__item[data-action="tv"]').length) {
            startMod();
        }
    }, 1000);
})();
