$(document).ready(function () {
  $('#searchForm').on('submit', function (e) {
    var searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=436fedae44d7b81338702a9341ae7a74&query=' + searchText).then(function (response) {
    console.log(response);
    var movies = response.data.results;
    var output = '';
    $.each(movies, function (index, movie) {
      output += `
         <div class="col-md-3">
            <div class="film-block text-center">
              <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
              <p class="film-block-title">${movie.original_title}</p>

            </div>
          </div>
        `;
    });

    $('#movies').html(output);
  }).catch(function (err) {
    console.log(err);
  });
}

// function movieSelected(id) {
//   sessionStorage.setItem('movieId', id);
//   window.location = 'movie.html';
//   return false;
// }

// function getMovie() {
//   var movieId = sessionStorage.getItem('movieId');

//   axios.get('http://www.omdbapi.com?i=' + movieId).then(function (response) {
//     console.log(response);
//     var movie = response.data;

//     var output = '\n        <div class="row">\n          <div class="col-md-4">\n            <img src="' + movie.Poster + '" class="thumbnail">\n          </div>\n          <div class="col-md-8">\n            <h2>' + movie.Title + '</h2>\n            <ul class="list-group">\n              <li class="list-group-item"><strong>Genre:</strong> ' + movie.Genre + '</li>\n              <li class="list-group-item"><strong>Released:</strong> ' + movie.Released + '</li>\n              <li class="list-group-item"><strong>Rated:</strong> ' + movie.Rated + '</li>\n              <li class="list-group-item"><strong>IMDB Rating:</strong> ' + movie.imdbRating + '</li>\n              <li class="list-group-item"><strong>Director:</strong> ' + movie.Director + '</li>\n              <li class="list-group-item"><strong>Writer:</strong> ' + movie.Writer + '</li>\n              <li class="list-group-item"><strong>Actors:</strong> ' + movie.Actors + '</li>\n            </ul>\n          </div>\n        </div>\n        <div class="row">\n          <div class="well">\n            <h3>Plot</h3>\n            ' + movie.Plot + '\n            <hr>\n            <a href="http://imdb.com/title/' + movie.imdbID + '" target="_blank" class="btn btn-primary">View IMDB</a>\n            <a href="index.html" class="btn btn-default">Go Back To Search</a>\n          </div>\n        </div>\n      ';

//     $('#movie').html(output);
//   }).catch(function (err) {
//     console.log(err);
//   });


//   var ids = ["tt0068646","tt0111161","tt0108052"];

// getMoviesByimdbID(ids);

// function getPopularMovies(){
//     axios.get('http://www.omdbapi.com/?s=' + ar[i] + '&apikey=bf276604').then(function (response) {
//     console.log(response);
//     var popularMovies = response.data.Search;
//     var popularOutput = '';
//     $.each(movies, function (index, movie) {
//       popularOutput += `
//          <div class="col-md-3">
//             <div class="film-block text-center">
//               <img src="${movie.Poster}">
//               <p class="film-block-title">${movie.Title}</p>
//             </div>
//           </div>
//         `;
//     });

//     $('#popular').html(output);
//   }).catch(function (err) {
//     console.log(err);
//   });
    
// }
