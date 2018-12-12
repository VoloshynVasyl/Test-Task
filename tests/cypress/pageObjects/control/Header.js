class Header {
    /**
     * @param paramsObj.parentContainer
     * @param [paramsObj.containerLocator]
     * @param [paramsObj.logoLocator]
     * @param [paramsObj.titleLocator]
     */
    constructor(paramsObj) {
        this.parentContainer = paramsObj.parentContainer;
        this.containerLocator = paramsObj.containerLocator || '.App-header';
        this.logoLocator = paramsObj.logoLocator || '.App-logo';
        this.titleLocator = paramsObj.titleLocator || '.App-title';
    }

    get container(){
        // we call parent locators when it's needed and it give us ability
        // to chain child elements to parent
        return this.parentContainer().find(this.containerLocator);
    }

    get logo(){
        return this.container.find(this.logoLocator);
    }

    get title(){
        return this.container.find(this.titleLocator);
    }
}

module.exports = Header;
