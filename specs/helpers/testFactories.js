import FavoriteInitiator from '../../src/scripts/utils/favorite-initiator';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteInitiator.init({
    favoriteContainer: document.querySelector('.favorite'),
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
