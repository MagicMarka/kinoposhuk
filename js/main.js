$(document).ready(function () {
  $('#searchForm').on('submit', function (e) {
    var searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=436fedae44d7b81338702a9341ae7a74&language=ua&query=' + searchText).then(function (response) {
    console.log(response);
    var movies = response.data.results;
    var output = '';
    $.each(movies, function (index, movie) {
      var img = movie.poster_path;
      output += `
          <div class="col-xs-12 col-sm-6 col-md-3 no-padding">
            <div class="film-block text-center">
              <object class="film-block-img" data="https://image.tmdb.org/t/p/w300${movie.poster_path}" type="image/jpg">
                 <img class="film-block-img"  src="img/default.png" />
              </object>
              <p class="film-block-title">${movie.original_title}</p>
              <a id="infoBtn" class="btn show-more" href="#">Movie Details</a>
            </div>
          </div>
        `;
    });

    $('#movies').html(output);
  }).catch(function (err) {
    console.log(err);
  });
}


