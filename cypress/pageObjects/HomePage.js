const { Header, Filters, Board } = require('./control');

class HomePage {
  constructor() {
    this.rootElement = () => cy.get('#root');
    this.pageUrl = '/';
    // if we put parentContainer as a function we will be able to  call it when it's needed
    // and chain child elements to parent
    // it's give us ability to write shorter locators
    this._header = new Header({ parentContainer: this.rootElement });
    this._filters = new Filters({ parentContainer: this.rootElement });
    this._board = new Board({ parentContainer: this.rootElement });
  }

  get header() {
    return this._header;
  }

  get filters() {
    return this._filters;
  }

  get board() {
    return this._board;
  }

  visit() {
    return cy.log('navigating to Home Page...')
      .visit(this.pageUrl);
  }
}

module.exports = HomePage;
