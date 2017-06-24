$(document).ready(function () {

function getUpcomingMovies() {
  axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=436fedae44d7b81338702a9341ae7a74&language=ua-UA&page=1&region=UA').then(function (response) {
  console.log(response);
  upcomingMovies = response.data.results.slice(0,4);
  var output = '';
  $.each(upcomingMovies, function (index, movie) {
    output += `
      <div class="col-xs-12 col-sm-6 col-md-6 no-padding">
        <div class="film-block-new text-center">
          <img class="film-block-new-img" src="https://image.tmdb.org/t/p/w154${movie.poster_path}">
          <p class="film-block-new-title">${movie.title}</p>
          <div class="overlay">
            <button id="infoBtn" class="btn show-more-dark">See more info</a>
          </div>
        </div>
      </div>
          `;
    });
    $('#in_theatres').html(output);
    }).catch(function (err) {
      console.log(err);
      });
    infoBtn.click
};

getUpcomingMovies();




});
