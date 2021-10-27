import './movie-item';

class MovieList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }


  render() {
    this.innerHTML = `
    <section id="main-section">
      <div class="container">
        <header class="pt-5">
          <h4 class="text-white mb-5">Movie List</h4>
        </header>
        <main class="movie-list">
          <div class="row justify-content-around">

          </div>
        </main>
      </div>
    </section>`;

    if (this._movies) {
      this.querySelector('.row').innerHTML = '';
      this._movies.forEach(movie => {
        const movieItemElement = document.createElement('movie-item');
        movieItemElement.movie = movie;
        this.querySelector('.row').appendChild(movieItemElement);
      });
    }

  }

  renderError(message) {
    this.querySelector('.row').innerHTML = `${message}`;
  }
}

customElements.define('movie-list', MovieList);