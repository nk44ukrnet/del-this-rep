/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


//remove ads
const promoImg = document.querySelectorAll('.promo__adv img');
promoImg.forEach( (item) => {
   item.remove();
});
const promoAdv = document.querySelector('.promo__adv');
promoAdv.remove();

//change genre
const genre = document.querySelector('.promo__genre');
genre.innerText = 'драма'.toUpperCase();

//change promo bg
const promoBg = document.querySelector('.promo__bg');
promoBg.style.background = 'url(img/bg.jpg) center center/cover no-repeat';

//list of films from js
let listItemFilm = document.querySelectorAll('.promo__interactive-item');
listItemFilm.forEach(function (item, num) {
   item.innerText =  `${num+1}. ${movieDB.movies[num]}`;
});