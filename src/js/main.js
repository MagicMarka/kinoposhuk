require('./../../node_modules/jquery/dist/jquery.min.js');
require('./../../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('./../slick/slick.min.js');


import { $ } from './utils';
import axios from 'axios';



import './../css/main.css';

$(document).ready(function () {
  $('#searchForm').on('submit', function (e) {
    var searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=436fedae44d7b81338702a9341ae7a74&language=ua&query=' + searchText).then(function (response) {
    console.log(response);
    var movies = response.data.results;
    var output = '';
    $.each(movies, function (index, movie) {
      var img = movie.poster_path;
      output += `
          <div class="col-xs-12 col-sm-6 col-md-3 no-padding movie" data-id=${movie.id}>
            <div class="film-block text-center">
              <object class="film-block-img" data="https://image.tmdb.org/t/p/w300${movie.poster_path}" type="image/jpg">
                 <img class="film-block-img"  src="img/default.png" />
              </object>
            <div class="overlay">
              <p class="film-descr-item"><strong>Title: </strong>${movie.title}</p>
              <p class="film-descr-item"><strong>Release Date: </strong>${movie.release_date}</p>
              <p class="film-descr-item"><strong>Rating: </strong>${movie.popularity}</p>
              <p class="movie-info"><strong> Plot: </strong>${movie.overview}</p>
              <button id="infoBtn" class="btn show-more">See more info</a>
            </div>
          </div>
            </div>
          </div>
        `;
    });

    $('#movies').html(output);
    $('#searchForm')[0].reset();
  }).catch(function (err) {
    console.log(err);
  });

}


