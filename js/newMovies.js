$(document).ready(function () {
var movies = {};
function findMovies(start, end) {
  axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
        movies = response.data.results.slice(start, end);
        });
};
findMovies(0,5);
console.log(movies);
function getNewMovies(movies) {
  console.log(movies);
        var newOutput = '';
        $.each(movies, function (index, movie) {
          newOutput += `
          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="film-block text-center">
              <img class="film-block-img"src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
              <p class="film-block-title">${movie.title}</p>
            </div>
          </div>
          `;
        });
      $('#newMovies').html(newOutput); };

getNewMovies(movies);
});