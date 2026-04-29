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
                
                // Используем встроенный метод Lampa для открытия внешних ссылок
                // через внутренний интерфейс, который понимает кнопку "Назад"
                if (window.Lampa && Lampa.Platform) {
                    Lampa.Platform.openURL(url);
                } else {
                    window.location.href = url;
                }
                
                // ХАК: Возвращаем контроль кнопке "Назад" через 2 секунды
                setTimeout(function() {
                    window.onkeydown = function(event) {
                        if (event.keyCode === 8 || event.keyCode === 461 || event.keyCode === 10009) {
                            // Если нажали назад - принудительно перезагружаем Лампу
                            // Это единственный 100% способ выйти из зависшего сайта
                            window.location.reload();
                        }
                    };
                }, 2000);

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
