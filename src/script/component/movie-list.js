import './movie-item';

class MovieList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set movies(movies) {
    this.moviess = movies;
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
          <div class="row justify-content-around px-1">

          </div>
        </main>
      </div>
    </section>`;

    if (this.moviess) {
      this.querySelector('.row').innerHTML = '';
      this.moviess.forEach((movie) => {
        const movieItemElement = document.createElement('movie-item');
        movieItemElement.movie = movie;
        this.querySelector('.row').appendChild(movieItemElement);
      });
    }
  }

  renderError(message) {
    this.querySelector('.row').style.width = '100%';
    this.querySelector('.row').innerHTML = `<div class="col justify-content-center text-white text-center w-100">${message}</div>`;
  }
}

customElements.define('movie-list', MovieList);
