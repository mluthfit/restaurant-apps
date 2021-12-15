const assert = require('assert');

Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.seeElement('.empty');
  I.see("You didn't favorite any restaurant yet", '.empty > span');
});

Scenario('favorit and unfavorite one restaurant', async ({ I }) => {
  I.see("You didn't favorite any restaurant yet", '.empty > span');
  I.amOnPage('/');

  // Favorite restaurant
  I.seeElement('resto-card a');
  const firstRestaurant = locate('resto-card a').first();
  const firstRestaurantTitle = await I.grabTextFrom(locate('resto-card h3.name').first());
  I.click(firstRestaurant);

  I.seeElement('.favorite-btn');
  I.click('.favorite-btn');

  I.amOnPage('/#/favorite');
  I.seeElement('resto-card');

  const favoritedRestaurantTitle = await I.grabTextFrom('resto-card h3.name');
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

  // Unfavorite restaurant
  I.click(firstRestaurant);
  I.seeElement('.favorite-btn');
  I.click('.favorite-btn');

  I.amOnPage('/#/favorite');
  I.seeElement('.empty');
  I.see("You didn't favorite any restaurant yet", '.empty > span');
});