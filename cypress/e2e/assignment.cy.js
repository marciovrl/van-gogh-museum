import loginPage from "../pages/collection"
import homePage from "../pages/home"

const paintingTitle = 'Het Gele Huis'

describe('Test automation assignment', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it(`Test case 1 - As a user I must navigate the collection page`, () => {
        homePage.goToCollectionPage()

        cy.url().should('include', '/collectie')
        cy.title().should('include', 'Collectie - Van Gogh Museum')
    })

    context('be on the collection page', () => {
        beforeEach(() => {
            homePage.goToCollectionPage()
        })

        it(`Test case 2 - As a user I must view the paintings as my search "${paintingTitle}"`, () => {
            loginPage.searchItem(paintingTitle)

            loginPage.elements.resultLabel().invoke('text').then(parseFloat).should('be.gt', 700)
        })

        it(`Test case 3 - As a user I must view details of the painting I selected`, () => {
            loginPage.searchItem(paintingTitle)
            loginPage.selectItemByOrderInList(1)

            loginPage.elements.detailsLabel()
                .within(() => {
                    loginPage.elements.detailsItemdt().eq(0).contains('F-nummer')
                    loginPage.elements.detailsItemdd().eq(0).contains('F0464')

                    loginPage.elements.detailsItemdt().eq(1).contains('JH-nummer')
                    loginPage.elements.detailsItemdd().eq(1).contains('JH1589')

                    loginPage.elements.detailsItemdt().eq(2).contains('Inventarisnummer')
                    loginPage.elements.detailsItemdd().eq(2).contains('s0032V1962')
                })
        })
    })
})
