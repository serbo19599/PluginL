(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            // 1. Создаем уникальный контроллер для этой кнопки
            var controller_name = 'my_site_controller';

            target.on('hover:enter', function () {
                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ВАШ АДРЕС

                // 2. Вместо простого клика, используем штатную систему команд Лампы
                if (window.Lampa && Lampa.Platform) {
                    // Вызываем системное окно
                    Lampa.Platform.openURL(url);
                    
                    // Блокируем стандартный переход Лампы, "замораживая" контроллер на секунду
                    Lampa.Controller.enabled().pause();
                    setTimeout(function() {
                        Lampa.Controller.enabled().enable();
                    }, 2000);
                } else {
                    window.location.href = url;
                }
            });

            target.data('modded', true);
        }
    }

    // Регулярная проверка меню
    setInterval(function() {
        if (typeof $ !== 'undefined') startMod();
    }, 1000);
})();
