import RestaurantsAPISource from '../../data/restaurants-api-source';
import '../components/resto-card';
import '../components/food-card';
import foods from '../../data/foods-source';

const Home = {
  async render() {
    return `
      <div class="foods">
        <h2 class="align-center">Frequently Ordered Menu</h2>
        <div class="cards dflex">
            
        </div>
      </div>
      <div class="restaurants">
        <h2 class="align-center">Explore Restaurant</h2>
        <div class="dflex cards">
        
        </div>
      </div>
    `;
  },

  async afterRender() {
    this._foodsRender();
    this._restaurantsRender();
  },

  async _foodsRender() {
    const foodsContainer = document.querySelector('.foods > .cards');
    foods.forEach((food) => {
      const container = document.createElement('food-card');
      container.items = food;
      foodsContainer.append(container);
    });
  },

  async _restaurantsRender() {
    const restaurantsContainer = document.querySelector('.restaurants > .cards');
    const restaurants = await RestaurantsAPISource.listRestaurants();
    restaurants.forEach((restaurant) => {
      const container = document.createElement('resto-card');
      container.items = restaurant;
      restaurantsContainer.append(container);
    });
  },
};

export default Home;
