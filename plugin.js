(function () {
    'use strict';

    Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
            var item = $('<div class="menu__item selector focus">\n' +
                '<div class="menu__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/></svg></div>\n' +
                '<div class="menu__text">Мой сайт</div>\n' +
                '</div>');

            item.on('hover:enter', function () {
                Lampa.Component.add('my_site', function (object, exam) {
                    this.create = function () {
                        return $('<iframe src="' + object.url + '" style="width: 100%; height: 100%; border: none;"></iframe>');
                    };
                });

                Lampa.Activity.push({
                    url: 'https://www.russianfood.com/recipes/recipe.php?rid=119475',
                    title: 'Мой сайт',
                    component: 'my_site'
                });
            });

            $('.menu .menu__list').append(item);
        }
    });
})();
