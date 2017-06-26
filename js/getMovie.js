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
    movie = {};
    var modalContent;
	var infoBtn = $('#infoBtn');
$('#popular').on('click', '.movie', function(){
	movieID = $(this).data('id');
	movieInfo(movieID);
	castsInfo(movieID);
$('#myModal').modal('show');
});
$('#movies').on('click', '.movie', function(){
	movieID = $(this).data('id');
	movieInfo(movieID);
	castsInfo(movieID);
$('#myModal').modal('show');
});
$('#new').on('click', '.movie', function(){
	movieID = $(this).data('id');
	movieInfo(movieID);
	castsInfo(movieID);
$('#myModal').modal('show');
});
$('#in_theatres').on('click', '.movie', function(){
	movieID = $(this).data('id');
	movieInfo(movieID);
	castsInfo(movieID);
$('#myModal').modal('show');
});
function movieInfo(movieID) {
	axios.get('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
		movie = response.data;
		console.log(movie);
		genres = movie.genres;
		poster = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
		origTitle = movie.original_title;
		overview = movie.overview;
		homepage = movie.homepage;
		duration = movie.runtime;
		tagline = movie.tagline;
		modalContent = `
			<div class="col-md-12">
				<h4 class="modal-title text-center">${movie.original_title}</h4>
				<p class="modal-title text-center"> ${movie.tagline}</p>
			</div>
			<div class="col-md-5">
				<object class="film-block-img" data="https://image.tmdb.org/t/p/w300${movie.poster_path}" type="image/jpg">
					<img class="film-block-img"  src="img/default.png" />
				</object>
			</div>
			<div class="col-md-7">
				<div class="full-info">
					<p id="genres">Genre: </p>
					<p>Release date: ${movie.release_date}</p>
					<p>Duration: ${movie.runtime} minutes </p>
					<p> ${movie.overview}</p>
					
				</div>
			</div>
			<div class="col-md-12">
				<div class="casts" id="casts">
				<h3>Cast</h3>
				</div>
			</div>
			`;
		$('#modalInner').html(modalContent);
					$.map(genres, function(genre) {
				genre = ` ${genre.name}/`;
				$('#genres').append(genre);
			})
	})

}
function castsInfo(movieID) {
	axios.get('https://api.themoviedb.org/3/movie/' + movieID + '/credits?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
		var castsResponce = response.data;
		var casts = castsResponce.cast;
		casts = casts.slice(0,6);
		console.log(castsResponce);
		$.map(casts, function(movie) {
			actors = `
			<div class="col-md-6 actor">
				<img src="https://image.tmdb.org/t/p/w92${movie.profile_path}" alt="" />
				<p>${movie.name}  <br> ${movie.character}</p>
				</div>`
			$('#casts').append(actors);
		})
		
	});
}

});
