class BannerApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set items(items) {
    this.itemss = items;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="banner" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
      
    </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`;

    if (this.itemss) {
      const carouselInner = this.querySelector('.carousel-inner');
      carouselInner.innerHTML = '';
      this.itemss.forEach((item, i) => {
        let genreElement = '';
        item.genre_names.forEach((name) => {
          genreElement += `<small class="genre">${name}</small>`;
        });
        carouselInner.innerHTML += `
        <div class="carousel-item ${(i === 0) ? 'active' : ''}">
          <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="d-block w-100" alt="gambar">
          <div class="carousel-caption d-none d-md-block text-start">
            <div class="caption-text">
              ${genreElement}
              <div class="rate">
                <span>${item.vote_average}</span>
                <i class="fas fa-star"></i>
              </div>
              <h2 class="movie-title">${item.title}</h2>
              <p class="description">${item.overview.substr(0, 240)}...</p>
              <button class="btn-watch">Watch Now</button>
            </div>

          </div>
        </div>
        `;
      });
    }
  }
}

customElements.define('banner-app', BannerApp);
