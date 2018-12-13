class Card {
  /**
   * @param paramsObj.parentContainer
   * @param paramsObj.containerLocator
   * @param [paramsObj.infoLocator]
   * @param [paramsObj.photoLocator]
   * @param [paramsObj.nameFieldLocator]
   * @param [paramsObj.nameLocator]
   * @param [paramsObj.cityLocator]
   * @param [paramsObj.toolbarLocator]
   * @param [paramsObj.leftButtonLocator]
   * @param [paramsObj.rightButtonLocator]
   */
  constructor(paramsObj) {
    this.parentContainer = paramsObj.parentContainer;
    this.containerLocator = paramsObj.containerLocator;
    this.infoLocator = paramsObj.infoLocator || '.CrewMember-info';
    this.photoLocator = paramsObj.photoLocator || '.CrewMemeber-photo';
    this.nameFieldLocator = paramsObj.nameFieldLocator || '.CrewMemeber-name';
    this.nameLocator = paramsObj.nameLocator || 'div:first-child';
    this.cityLocator = paramsObj.cityLocator || 'div:last-child';
    this.toolbarLocator = paramsObj.toolbarLocator || '.CrewMember-toolbar';
    this.leftButtonLocator = paramsObj.leftButtonLocator || '[data-aut-id = \'down-button\']';
    this.rightButtonLocator = paramsObj.rightButtonLocator || '[data-aut-id = \'up-button\']';

    this.container = () => this.parentContainer()
      .find(this.containerLocator);
  }

  get info() {
    return this.container()
      .find(this.infoLocator);
  }

  get photo() {
    return this.info.find(this.photoLocator);
  }

  get nameField() {
    return this.info.find(this.nameFieldLocator);
  }

  get name() {
    return this.nameField.find(this.nameLocator);
  }

  get city() {
    return this.nameField.find(this.cityLocator);
  }

  get toolbar() {
    return this.container()
      .find(this.toolbarLocator);
  }

  get leftButton() {
    return this.toolbar.find(this.leftButtonLocator);
  }

  get rightButton() {
    return this.toolbar.find(this.rightButtonLocator);
  }

  clickLeftButton() {
    cy.log('click on Left/Down button');
    return this.leftButton.click();
  }

  clickRightButton() {
    cy.log('click on Right/Up button');
    return this.rightButton.click();
  }
}

module.exports = Card;
