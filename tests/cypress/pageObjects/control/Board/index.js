const Column = require('./Column');

class Board {
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
        this.containerLocator = paramsObj.containerLocator || '.App-container';
        this.cardLocator = paramsObj.containerLocator || '.CrewMember-container';
        this.appliedColumnLocator = paramsObj.nameFilterLocator || '[data-aut-id = \'applied-column\']';
        this.interviewingColumnLocator = paramsObj.cityFilterLocator || '[data-aut-id = \'interviewing-column\']';
        this.hiredColumnLocator = paramsObj.submitButtonLocator || '[data-aut-id = \'hired-column\']';

        this.container = () => this.parentContainerLocator().find(this.containerLocator);

        this._appliedColumn = new Column({ parentContainer: this.container, containerLocator: this.appliedColumnLocator });
        this._interviewingColumn = new Column({ parentContainer: this.container, containerLocator: this.interviewingColumnLocator });
        this._hiredColumn = new Column({ parentContainer: this.container, containerLocator: this.hiredColumnLocator });
    }

    get appliedColumn(){
        return this._appliedColumn;
    }

    get interviewingColumn(){
        return this._interviewingColumn;
    }

    get hiredColumn(){
        return this._hiredColumn;
    }

    get cardList() {
        return this.container().find(this.cardLocator)
    }
}

module.exports = Board;
