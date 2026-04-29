(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    // Функция для создания эмуляции курсора внутри открытого окна
    function enableCursorNavigation() {
        var style = document.createElement('style');
        style.innerHTML = `
            #lampa-cursor {
                position: fixed;
                width: 20px;
                height: 20px;
                background: rgba(255, 235, 59, 0.7);
                border-radius: 50%;
                border: 2px solid #fff;
                z-index: 999999;
                pointer-events: none;
                display: none;
            }
        `;
        document.head.appendChild(style);
        var cursor = document.createElement('div');
        cursor.id = 'lampa-cursor';
        document.body.appendChild(cursor);

        var x = window.innerWidth / 2;
        var y = window.innerHeight / 2;

        window.addEventListener('keydown', function (e) {
            if (!$('.web-view__iframe').length) {
                cursor.style.display = 'none';
                return;
            }
            cursor.style.display = 'block';

            var step = 30;
            if (e.keyCode === 37) x -= step; // Влево
            if (e.keyCode === 38) y -= step; // Вверх
            if (e.keyCode === 39) x += step; // Вправо
            if (e.keyCode === 40) y += step; // Вниз

            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';

            if (e.keyCode === 13) { // OK
                var el = document.elementFromPoint(x, y);
                if (el) el.click();
            }
        });
    }

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            target.unbind().off().on('click hover:enter', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();

                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ВАШ АДРЕС

                Lampa.Activity.push({
                    url: url,
                    title: 'МОЙ САЙТ',
                    component: 'web_view',
                    page: 1
                });

                return false;
            });
            target.data('modded', true);
        }
    }

    enableCursorNavigation();
    setInterval(startMod, 500);
})();
