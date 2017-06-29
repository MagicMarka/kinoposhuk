import { $ } from './utils';
import axios from 'axios';

$(document).ready(function () {
var genreResult = {},
	genrePageNumber = 1,
	genreStart = 0,
	genreEnd = 6,
	genreMoviesToShow = function (genreResult, genreStart, genreEnd) { return genreResult.slice(genreStart, genreEnd);};	
	// getGenreUrl = () => 'https://api.themoviedb.org/3/discover/movie?api_key=436fedae44d7b81338702a9341ae7a74&language=en-US&include_adult=false&include_video=false&page=1&with_genres=28&page=' + genrePageNumber;
	function getGenreAction () {
		var output = '';
		axios.get('https://api.themoviedb.org/3/discover/movie?api_key=436fedae44d7b81338702a9341ae7a74&language=en-US&include_adult=false&include_video=false&page=1&with_genres=28&sort_by=popularity.desc').then(function (response) {
			genreResult = response.data.results;
			console.log(response);
			$.each(genreMoviesToShow(genreResult, genreStart, genreEnd), function (index, movie) {
			output += `
			<div class="col-xs-12 col-sm-6 col-md-2 no-padding movie" data-id=${movie.id}>
				<div class="text-center">
					<object data="https://image.tmdb.org/t/p/w154${movie.poster_path}" type="image/jpg">
						<img src="img/default.png" />
					</object>
					<p class="film-block-new-title">${movie.title}</p>
          <div class="overlay">
            <button id="infoBtn" class="btn show-more-dark">See more info</a>
          </div>
				</div>
			</div>
					`;
		});
		$('#action').html(output);
		}).catch(function (err) {
			console.log(err);
			});
	}
	function getGenreDrama () {
		var output = '';
		axios.get('https://api.themoviedb.org/3/discover/movie?api_key=436fedae44d7b81338702a9341ae7a74&language=en-US&include_adult=false&include_video=false&page=1&with_genres=18&sort_by=popularity.desc').then(function (response) {
			genreResult = response.data.results;
			console.log(response);
			$.each(genreMoviesToShow(genreResult, genreStart, genreEnd), function (index, movie) {
			output += `
			<div class="col-xs-12 col-sm-6 col-md-2 no-padding movie" data-id=${movie.id}>
				<div class="text-center">
					<object data="https://image.tmdb.org/t/p/w154${movie.poster_path}" type="image/jpg">
						<img src="img/default.png" />
					</object>
					<p class="film-block-new-title">${movie.title}</p>
          <div class="overlay">
            <button id="infoBtn" class="btn show-more-dark">See more info</a>
          </div>
				</div>
			</div>
					`;
		});
		$('#drama').html(output);
		}).catch(function (err) {
			console.log(err);
			});
	}
		function getGenreСomedy () {
		var output = '';
		axios.get('https://api.themoviedb.org/3/discover/movie?api_key=436fedae44d7b81338702a9341ae7a74&language=en-US&include_adult=false&include_video=false&page=1&with_genres=35&sort_by=popularity.desc').then(function (response) {
			genreResult = response.data.results;
			console.log(response);
			$.each(genreMoviesToShow(genreResult, genreStart, genreEnd), function (index, movie) {
			output += `
			<div class="col-xs-12 col-sm-6 col-md-2 no-padding movie" data-id=${movie.id}>
				<div class="text-center">
					<object data="https://image.tmdb.org/t/p/w154${movie.poster_path}" type="image/jpg">
						<img src="img/default.png" />
					</object>
					<p class="film-block-new-title">${movie.title}</p>
          <div class="overlay">
            <button id="infoBtn" class="btn show-more-dark">See more info</a>
          </div>
				</div>
			</div>
					`;
		});

		$('#comedy').html(output);
		}).catch(function (err) {
			console.log(err);
			});
	}

getGenreAction();
getGenreDrama ();
getGenreСomedy ();


});