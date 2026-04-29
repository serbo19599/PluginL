(function () {
    'use strict';

    // Проверка на дубликаты
    if (window.my_mod_active) return;
    window.my_mod_active = true;

    function startMod() {
        // Ищем кнопку через нативный JS (безопаснее, чем $)
        var items = document.querySelectorAll('.menu__item');
        var target = null;

        for (var i = 0; i < items.length; i++) {
            if (items[i].getAttribute('data-action') === 'tv') {
                target = items[i];
                break;
            }
        }
        
        if (target && !target.getAttribute('data-modded')) {
            // Меняем текст
            var textEl = target.querySelector('.menu__text');
            if (textEl) textEl.innerText = 'МОЙ САЙТ';
            target.style.color = '#ffeb3b';

            // Перехватываем клик напрямую
            target.onclick = function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ВАШ АДРЕС (обязательно с https://)

                try {
                    // Используем самый стабильный метод Лампы
                    if (window.Lampa && window.Lampa.Platform) {
                        window.Lampa.Platform.openURL(url);
                    } else {
                        window.location.href = url;
                    }
                } catch (err) {
                    console.log('Open error:', err);
                }

                return false;
            };

            target.setAttribute('data-modded', 'true');
        }
    }

    // Запускаем проверку каждые 2 секунды (не слишком часто, чтобы не грузить ТВ)
    setInterval(startMod, 2000);
})();
