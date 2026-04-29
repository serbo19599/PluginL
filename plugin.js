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
                    Lampa.Platform.openURL(url);
                    
                    // --- ХИТРОСТЬ ДЛЯ НАВИГАЦИИ ---
                    // Пытаемся перехватить кнопки после открытия
                    window.addEventListener('keydown', function(e) {
                        if (e.keyCode === 39 || e.keyCode === 40) { // Вправо или Вниз
                            // Эмулируем Tab для перехода к следующей ссылке
                            var focusable = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                            var index = Array.prototype.indexOf.call(focusable, document.activeElement);
                            if (index > -1 && focusable[index + 1]) focusable[index + 1].focus();
                        }
                    });
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
