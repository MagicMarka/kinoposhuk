$(document).ready(function () {
var movieID = '',
	genres = [],
	genre = '',
	origTitle = '',
	overview = '',
	poster = '',
	videoKey = '',
	homepage = ''
	duration = '',
	tagline = '',
	similar = '',
	actors = '',
    movie = {},
    modalContent = '',
	infoBtn = $('#infoBtn');
$('#popular').on('click', '.movie', function(){
	movieID = $(this).data('id');
	getMovieInfo(movieID);
	getCastsInfo(movieID);
$('#myModal').modal('show');
});

$('#new').on('click', '.movie', function(){
	movieID = $(this).data('id');
	getMovieInfo(movieID);
	getCastsInfo(movieID);
$('#myModal').modal('show');
});
$('#in_theatres').on('click', '.movie', function(){
	movieID = $(this).data('id');
	getMovieInfo(movieID);
	getCastsInfo(movieID);
$('#myModal').modal('show');
});


function getMovieInfo(movieID) {
	axios.get('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
		movie = response.data;
		console.log(movie);
		genres = movie.genres;
		poster = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
		origTitle = movie.original_title;
		modalContent = `
			<div class="col-md-12 modal-title text-center">
				<h2>${movie.original_title}</h2>
				<p> ${movie.tagline}</p>
			</div>
			<div class="col-md-5">
				<object class="film-block-img" data="https://image.tmdb.org/t/p/w300${movie.poster_path}" type="image/jpg">
					<img class="film-block-img"  src="img/default.png" />
				</object>
			</div>
			<div class="col-md-7">
				<div class="full-info">
					<h3>Genre: </h3>
					<p id="genres"> </p>
					<p><strong>Homepage: </strong> <a href="${movie.homepage}">${movie.homepage}</a> </p>
					<p><strong>Release date:</strong> ${movie.release_date}</p>
					<p><strong>Duration: </strong> ${movie.runtime} minutes </p>
					<h3>Storyline</h3>
					<p> ${movie.overview}</p>
					
				</div>
			</div>
			<div class="col-md-12">
				<div class="casts" id="casts">
				<h3>Starring</h3>
				
			
			`;
		$('#modalInner').html(modalContent);
					$.map(genres, function(genre) {
				genre = ` ${genre.name}/`;
				$('#genres').append(genre);
			})
	})

}


function getCastsInfo(movieID) {
	axios.get('https://api.themoviedb.org/3/movie/' + movieID + '/credits?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
		var castsResponce = response.data;
		var casts = castsResponce.cast;
		casts = casts.slice(0,4);
		console.log(castsResponce);
		$.map(casts, function(movie) {
			actors = `
			<div class="col-md-3 actor">
				<img src="https://image.tmdb.org/t/p/w92${movie.profile_path}" alt="" />
				<div class="row">
					<p class="text-center">${movie.name}</p> 
					<p  class="text-center"> ${movie.character}</p>
				</div>
			</div>
			</div>
			</div>`
			$('#casts').append(actors);
		})
		
	});
}

});
