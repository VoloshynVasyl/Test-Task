/* eslint-disable quotes,import/no-extraneous-dependencies,arrow-body-style */
const { When, Then } = require('cypress-cucumber-preprocessor/steps');
const { HomePage } = require('../../pageObjects');

const homePage = new HomePage();
const { board } = homePage;

When(`I see right button is absent for card in Hired column`, () => {
  return board.hiredColumn.getCard(1)
    .rightButton
    .should('have.length', 0);
});

When(`I see left button is absent for card in Applied column`, () => {
  return board.appliedColumn.getCard(1)
    .leftButton
    .should('have.length', 0);
});

Then(`I see photo for card in Hired column`, () => {
  return board.hiredColumn.getCard(1)
    .photo
    .should('be.visible');
});

Then(`I see name for card in Hired column`, () => {
  return board.hiredColumn.getCard(1)
    .name
    .should('be.visible');
});

Then(`I see city name for card in Hired column`, () => {
  return board.hiredColumn.getCard(1)
    .city
    .should('be.visible');
});
