import { $ } from './utils';
import axios from 'axios';

$(document).ready(function () {

var popMovies = [],
	pageNumber = 1,
	getUrl = () => 'https://api.themoviedb.org/3/discover/movie?api_key=436fedae44d7b81338702a9341ae7a74&sort_by=popularity.desc&vote_average.gte=7&page=' + pageNumber,
	start = 0,
	end = 4,
	showMovies = function (popMovies, start, end) {
		return popMovies.slice(start, end);
	},
	moreBtn = $('#more_popular'),
	infoBtn = $('#infoBtn'),
	movie = {};
// function ratingStars() {
// 	$.fn.stars = function() {
// 	return $(this).each(function() {
// 	var rating = $(this).data("rating");
// 	var numStars = $(this).data("numStars");
// 	var fullStar = new Array(Math.floor(rating + 1)).join('<i class="fa fa-star"></i>');
// 	var halfStar = ((rating%1) !== 0) ? '<i class="fa fa-star-half-empty"></i>': '';
// 	var noStar = new Array(Math.floor(numStars + 1 - rating)).join('<i class="fa fa-star-o"></i>');
// 		$(this).html(fullStar + halfStar + noStar);
// 		});
// 	}
// 	$('.stars').stars();
// }

function getPopularMovies(start, end) {
	let popOutput = '';
	axios.get(getUrl()).then(function (response) {
	popMovies = response.data.results;
	
	$.each(showMovies(popMovies, start, end), function (index, movie) {
				popOutput += `
			<div class="col-xs-12 col-sm-6 col-md-3 no-padding movie" data-id=${movie.id}>
				<div class="film-block text-center">
					<object class="film-block-img" data="https://image.tmdb.org/t/p/w300${movie.poster_path}" type="image/jpg">
						<img class="film-block-img"  src="img/default.png" />
					</object>
					<p class="film-block-title">${movie.title}</p>
					<div class="overlay">
						<p class="film-descr-item"><strong>Title: </strong>${movie.title}</p>
						<p class="film-descr-item"><strong>Release Date: </strong>${movie.release_date}</p>
						<p class="film-descr-item"><strong>Vote average: </strong>${movie.vote_average}/10</p>
						<span class="stars" data-rating="${movie.vote_average}" data-num-stars="10" ></span>
							<script>
							$.fn.stars = function() {
							return $(this).each(function() {
							var rating = $(this).data("rating");
							var numStars = $(this).data("numStars");
							var fullStar = new Array(Math.floor(rating + 1)).join('<i class="fa fa-star"></i>');
							var halfStar = ((rating%1) !== 0) ? '<i class="fa fa-star-half-empty"></i>': '';
							var noStar = new Array(Math.floor(numStars + 1 - rating)).join('<i class="fa fa-star-o"></i>');
								$(this).html(fullStar + halfStar + noStar);
								});
							}
							$('.stars').stars();
						</script>
						<p class="movie-info"><strong> Plot: </strong>${movie.overview}</p>
						<button id="infoBtn" class="btn show-more">See more info</a>
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