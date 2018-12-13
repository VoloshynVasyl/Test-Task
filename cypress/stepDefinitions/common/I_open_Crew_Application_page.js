/* eslint-disable quotes,import/no-extraneous-dependencies,arrow-body-style */
const { Given } = require('cypress-cucumber-preprocessor/steps');
const { HomePage } = require('../../pageObjects');

const homePage = new HomePage();

Given(`I open Crew Application page`, () => {
  return homePage.visit();
});
