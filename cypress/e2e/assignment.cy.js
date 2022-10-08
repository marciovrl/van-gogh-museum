const paintingTitle = 'Het Gele Huis'

describe('Test automation assignment', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it(`Test case 1 - As a user I must navigate the collection page`, () => {
        cy.goToCollectionPage()

        cy.url().should('include', '/collectie')
        cy.title().should('include', 'Collectie - Van Gogh Museum')
    })

    context('be on the collection page', () => {

        beforeEach(() => {
            cy.goToCollectionPage()
        })

        it(`Test case 2 - As a user I must view the paintings as my search "${paintingTitle}"`, () => {
            cy.filterPainting(paintingTitle)
            
            cy.get('.results').invoke('text').then(parseFloat).should('be.gt', 700)
        })

        it(`Test case 3 - As a user I must view details of the painting I selected`, () => {
            cy.filterPainting(paintingTitle)
            cy.selectItemByOrderInList(1) //select the first item

            cy.contains('F0464')
            cy.contains('JH1589')
            cy.contains('s0032V1962')
        })
    })
})
