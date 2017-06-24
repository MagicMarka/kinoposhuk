$(document).ready(function () {
var movieID = '',
	genres = [],
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
$('#modalInner').html(modalContent);
});

function movieInfo(movieID) {
	axios.get('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
		var movie = response.data;
		genres = movie.genres;
		poster = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
		origTitle = movie.original_title;
		overview = movie.overview;
		homepage = movie.homepage;
		duration = movie.runtime;
		tagline = movie.tagline;
	})

}
function castsInfo(movieID) {
	axios.get('https://api.themoviedb.org/3/movie/' + movieID + '/credits?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
		var castsResponce = response.data;
		var casts = castsResponce.cast;
		casts = casts.slice(0,5);
		console.log(casts);
	});
}
	modalContent = `
	<h4 class="modal-title">${origTitle}</h4>
`;

});
