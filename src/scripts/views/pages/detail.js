import { createRestaurantItem, createReviewItem } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import RestaurantsAPISource from '../../data/restaurants-api-source';
import FavoriteInitiator from '../../utils/favorite-initiator';
import AddReview from '../../utils/add-review';

const Detail = {
  async render() {
    return `
    <div class="restaurant"></div>
    <div class="favorite"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsAPISource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.restaurant');
    restaurantContainer.innerHTML = createRestaurantItem(restaurant);
    this._renderFoods(restaurant.menus.foods);
    this._renderDrinks(restaurant.menus.drinks);
    this._renderReviews(restaurant.customerReviews);

    FavoriteInitiator.init({
      favoriteContainer: document.querySelector('.favorite'),
      restaurant,
    });

    AddReview.init({
      reviewsContainer: document.querySelector('.reviews-list'),
      addReviewButton: document.querySelector('.add-review-button'),
      data: {
        id: restaurant.id,
        nameInput: document.querySelector('input#name'),
        reviewInput: document.querySelector('#review-message'),
      },
    });
  },

  async _renderFoods(foods) {
    const foodsContainer = document.querySelector('ul.foods-list');
    foods.forEach((food) => {
      foodsContainer.innerHTML += `<li>${food.name}</li>`;
    });
  },

  async _renderDrinks(drinks) {
    const drinksContainer = document.querySelector('ul.drinks-list');
    drinks.forEach((drink) => {
      drinksContainer.innerHTML += `<li>${drink.name}</li>`;
    });
  },

  async _renderReviews(reviews) {
    const reviewsContainer = document.querySelector('.reviews-list');
    reviews.forEach((review) => {
      reviewsContainer.innerHTML += createReviewItem(review);
    });
  },
};

export default Detail;
