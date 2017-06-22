$(document).ready(function () {

var popMovies = [];
var showMovies = function (popMovies, start, end) {
	popMovies = popMovies.slice(start, end);
	return popMovies;
	console.log(popMovies);
	getPopularMovies();
};

		function getPopularMovies() {
			axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
				console.log(response);
				var popMovies = response.data.results;
				var popOutput = '';
				$.each(showMovies(popMovies, 0, 4), function (index, movie) {
					popOutput += `
					<div class="col-xs-12 col-sm-6 col-md-3">
						<div class="film-block text-center">
							<img class="film-block-img" src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
							<p class="film-block-title">${movie.title}</p>
						</div>
					</div>
					`;
				});
			$('#popular').html(popOutput);
			}).catch(function (err) {
				console.log(err);
				}); 
		};



getPopularMovies();

// $('#more_popular').click( function(){ 
// 	showMovie(popMovies, 5, 9);
// }
// );

});



// $(document).ready(function () {
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.themoviedb.org/3/movie/popular?total_results=5&api_key=436fedae44d7b81338702a9341ae7a74",
//   "method": "GET",
//   "headers": {},
//   "data": "{}"
// }
// var popMovies = [];
// $.ajax(settings).done(function (response) {
//     popMovies = response.results;
//     console.log(popMovies);
// });
//         function getPopularMovies() {
//             var popOutput = '';
//             $.each(popMovies, function (index, movie) {
                
//                     popOutput += `
//                     <div class="col-xs-12 col-sm-6 col-md-3">
//                         <div class="film-block text-center">
//                             <img class="film-block-img" src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
//                             <p class="film-block-title">${movie.title}</p>
//                         </div>
//                     </div>
//                     `;
//                 });
//             $('#popular').html(popOutput);
//         };
// getPopularMovies();
// });