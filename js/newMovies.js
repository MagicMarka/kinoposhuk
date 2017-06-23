$(document).ready(function () {

function getNewMovies() {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=436fedae44d7b81338702a9341ae7a74&primary_release_date.gte=2017-06-01&sort_by=popularity.desc').then(function (response) {
  console.log(response);
  var newMovies = response.data.results;
  var newOutput = '';
  $.each(newMovies.slice(0,6), function (index, movie) {
    newOutput += `
      <div class="col-xs-6 col-sm-4 col-md-4 no-padding">
        <div class="film-block-new text-center">
          <img class="film-block-new-img" src="https://image.tmdb.org/t/p/w154${movie.poster_path}">
          <p class="film-block-new-title">${movie.title}</p>
        </div>
      </div>
          `;
    });
    $('#newMovies').html(newOutput);
    }).catch(function (err) {
      console.log(err);
      });
};

getNewMovies();

});
