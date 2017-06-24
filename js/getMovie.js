$(document).ready(function () {
var movieID = '',
	genres = [],
	imdbId = '',
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
});

function movieInfo(movieID) {
	axios.get('https://api.themoviedb.org/3/movie/discover?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
		movie = response.data.results;
		console.log(movie);
	})
}

});
