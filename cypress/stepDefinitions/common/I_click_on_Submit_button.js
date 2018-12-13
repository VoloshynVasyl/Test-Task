/* eslint-disable quotes,import/no-extraneous-dependencies,arrow-body-style */
const { Given } = require('cypress-cucumber-preprocessor/steps');
const { HomePage } = require('../../pageObjects');

const homePage = new HomePage();
const { filters } = homePage;

Given(`I click on Submit button`, () => {
  return filters.clickSubmitButton();
});
