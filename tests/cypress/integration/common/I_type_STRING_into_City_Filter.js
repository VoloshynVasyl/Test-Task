const { Given } = require("cypress-cucumber-preprocessor/steps");
const { HomePage } = require('../../pageObjects');

const homePage = new HomePage();
const filters = homePage.filters;

Given(/I type "(.*)" into City Filter/, (value) => {
    return filters.typeIntoCityFilter(value);
});
