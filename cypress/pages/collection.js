class collectionPage {
    elements = {
        searchInput: () => cy.get('.search-field-input'),
        searchButton: () => cy.get('.search-field-search-button'),
        itemList: () => cy.get('.collection-art-object-list-item'),
        detailsButton: () => cy.get('.accordion-item-button > button'),
        resultLabel: () => cy.get('.results'),
        detailsLabel: () => cy.get('.definition-list-item'),
        detailsItemdt: () => cy.get('dt'),
        detailsItemdd: () => cy.get('dd')
    }

    searchItem(paintingTitle) {
        this.elements.searchInput().type(paintingTitle)
        this.elements.searchButton().click()
    }

    selectItemByOrderInList(orderInList) {
        this.elements.itemList().eq(orderInList - 1).click()
        this.elements.detailsButton().first().click()
    }
}

module.exports = new collectionPage();
