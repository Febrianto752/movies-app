class ModalItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set body(movieDetail) {
    this.bodyy = movieDetail;
    this.render();
  }

  render() {
    this.setAttribute('class', 'modal fade');
    this.setAttribute('id', 'detailMovie');
    this.setAttribute('tabindex', '-1');
    this.setAttribute('aria-hidden', 'true');
    this.setAttribute('aria-labelledby', 'detailMovieLabel');
    this.innerHTML = `
    
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detailMovieLabel">Movie Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            
          </div>
        </div>
      </div>
    
    `;

    if (this.bodyy) {
      this.querySelector('.modal-body').innerHTML = `
      <div class="row">
        <div class="col">
          <img src="https://image.tmdb.org/t/p/w500${this.bodyy.poster_path}" alt="movieDetailImage" style="width: 100%; height: 360px">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table class="table mt-4">
            <tr>
              <td>
                <h5>Title</h5>
              </td>
              <td>:</td>
              <td>${this.bodyy.title}</td>
            </tr>
            <tr>
              <td>
                <h5>Genre</h4>
              </td>
              <td>:</td>
              <td>${this.bodyy.genre_names.join(', ')}</td>
            </tr>
            <tr>
              <td>
                <h5>Release Date</h4>
              </td>
              <td>:</td>
              <td>${this.bodyy.release_date}</td>
            </tr>
            <tr>
              <td>
                <h5>Rate</h5>
              </td>
              <td>:</td>
              <td>${this.bodyy.vote_average} <i class="fa fa-star" aria-hidden="true"></i></td>
            </tr>
            <tr>
              <td>
                <h5>Description</h5>
              </td>
              <td>:</td>
              <td>${this.bodyy.overview}</td>
            </tr>
          </table>
        </div>
      </div>
      `;
    }
  }
}

customElements.define('modal-item', ModalItem);
