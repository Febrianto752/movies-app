import DataSource from '../data/data-source';
import '../component/banner-app';
import '../component/movie-list';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function main() {
  const banner = document.querySelector('banner-app');
  const modalDetailMovie = document.getElementById('detailMovie');
  const movieList = document.querySelector('movie-list');


  function getGenreNameById(listGenre, movieGenreIds) {
    const genreNames = [];
    movieGenreIds.forEach((mGenreId) => {
      listGenre.forEach((genre) => {
        if (genre.id === mGenreId) {
          genreNames.push(genre.name);
        }
      });
    });

    return genreNames;
  }

  const setBanner = async () => {
    try {
      const top3Rated = await DataSource.getTop3RatedMovie();
      const listMovieGenre = await DataSource.getListGenre();
      top3Rated.forEach((movie, i) => {
        const genreNames = getGenreNameById(listMovieGenre, movie.genre_ids);
        top3Rated[i].genre_names = genreNames;
        // movie.genre_names = genreNames;
      });
      banner.items = top3Rated;
    } catch (error) {
      console.log(error);
    }

    console.log('set banner');
  };

  const showMovieList = async () => {
    try {
      const moviePopulars = await DataSource.moviePopulars();
      const listMovieGenre = await DataSource.getListGenre();
      moviePopulars.forEach((movie, i) => {
        const genreNames = getGenreNameById(listMovieGenre, movie.genre_ids);
        moviePopulars[i].genre_names = genreNames;
      })

      movieList.movies = moviePopulars;

      // console.log(modalDetailMovie);
      console.log('hai');
    } catch (error) {
      movieList.renderError(error);
    }
  }

  setBanner();
  showMovieList();


}

export default main;