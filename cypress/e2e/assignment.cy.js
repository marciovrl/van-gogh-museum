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
            cy.intercept('GET', '/collectie*').as('searchCollection')
            cy.filterPainting(paintingTitle)

            cy.wait('@searchCollection').then(({ response }) => {
                expect(response.statusCode).to.eql(200)
                expect(response.body.totalResults).to.greaterThan(700)
              })

            cy.get('.results').invoke('text').then(parseFloat).should('be.gt', 700)
        })

        it(`Test case 3 - As a user I must view details of the painting I selected`, () => {
            cy.filterPainting(paintingTitle)
            cy.selectItemByOrderInList(1) //select the first item

            cy.get('.definition-list-item')
                .within(() => {
                    cy.get('dt').eq(0).contains('F-nummer')
                    cy.get('dd').eq(0).contains('F0464')

                    cy.get('dt').eq(1).contains('JH-nummer')
                    cy.get('dd').eq(1).contains('JH1589')

                    cy.get('dt').eq(2).contains('Inventarisnummer')
                    cy.get('dd').eq(2).contains('s0032V1962')
                })
        })
    })
})
