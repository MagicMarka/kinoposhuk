$(document).ready(function () {
  // var newMovies = [],
  // // npageNumber = 1,
  // newUrl = '',
  // startNew = 0,
  // endNew = 12,
  // showNewMovies = function (start, end) {
  //   newMovies = newMovies.slice(start, end);
  //   return newMovies;
  //   console.log(newMovies);
  // },
  

function getNewMovies() {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=436fedae44d7b81338702a9341ae7a74&primary_release_date.gte=2017-06-01&sort_by=popularity.desc').then(function (response) {
  console.log(response);
  newMovies = response.data.results;
  newOutput = '';
  $.each(newMovies.slice(0,6), function (index, movie) {
    newOutput += `
      <div class="col-xs-12 col-sm-6 col-md-4 no-padding">
        <div class="film-block-new text-center">
          <img class="film-block-new-img" src="https://image.tmdb.org/t/p/w154${movie.poster_path}">
          <p class="film-block-title">${movie.title}</p>
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

// function moreNewMovies(startNew, endNew) {
//   axios.get(url).then(function (response) {
//   var movies = response.data.results;
//   $.each(showNewMovies(newMovies, startNew, endNew), function (index, movie) {
//     popOutput += `
//       <div class="col-xs-12 col-sm-6 col-md-3 no-padding">
//         <div class="film-block text-center">
//           <img class="film-block-img"src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
//           <p class="film-block-title">${movie.title}</p>
//         </div>
//       </div>
//       `;});
//         });
//   $('#newMovies').html(popOutput);
// }

// $('#more_new').click( function() {
//   if(end > 20) {
//     pageNumber +=1;
//     start = 0;
//     end = 3;
//     console.log(url);
//   }
//   else {
//     start += 3;
//     end += 3;
//   }
// morePopularMovies(start,end);
// });

});
