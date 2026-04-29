(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            // ПРЯМОЙ ПЕРЕХВАТ: Мы заменяем функцию "нажать" на свою
            // Это работает до того, как Лампа успеет среагировать
            target[0].onExecute = function () {
                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ВАШ АДРЕС

                if (window.Lampa && Lampa.Platform) {
                    Lampa.Platform.openURL(url);
                } else {
                    window.location.href = url;
                }
                
                // Возвращаем true, чтобы Лампа считала, что действие выполнено успешно
                // и не делала редирект на главную
                return true; 
            };

            // Дополнительно блокируем стандартный клик через атрибут
            target.attr('data-playable', 'true'); 
            
            target.data('modded', true);
        }
    }

    // Проверка раз в секунду
    setInterval(function() {
        if (typeof $ !== 'undefined') startMod();
    }, 1000);
})();
