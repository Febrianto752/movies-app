class DataSource {
  static getTop3RatedMovie() {
    return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7705cf962c57d72269442a0a9d1ce641&language=en-US&page=1')
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results) {
          const [top1, top2, top3] = responseJson.results;
          const top3Rated = [top1, top2, top3];
          return Promise.resolve(top3Rated);
        }
        return Promise.reject(new Error('something bad happened'));
      });
  }

  static getListGenre() {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7705cf962c57d72269442a0a9d1ce641&language=en-US')
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.genres) {
          return Promise.resolve(responseJson.genres);
        }
        return Promise.reject(new Error('something bad happened'));
      });
  }

  static moviePopulars() {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=7705cf962c57d72269442a0a9d1ce641&language=en-US&page=1')
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        }
        return Promise.reject(new Error('something bad happened'));
      });
  }

  static searchMovie(keyword = null) {
    if (keyword) {
      return fetch(`
      https://api.themoviedb.org/3/search/movie?api_key=7705cf962c57d72269442a0a9d1ce641&language=en-US&query=${keyword}&page=1&include_adult=false`)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.results) {
            return Promise.resolve(responseJson.results);
          }
          return Promise.reject(new Error('Movie is not found!'));
        });
    }
    this.moviePopulars();
  }
}

export default DataSource;
