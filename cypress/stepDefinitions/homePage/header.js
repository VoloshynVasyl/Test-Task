/* eslint-disable quotes,import/no-extraneous-dependencies,arrow-body-style */
const { Then } = require('cypress-cucumber-preprocessor/steps');
const { HomePage } = require('../../pageObjects');

const homePage = new HomePage();
const { header } = homePage;

Then(`I see logo`, () => {
  return header.logo.should('be.visible');
});

Then(`I see title`, () => {
  return header.title.should('be.visible');
});
