(function () {
    'use strict';

    // 1. ПОЛНАЯ БЛОКИРОВКА ДУБЛИКАТОВ
    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function modifyMenu() {
        // 2. ИЩЕМ ЖИВУЮ КНОПКУ (например, "Сериалы" или "Мультфильмы")
        // Можно заменить [data-action="tv"] на "anime" или "mult"
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            // 3. ПЕРЕКРАШИВАЕМ И ПЕРЕИМЕНОВЫВАЕМ
            target.find('.menu__text').text('https://www.chaturbate.best/couple-cams/');
            target.css('color', '#ffeb3b'); // Выделим цветом, чтобы вы её узнали
            
            // 4. ПОДМЕНЯЕМ ДЕЙСТВИЕ (Удаляем старые события, ставим свое)
            target.off('click').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                Lampa.Platform.openURL('https://google.com');
            });

            // Метка, чтобы не модифицировать повторно
            target.data('modded', true);
        }
    }

    // Запускаем проверку меню
    setInterval(modifyMenu, 2000);
})();
