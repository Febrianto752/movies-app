import DataSource from '../data/data-source';
import '../component/banner-app';
import '../component/movie-list';

function main() {
  const banner = document.querySelector('banner-app');
  const btnSearch = document.querySelector('#btn-search');
  const movieList = document.querySelector('movie-list');
  const inputSearch = document.querySelector('.input-search');

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
      });
      banner.items = top3Rated;
    } catch (error) {
      console.log(error);
    }
  };

  const showMovieList = async (keyword = false) => {
    try {
      let movies = null;
      const listMovieGenre = await DataSource.getListGenre();
      if (keyword) {
        movies = await DataSource.searchMovie(keyword);
      } else {
        movies = await DataSource.moviePopulars();
      }

      movies.forEach((movie, i) => {
        const genreNames = getGenreNameById(listMovieGenre, movie.genre_ids);
        movies[i].genre_names = genreNames;
      });

      movieList.movies = movies;
    } catch (error) {
      movieList.renderError(error);
    }
  };

  btnSearch.addEventListener('click', () => {
    showMovieList(inputSearch.value);
  });

  inputSearch.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      btnSearch.click();
    }
  });

  setBanner();
  showMovieList();
}

export default main;
