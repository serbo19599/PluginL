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

                // Создаем свой контейнер, который не закрывает Лампу полностью
                var wrapper = $('<div id="custom_site_overlay" style="position:fixed;left:0;top:0;width:100%;height:100%;z-index:999999;background:#000;"></div>');
                var frame = $('<iframe src="'+url+'" style="width:100%;height:100%;border:none;" sandbox="allow-scripts allow-forms allow-same-origin"></iframe>');
                
                wrapper.append(frame);
                $('body').append(wrapper);

                // Захватываем кнопку "Назад" принудительно
                var backHandler = function(event) {
                    // Коды кнопки Назад: 8 (PC/Tizen), 27 (Esc), 461, 10009 (Samsung)
                    if (event.keyCode === 8 || event.keyCode === 27 || event.keyCode === 461 || event.keyCode === 10009) {
                        event.preventDefault();
                        event.stopPropagation();
                        $('#custom_site_overlay').remove();
                        $(window).off('keydown', backHandler);
                    }
                };

                $(window).on('keydown', backHandler);
                
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
