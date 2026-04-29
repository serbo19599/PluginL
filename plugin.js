(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            // 1. Меняем внешний вид
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            // 2. Убиваем все стандартные обработчики Лампы на этой кнопке
            target.unbind().off(); 

            // 3. Вешаем наш обработчик с высшим приоритетом
            target.on('click hover:enter', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();

                var url = 'https://www.chaturbate.best/couple-cams/'; // ВАШ АДРЕС

                // Используем системный вызов Tizen напрямую
                try {
                    if (window.tizen) {
                        // Если это чистый Tizen
                        Lampa.Platform.openURL(url);
                    } else {
                        // Если это WebOS или Android версия
                        Lampa.Platform.openURL(url);
                    }
                } catch (err) {
                    window.location.href = url;
                }

                return false;
            });

            // 4. Метка, чтобы Лампа не перерисовала её обратно
            target.data('modded', true);
            target.attr('data-plugin-custom', 'true');
        }
    }

    // Запускаем агрессивный цикл проверки (каждые полсекунды)
    // Если Лампа попытается вернуть кнопку "Сериалы", мы тут же перехватим её снова
    setInterval(startMod, 500);
})();
