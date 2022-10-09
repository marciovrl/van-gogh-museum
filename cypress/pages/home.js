class homePage {
    elements = {
        collectionPageLink: () => cy.contains('Ontdek de collectie'),
    }

    goToCollectionPage() {
        this.elements.collectionPageLink().trigger('mouseover').click()
    }
}

module.exports = new homePage();
