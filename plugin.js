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
                
                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ЗАМЕНИТЕ НА ВАШ АДРЕС

                // Открываем через внутреннюю активность Лампы
                Lampa.Activity.push({
                    url: url,
                    title: 'МОЙ САЙТ',
                    component: 'web_view',
                    page: 1
                });

                // Ждем отрисовки окна и принудительно отдаем ему фокус
                setTimeout(function() {
                    var iframe = $('iframe.web-view__iframe');
                    if (iframe.length) {
                        iframe[0].focus(); // Фокусируем само окно
                        // Если на Tizen 2.4+ нужно кликнуть внутрь для активации
                        iframe.contents().find('body').focus();
                    }
                }, 1000);
                
                return false;
            });

            target.data('modded', true);
        }
    }

    // Регистрация в контроллере, чтобы Лампа знала, что фокус может уйти "вовне"
    setInterval(function() {
        if (typeof $ !== 'undefined' && $('.menu__item[data-action="tv"]').length) {
            startMod();
        }
    }, 1000);
})();
