import './modal-item';
class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {

    this.setAttribute('class', 'col');
    this.innerHTML = `
    
      <div class="card" style="width: 16rem;">
        <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="image">
        <div class="card-text">
          <small class="genre">
            Fantasy
          </small>
          <div class="rate">
            <span>${this._movie.vote_average}</span>
            <i class="fas fa-star"></i>
          </div>
          <div class="movie-title">
            <p>${this._movie.title}</p>
          </div>
        </div>
        <button type="button" class="overlay" data-bs-toggle="modal" data-bs-target="#detailMovie">
          <span class="mt-1 me-1"><i class="fas fa-search"></i></span>
          <span>get detail</span>
        </button>

      </div>
    
    `;

    const movie = this._movie;
    const modal = document.querySelector('modal-item');
    this.querySelector('.overlay').addEventListener('click', () => {
      console.log(movie);
      console.log(modal);
      modal.body = movie;
    });


  }
}

customElements.define('movie-item', MovieItem);