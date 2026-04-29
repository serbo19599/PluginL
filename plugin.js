(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('ТЕСТ КНОПОК');
            target.css('color', '#4caf50'); // Зеленый цвет для теста

            target.on('hover:enter click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                // Тестируем на YouTube или Google - там навигация ТВ должна подхватиться сама
                var url = 'https://www.youtube.com/tv'; 
                
                Lampa.Platform.openURL(url);
                return false;
            });
            target.data('modded', true);
        }
    }

    setInterval(function() {
        if (typeof $ !== 'undefined' && $('.menu__item[data-action="tv"]').length) {
            startMod();
        }
    }, 1000);
})();
