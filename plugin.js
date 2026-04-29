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

                // Вместо openURL создаем полноэкранный слой прямо в Лампе
                var frame = $('<div id="my_site_layer" style="position:fixed;left:0;top:0;width:100%;height:100%;z-index:9999;background:#000;"><iframe src="'+url+'" style="width:100%;height:100%;border:none;"></iframe></div>');
                $('body').append(frame);

                // Теперь кнопка "Назад" будет работать, если мы добавим этот слушатель
                $(window).on('keydown.my_site', function(e) {
                    if (e.keyCode === 8 || e.keyCode === 461 || e.keyCode === 10009) { // Коды кнопки "Назад" для разных ТВ
                        e.preventDefault();
                        $('#my_site_layer').remove();
                        $(window).off('keydown.my_site');
                    }
                });
                
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
