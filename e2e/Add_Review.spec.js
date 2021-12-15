Feature('Add Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing empty favorited restaurants', async ({ I }) => {
  I.seeElement('resto-card a');
  const firstRestaurant = locate('resto-card a').first();
  const firstRestaurantTitle = await I.grabTextFrom(locate('resto-card h3.name').first());
  I.click(firstRestaurant);

  I.seeElement('.add-review');
  I.fillField('.inputs #name', 'e2e');
  I.fillField('.inputs #review-message', 'Testing for e2e');
  I.click('.add-review button');

  I.see('e2e', '.review-box .name')
});