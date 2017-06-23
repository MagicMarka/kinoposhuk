$(document).ready(function () {

var popMovies = [],
	pageNumber = 1,
<<<<<<< HEAD
	url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=436fedae44d7b81338702a9341ae7a74&page=' + pageNumber,
=======
	url = 'https://api.themoviedb.org/3/discover/movie?api_key=436fedae44d7b81338702a9341ae7a74&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&page=' + pageNumber,
>>>>>>> master
	start = 0,
	end = 4,
	showMovies = function (popMovies, start, end) {
		popMovies = popMovies.slice(start, end);
		return popMovies;
		console.log(popMovies);
	},
	popOutput = '';

function getPopularMovies() {
	axios.get(url).then(function (response) {
	console.log(response);
	popMovies = response.data.results;
	$.each(showMovies(popMovies, start, end), function (index, movie) {
		popOutput += `
			<div class="col-xs-12 col-sm-6 col-md-3 no-padding">
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

function morePopularMovies(start, end) {
	axios.get(url).then(function (response) {
	var movies = response.data.results;
	$.each(showMovies(popMovies, start, end), function (index, movie) {
		popOutput += `
			<div class="col-xs-12 col-sm-6 col-md-3 no-padding">
				<div class="film-block text-center">
					<img class="film-block-img"src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
					<p class="film-block-title">${movie.title}</p>
				</div>
			</div>
			`;});
				});
	$('#popular').html(popOutput);
}

$('#more_popular').click( function() {
	if(end > 20) {
		pageNumber +=1;
		start = 0;
		end = 4;
		console.log(url);
	}
	else {
		start += 4;
		end += 4;
	}

morePopularMovies(start,end);

});

});