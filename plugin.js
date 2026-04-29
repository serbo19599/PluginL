(function () {
    'use strict';

    if (window.my_mod_active) return;
    window.my_mod_active = true;

    // --- ФУНКЦИЯ КУРСОРА (Добавляем к рабочему коду) ---
    function createVirtualCursor() {
        if (document.getElementById('lampa-cursor')) return;
        
        var cursor = document.createElement('div');
        cursor.id = 'lampa-cursor';
        // Рисуем заметную точку
        cursor.setAttribute('style', 'position:fixed;width:15px;height:15px;background:#ffeb3b;border-radius:50%;border:2px solid #000;z-index:999999;pointer-events:none;display:none;top:50%;left:50%;box-shadow:0 0 10px rgba(0,0,0,0.5);');
        document.body.appendChild(cursor);

        var posX = window.innerWidth / 2;
        var posY = window.innerHeight / 2;

        window.addEventListener('keydown', function (e) {
            // Показываем курсор только если нажаты стрелки
            if ([37, 38, 39, 40].indexOf(e.keyCode) >= 0) {
                cursor.style.display = 'block';
                var step = 40; // Скорость движения точки

                if (e.keyCode === 37) posX -= step; // Влево
                if (e.keyCode === 38) posY -= step; // Вверх
                if (e.keyCode === 39) posX += step; // Вправо
                if (e.keyCode === 40) posY += step; // Вниз

                cursor.style.left = posX + 'px';
                cursor.style.top = posY + 'px';
                
                // Чтобы не листало страницу одновременно с движением точки
                e.preventDefault();
            }

            // Если нажали ОК (13) - имитируем клик в точке
            if (e.keyCode === 13 && cursor.style.display === 'block') {
                var el = document.elementFromPoint(posX, posY);
                if (el) {
                    el.click();
                    // Если это ссылка или кнопка, на которую нужно нажать принудительно:
                    var dispatchMouseEvent = function(target, var_args) {
                        var e = document.createEvent("MouseEvents");
                        e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
                        target.dispatchEvent(e);
                    };
                    dispatchMouseEvent(el, 'mousedown', true, true);
                    dispatchMouseEvent(el, 'mouseup', true, true);
                }
            }
        });
    }

    function startMod() {
        var target = $('.menu__item[data-action="tv"]');
        
        if (target.length > 0 && !target.data('modded')) {
            target.find('.menu__text').text('МОЙ САЙТ');
            target.css('color', '#ffeb3b');

            target.on('hover:enter click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                var url = 'https://www.russianfood.com/recipes/recipe.php?rid=119475'; // ВАШ АДРЕС
                
                if (typeof Lampa.Platform.openURL === 'function') {
                    Lampa.Platform.openURL(url);
                    // Активируем курсор при открытии
                    createVirtualCursor();
                } else {
                    window.location.href = url;
                }
                
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
