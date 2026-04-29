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
                
                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475/'; // ЗАМЕНИТЕ НА ВАШ АДРЕС

                // Вместо "пустого" web_view используем прямой вызов платформы,
                // но с сохранением контекста Лампы
                if (window.Lampa && Lampa.Platform) {
                    Lampa.Platform.openURL(url);
                    
                    // Форсируем навигацию: через 2 секунды после открытия 
                    // пробуем "разбудить" пульт внутри системы
                    setTimeout(function() {
                        Lampa.Controller.toggle('content');
                    }, 2000);
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
