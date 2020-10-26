let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you watched?', '');

    while(numberOfFilms == ''
    || numberOfFilms == null
    || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many films have you watched?', '');

    }
}

//start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let q1 = '',
    q2 = '',
    q3 = '',
    q4 = '';

function rememberMyFilms() {
    while (!q1 || q1.length > 50) {
        q1 = prompt('Enter name of latest film you have watched', '');
    }
    while (!q2) {
        q2 = prompt('Rate this film', '');
    }
    while (!q3 || q3.length > 50) {
        q3 = prompt('Enter name of latest film you have watched', '');
    }
    while (!q4) {
        q4 = prompt('Rate this film', '');
    }
}

//rememberMyFilms();

personalMovieDb.movies[q1] = q2;
personalMovieDb.movies[q3] = q4;

let check = +personalMovieDb.count;


function detectPersonalLevel() {
    if (check < 10) {
        console.log('You have watched little amout of films');
    } else if (check >= 10 && check < 30) {
        console.log('You are typical film watcher');
    } else if (check >= 30) {
        console.log('You are film lover!!! For sure!')
    } else {
        console.log('There is an error with rating');
    }
}
//detectPersonalLevel();

function showMyDb(hidden) {
    if(!hidden) {
        console.log(personalMovieDb)
    }
}
showMyDb(personalMovieDb.privat);

function writeYourGenres() {
    let data = '';
    for(let i = 1; i <= 3; i++) {
        data = prompt(`Write your favorite genres nubmer: ${i}`);
        if(data === '' || data === null) {
            i--;
        } else {
            personalMovieDb.genres.push(data);
        }
        console.log(personalMovieDb.genres);

    }
}
writeYourGenres();

console.log(personalMovieDb);

