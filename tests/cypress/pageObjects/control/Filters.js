class Filters {
    /**
     * @param paramsObj.parentContainer
     * @param [paramsObj.containerLocator]
     * @param [paramsObj.nameFilterLocator]
     * @param [paramsObj.cityFilterLocator]
     * @param [paramsObj.submitButtonLocator]
     * @param [paramsObj.clearButtonLocator]
     */
    constructor(paramsObj) {
        this.parentContainerLocator = paramsObj.parentContainer;
        this.containerLocator = paramsObj.containerLocator || '#filters';
        this.nameFilterLocator = paramsObj.nameFilterLocator || '#name';
        this.cityFilterLocator = paramsObj.cityFilterLocator || '#city';
        this.submitButtonLocator = paramsObj.submitButtonLocator || '[data-aut-id = \'submit-button\']';
        this.clearButtonLocator = paramsObj.clearButtonLocator || '[data-aut-id = \'clear-button\']';
    }

    get container(){
        return this.parentContainerLocator().find(this.containerLocator);
    }

    get nameFilter(){
        return this.container.find(this.nameFilterLocator);
    }

    get cityFilter(){
        return this.container.find(this.cityFilterLocator);
    }

    get submitButton(){
        return this.container.find(this.submitButtonLocator);
    }

    get clearButton(){
        return this.container.find(this.clearButtonLocator);
    }

    typeIntoNameFilter(value) {
        cy.log(`type into Name Filter: ${value}`);
        return this.nameFilter.type(value);
    }

    typeIntoCityFilter(value) {
        cy.log(`type into City Filter: ${value}`);
        return this.cityFilter.type(value);
    }

    clickSubmitButton(){
        cy.log('click on Submit button');
        return this.submitButton.click();
    }

    clickClearButton(){
        cy.log('click on Clear button');
        return this.clearButton.click();
    }
}

module.exports = Filters;
