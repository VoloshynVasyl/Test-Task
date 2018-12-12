const { Given } = require("cypress-cucumber-preprocessor/steps");
const { HomePage } = require('../../pageObjects');

const homePage = new HomePage();
const filters = homePage.filters;

Given(`I click on Submit button`, () => {
    return filters.clickSubmitButton();
});
