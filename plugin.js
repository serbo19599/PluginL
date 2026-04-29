(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ'); // Можете вписать свое название
            target.css('color', '#ffeb3b');

            target.on('hover:enter click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                // Вставьте сюда ВАШУ полную ссылку вместо google.com
                var url = 'https://www.chaturbate.best/couple-cams/'; 
                
                if (typeof Lampa.Platform.openURL === 'function') {
                    Lampa.Platform.openURL(url);
                } else {
                    window.location.href = url;
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
