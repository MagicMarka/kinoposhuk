$(document).ready(function () {

	var moviesArr = ['The Shawshank Redemption', 'The Godfather', 'Pulp Fiction', 'Fight Club'];
	var moviesArrLength = moviesArr.length;


		function getPopularMovies(movieName) {
			axios.get('http://www.omdbapi.com/?s=' + movieName + '&apikey=bf276604').then(function (response) {
				console.log(response);
				var popMovies = response.data.Search;
				var popOutput = '';
				$.each(popMovies, function (index, movie) {
					popOutput += `
					<div class="col-md-3">
						<div class="film-block text-center">
							<img src="${movie.Poster}">
							<p class="film-block-title">${movie.Title}</p>
						</div>
					</div>
					`;
				});
			$('#popular').html(popOutput);
			}).catch(function (err) {
				console.log(err);
				});
		};




	for (var i=0; i<moviesArrLength; i++) {
		var movieName = moviesArr[i];

	};


getPopularMovies(movieName);


});