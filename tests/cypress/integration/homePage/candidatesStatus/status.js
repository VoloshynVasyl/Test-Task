const { When, Then } = require("cypress-cucumber-preprocessor/steps");
const { HomePage } = require('../../../pageObjects');

const homePage = new HomePage();
const board = homePage.board;

When(`I click on left button of candidate in Hired column`, () =>{
    return board.hiredColumn.getCard(1).clickLeftButton();
});

When(`I click on right button of candidate in Applied column`, () =>{
    return board.appliedColumn.getCard(1).clickRightButton();
});

Then(`I don't see this candidate in Hired column`, () => {
    return board.hiredColumn.cardList.should("have.length", 0);
});

Then(`I don't see this candidate in Applied column`, () => {
    return board.appliedColumn.cardList.should("have.length", 0);
});

Then(`I see this candidate in Interviewing column`, () => {
    return board.interviewingColumn.cardList.should("have.length", 1);
});
