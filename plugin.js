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

                // Создаем контейнер, который разрешает скролл
                var layer = $('<div id="lampa_web_layer" style="position:fixed;left:0;top:0;width:100%;height:100%;z-index:999999;background:#000;overflow-y:auto;-webkit-overflow-scrolling:touch;"></div>');
                
                // Используем тег <object> вместо <iframe> - он иногда обходит защиту фреймов на Tizen
                var content = $('<object data="'+url+'" type="text/html" style="width:100%;height:200%;border:none;"></object>');
                
                layer.append(content);
                $('body').append(layer);

                // ФИКС КНОПКИ НАЗАД И СКРОЛЛА
                var handleKey = function(event) {
                    // Назад
                    if (event.keyCode === 8 || event.keyCode === 461 || event.keyCode === 10009) {
                        event.preventDefault();
                        $('#lampa_web_layer').remove();
                        $(window).off('keydown', handleKey);
                    }
                    // Скролл вверх/вниз для простого пульта
                    if (event.keyCode === 40) layer.scrollTop(layer.scrollTop() + 100);
                    if (event.keyCode === 38) layer.scrollTop(layer.scrollTop() - 100);
                };

                $(window).on('keydown', handleKey);
                
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
