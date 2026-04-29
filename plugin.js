(function () {
    'use strict';

    if (window.my_plugin_active) return;
    window.my_plugin_active = true;

    var btnId = 'plugin_site_button';

    function inject() {
        if (document.getElementById(btnId)) return;

        // Находим оригинал "Настройки"
        var sample = $('.menu__item[data-action="settings"]');
        if (sample.length === 0) sample = $('.menu__item').first();
        if (sample.length === 0) return;

        // Клонируем через jQuery, чтобы сохранить обработчики событий
        var clone = sample.clone();
        
        clone.attr('id', btnId);
        clone.attr('data-action', 'my_custom_action'); // Уникальное действие
        
        clone.find('.menu__text').text('ССЫЛКА НА САЙТ');
        clone.find('.menu__ico').html('<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg>');

        // Вставляем после оригинала
        sample.after(clone);

        // Главный секрет: вешаем обработчик именно так, как это делает Лампа
        clone.on('click hover:enter', function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Используем внутренний компонент Лампы для открытия контента/ссылок
            if (window.Lampa && Lampa.Activity) {
                Lampa.Activity.push({
                    url: 'https://google.com',
                    title: 'https://www.chaturbate.best/couple-cams/',
                    component: 'web_view', // Просим Лампу открыть это как внутреннюю страницу
                    page: 1
                });
            } else {
                // Запасной вариант, если Activity недоступен
                Lampa.Platform.openURL('https://google.com');
            }
        });
    }

    // Проверка появления меню
    var checkInterval = setInterval(function() {
        if ($('.menu__list').length > 0) {
            inject();
        }
    }, 2000);
})();

