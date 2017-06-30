import { $ } from './utils';
import axios from 'axios';


$(document).ready(function () {

var movieID = '',
    movie = {},
    modalContent = '';

$('#movies, #popular, #new, #in_theatres, #action, #drama').on('click', '.movie', function(){
	$('#myModal').modal('show');
	movieID = $(this).data('id');
	getMovieInfo(movieID);
	getMovieTrailer(movieID);
	getCastsInfo(movieID);
	getMovieImgs(movieID);

});


function getMovieInfo(movieID) {
	axios.get('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
		movie = response.data;
		console.log(movie);
		var genres = movie.genres;
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
					<h3>Rating</h3>
					<p> <span class="stars" data-rating="${movie.vote_average}" data-num-stars="10" ></span> </p>
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
				</div>
			</div>
			<div class="col-md-12 img-slider" id="images">
			</div>
			<div class="col-md-12">
				<div class="trailer-block" id="trailer">
            </div>
            <div class="col-md-12">
				<div class="casts" id="casts">
					<h3>Starring</h3>
				</div>
			</div>`;
		$('#modalInner').html(modalContent);
		$.map(genres, function(genre) {
			var genre = `<a id="genre" class="genre" data-target="#myModal" href=#${genre.name}-block>${genre.name} </a> /`;
			$('#genres').append(genre);
		});
$('#genre').on('click', function(e) {
	e.preventDefault;
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('#myModal').modal('hide');
	$('body,html').animate({scrollTop: top}, 1500);
		
	});

	})
}


function getCastsInfo(movieID) {
	axios.get('https://api.themoviedb.org/3/movie/' + movieID + '/credits?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
		var castsResponce = response.data;
		var casts = castsResponce.cast;
		casts = casts.slice(0,4);
		console.log(castsResponce);
		$.map(casts, function(movie) {
			var actors = `
				<div class="col-md-3 actor">
					<img src="https://image.tmdb.org/t/p/w92${movie.profile_path}" alt="" />
					<div class="row actor-name">
						<p class="text-center">${movie.name}</p> 
						<p class="text-center char"> ${movie.character}</p>
					</div>
				</div>`
			$('#casts').append(actors);
		})
	});
}

function getMovieImgs(movieID) {
	axios.get('https://api.themoviedb.org/3/movie/' + movieID + '/images?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
		var imgResponce = response.data.backdrops;
		imgResponce = imgResponce.slice(0,10);
				console.log(imgResponce);
		$.map(imgResponce, function(img) {
			var images = `
			<div>
			<img src="https://image.tmdb.org/t/p/w300${img.file_path}" alt="" /></div>`
			$('#images').append(images);
		});
		initSlider();
	});
}

function getMovieTrailer(movieID) {
    axios.get('https://api.themoviedb.org/3/movie/' + movieID + '/videos?api_key=436fedae44d7b81338702a9341ae7a74').then(function (response) {
        var movieTrailer = response.data.results;
        console.log(movieTrailer);
        movieTrailer = movieTrailer.slice(0,1);
        $.map(movieTrailer, function(video) {
        	var url = 'https://www.youtube.com/embed/' +video.key;
            var trailer = `
            <div class="col-md-12 trailer">
            <iframe width="100%" height="415" src="${url}" frameborder="0"></iframe>
            </div>`
                $('#trailer').append(trailer);
            })
        });
};


function initSlider(){
$('.img-slider').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  variableWidth: true,
  autoplay: true,
  slidesToScroll: 1,
  centerPadding: '20px',

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 8
      }
    }
  ]
});
}



$('#myModal').on('hidden.bs.modal', function () {
$('#myModal .modal-content').find('#modalInner').attr('src','');});

});
