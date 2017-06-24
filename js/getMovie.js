$(document).ready(function () {
var movieID = '',
	genres = [],
	origTitle = '',
	overview = '',
	poster = '',
	videoKey = '',
	similar = '',
    movie = {};
var infoBtn = $('#infoBtn');
$('#popular').on('click', '.movie', function(){
	movieID = $(this).data('id');
	console.log(movieID);
	movieInfo(movieID);
	castsInfo(movieID);
});

function movieInfo(movieID) {
	axios.get('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
		var movie = response.data;
		genres = movie.genres;
		poster = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
	})
}
function castsInfo(movieID) {
	axios.get('https://api.themoviedb.org/3/movie/' + movieID + 'credits?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
		var movie = response.data;
		origTitle = movie.original_title;
		overview = movie.overview;

		console.log(movie);
	});
}

});
