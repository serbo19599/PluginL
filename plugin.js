(function () {
    'use strict';

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            target.on('click', function () {
                Lampa.Platform.openURL('https://www.russianfood.com/recipes/recipe.php?rid=119475'); 
            });

            target.data('modded', true);
        }
    }

    setInterval(startMod, 1000);
})();
