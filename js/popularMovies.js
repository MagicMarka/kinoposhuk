$(document).ready(function () {

var popMovies = [];
var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=436fedae44d7b81338702a9341ae7a74';
var start = 0;
var end = 4;
var showMovies = function (popMovies, start, end) {
	popMovies = popMovies.slice(start, end);
	return popMovies;
	console.log(popMovies);
};
				var popOutput = '';
		function getPopularMovies() {
			axios.get(url).then(function (response) {
				console.log(response);
				popMovies = response.data.results;
				// var popOutput = '';
				$.each(showMovies(popMovies, start, end), function (index, movie) {
					popOutput += `
					<div class="col-xs-12 col-sm-6 col-md-3">
						<div class="film-block text-center">
							<img class="film-block-img"src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
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

function morePopularMovies(start, end) {
			axios.get(url).then(function (response) {
				var movies = response.data.results;
				// var moreOutput = '';
				$.each(showMovies(popMovies, start, end), function (index, movie) {
					popOutput += `
					<div class="col-xs-12 col-sm-6 col-md-3">
						<div class="film-block text-center">
							<img class="film-block-img"src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
							<p class="film-block-title">${movie.title}</p>
						</div>
					</div>
					`;});
				});
			$('#popular').html(popOutput);
		}



$('#more_popular').click( function(){
start+=4;
end+=4;
morePopularMovies(start,end);

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
});