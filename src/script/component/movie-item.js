import './modal-item';

class MovieItem extends HTMLElement {
  set movie(movie) {
    this.moviee = movie;
    this.render();
  }

  render() {
    this.setAttribute('class', 'col');
    this.innerHTML = `
    
      <div class="card" style="width: 16rem;">
        <img src="https://image.tmdb.org/t/p/w500${this.moviee.poster_path}" alt="image">
        <div class="card-text">
        <small class="genre">${this.moviee.genre_names[0]}</small>
          <div class="rate">
            <span>${this.moviee.vote_average}</span>
            <i class="fas fa-star"></i>
          </div>
          <div class="movie-title">
            <p>${this.moviee.title}</p>
          </div>
        </div>
        <button type="button" class="overlay" data-bs-toggle="modal" data-bs-target="#detailMovie">
          <span class="mt-1 me-1"><i class="fas fa-search"></i></span>
          <span>get detail</span>
        </button>

      </div>
    
    `;

    const movie = this.moviee;
    const modal = document.querySelector('modal-item');
    this.querySelector('.overlay').addEventListener('click', () => {
      modal.body = movie;
    });
  }
}

customElements.define('movie-item', MovieItem);
