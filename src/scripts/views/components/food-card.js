class FoodCard extends HTMLElement {
  set items(data) {
    this._data = data;
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="skeleton">
        <img src="${this._data.urlImage}" alt="${this._data.name} food">
      </div>
      <section class="card-info">
          <h3>${this._data.name}</h3>
          <div></div>
      </section>
    `;

    const ratingContainer = this.querySelector('.card-info > div');
    for (let count = 0; count < this._data.rating; count += 1) {
      ratingContainer.innerHTML += '<i class="fas fa-star"></i>';
    }
  }
}

customElements.define('food-card', FoodCard);
