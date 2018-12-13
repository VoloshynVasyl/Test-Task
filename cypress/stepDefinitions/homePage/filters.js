/* eslint-disable quotes,import/no-extraneous-dependencies,arrow-body-style */
const { When, Then } = require('cypress-cucumber-preprocessor/steps');
const { HomePage } = require('../../pageObjects');

const homePage = new HomePage();
const { filters, board } = homePage;

When(/I type "(.*)" into Name Filter/, (value) => {
  return filters.typeIntoNameFilter(value);
});

When(/I type "(.*)" into City Filter/, (value) => {
  return filters.typeIntoCityFilter(value);
});

When(`I click on Submit button`, () => {
  return filters.clickSubmitButton();
});

When(`I click on Clear button`, () => {
  return filters.clickClearButton();
});

// TODO we should mock API response or avoid using of hardcoded
//  values such a 1, 0 or 5 in real project
Then(`I see only one person on the board`, () => {
  return board.cardList.should('have.length', 1);
});

Then(`I don't see anybody on the board`, () => {
  return board.cardList.should('have.length', 0);
});

Then(`I see everybody on the board`, () => {
  return board.cardList.should('have.length', 5);
});
