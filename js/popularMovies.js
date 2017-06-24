$(document).ready(function () {

var popMovies = [],
	pageNumber = 1,
	getUrl = () => 'https://api.themoviedb.org/3/discover/movie?api_key=436fedae44d7b81338702a9341ae7a74&sort_by=popularity.desc&vote_average.gte=6&page=' + pageNumber;
	start = 0,
	end = 4,
	showMovies = function (popMovies, start, end) {
		return popMovies.slice(start, end);
;
	},
	moreBtn = $('#more_popular');


function getPopularMovies(start, end) {
	let popOutput = '';
	axios.get(getUrl()).then(function (response) {
	popMovies = response.data.results;
	
	$.each(showMovies(popMovies, start, end), function (index, movie) {
		popOutput += `
			<div class="col-xs-12 col-sm-6 col-md-3 no-padding">
				<div class="film-block text-center">
					<img class="film-block-img" src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
					<p class="film-block-title">${movie.title}</p>
					<div class="overlay">
						<p class="film-descr-item"><strong>Title: </strong>${movie.title}</p>
						<p class="film-descr-item"><strong>Release Date: </strong>${movie.release_date}</p>
						<p class="film-descr-item"><strong>Rating: </strong>${movie.popularity}</p>
						<p class="movie-info"><strong> Plot: </strong>${movie.overview}</p>
						<button class="btn btn-primary">See more info</a>
					</div>
				</div>
			</div>
					`;
		});
		$('#popular').append(popOutput);
		}).catch(function (err) {
			console.log(err);
			});
};

getPopularMovies(start, end);


moreBtn.click( function() {
	if(end >= 20) {
		start = 0;
		end = 4;
		pageNumber++
	}
	else {
		start += 4;
		end += 4;
	}

	getPopularMovies(start,end);

});

});