import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createLikeButton, createLikedButton } from '../views/templates/template-creator';

const FavoriteInitiator = {
  async init({ favoriteContainer, restaurant }) {
    this._favoriteContainer = favoriteContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  async _renderLiked() {
    this._favoriteContainer.innerHTML = createLikedButton();

    const favoriteButton = document.querySelector('#favorite-btn');
    favoriteButton.addEventListener('click', async (event) => {
      event.stopPropagation();
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },

  async _renderLike() {
    this._favoriteContainer.innerHTML = createLikeButton();

    const favoriteButton = document.querySelector('#favorite-btn');
    favoriteButton.addEventListener('click', async (event) => {
      event.stopPropagation();
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },
};

export default FavoriteInitiator;
