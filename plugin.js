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

                    // --- БЛОК НАВИГАЦИИ (Работаем внутри) ---
                    setTimeout(function() {
                        // Перехватываем управление кнопками
                        $(window).on('keydown.my_nav', function(e) {
                            // Коды кнопок: 38-вверх, 40-вниз, 37-влево, 39-вправо, 13-ОК
                            var focusable = $('a, button, input, [tabindex]').filter(':visible');
                            var index = focusable.index(document.activeElement);

                            if (e.keyCode === 40 || e.keyCode === 39) { // Вниз или Вправо
                                index++;
                                if (index >= focusable.length) index = 0;
                                focusable.eq(index).focus();
                                e.preventDefault();
                            } 
                            else if (e.keyCode === 38 || e.keyCode === 37) { // Вверх или Влево
                                index--;
                                if (index < 0) index = focusable.length - 1;
                                focusable.eq(index).focus();
                                e.preventDefault();
                            }
                        });
                    }, 2000);
                    // ---------------------------------------

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

