(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            // 1. Меняем только текст и цвет, не трогаем события Лампы
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            // 2. Добавляем невидимую "накладку" прямо внутрь кнопки
            // Она перехватит физическое нажатие до того, как Лампа его обработает
            target.prepend('<div id="click-overlay" style="position:absolute;width:100%;height:100%;z-index:10;top:0;left:0;"></div>');

            $('#click-overlay').on('click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ВАШ АДРЕС

                if (window.Lampa && Lampa.Platform) {
                    Lampa.Platform.openURL(url);
                } else {
                    window.location.href = url;
                }
                return false;
            });

            target.data('modded', true);
        }
    }

    // Проверка раз в секунду
    setInterval(startMod, 1000);
})();
