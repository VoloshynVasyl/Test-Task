const Card = require('./Card');

class Column {
  /**
   * @param paramsObj.parentContainer
   * @param paramsObj.containerLocator
   * @param [paramsObj.titleLocator]
   * @param [paramsObj.cardLocator]
   */
  constructor(paramsObj) {
    this.parentContainer = paramsObj.parentContainer;
    this.containerLocator = paramsObj.containerLocator;
    this.titleLocator = paramsObj.titleLocator || 'h2';
    this.cardLocator = paramsObj.cardLocator || '.CrewMember-container';

    this.container = () => this.parentContainer()
      .find(this.containerLocator);
  }

  get title() {
    return this.container()
      .find(this.titleLocator);
  }

  getCard(id) {
    cy.log(`taking card with id: ${id}`);
    return new Card({
      parentContainer: this.container,
      containerLocator: this.getCardLocator(id),
    });
  }

  /**
   * @param id - starts from 1
   */
  getCardLocator(id) {
    return `${this.cardLocator}:nth-child(${id + 1})`;
  }

  get cardList() {
    return this.container()
      .find(this.cardLocator);
  }
}

module.exports = Column;
