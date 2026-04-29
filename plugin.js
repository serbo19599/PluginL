(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            target.on('click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                // Используем самую простую команду без проверок
                Lampa.Platform.openURL('https://www.russianfood.com/recipes/recipe.php?rid=119475'); 
                
                return false;
            });

            target.data('modded', true);
        }
    }

    setInterval(startMod, 1000);
})();

