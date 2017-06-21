$(document).ready(function () {


		function getPopularMovies() {
			axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
				console.log(response);
				var popMovies = response.data.results;
				var popOutput = '';
				$.each(popMovies, function (index, movie) {
					popOutput += `
					<div class="col-md-3">
						<div class="film-block text-center">
							<img src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
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


});