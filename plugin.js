(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        // Берем кнопку "Сериалы", так как она 100% работает с пультом
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            // Полностью очищаем кнопку от влияния Лампы
            target.unbind().off(); 

            target.on('click hover:enter', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();

                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ВАШ АДРЕС

                // Чтобы не вылетало на главную, создаем искусственную паузу
                // и вызываем системное окно поверх Лампы
                if (window.Lampa && Lampa.Platform) {
                    // Этот метод на Tizen должен открывать сайт в системном окне с навигацией
                    Lampa.Platform.openURL(url);
                } else {
                    window.location.replace(url);
                }

                return false;
            });

            target.data('modded', true);
        }
    }

    // Каждые 500мс проверяем, не вернула ли Лампа кнопку "Сериалы" назад
    setInterval(startMod, 500);
})();
