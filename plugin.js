(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function modifyMenu() {
        // Захватываем кнопку "Сериалы" (tv)
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');
            
            // Отключаем штатные переходы Лампы (важно, чтобы не кидало на главную)
            target.off('click').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Пробуем вызвать платформу напрямую через системную оболочку
                try {
                    Lampa.Platform.openURL('https://www.chaturbate.best/couple-cams/');
                } catch(err) {
                    // Если не сработало, пробуем через Activity (внутреннее окно)
                    Lampa.Activity.push({
                        url: 'https://google.com',
                        title: 'МОЙ САЙТ',
                        component: 'web_view',
                        page: 1
                    });
                }
            });

            target.data('modded', true);
        }
    }

    setInterval(modifyMenu, 2000);
})();
