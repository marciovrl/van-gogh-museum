const paintingTitle = 'Het Gele Huis'

describe('Test automation assignment', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('GET', '/collectie/search').as('search')
  })

  it(`Test case 1 - As a user I must navigate the collection page`, () => {
    cy.contains('Ontdek de collectie').click()

    cy.url().should('include', '/collectie')
    cy.title().should('include', 'Collectie - Van Gogh Museum')
  })

  context('be on the collection page', () => {

    beforeEach(() => {
      cy.contains('Ontdek de collectie').click()
    })

    it(`Test case 2 - As a user I must view the paintings as my search "${paintingTitle}"`, () => {
      cy.get('.search-field-input').type(paintingTitle)
      cy.get('.search-field-search-button').click()

      cy.get('.results').invoke('text').then(parseFloat).should('be.gt', 700)
    })

    it(`Test case 3 - As a user I must view details of the painting I selected`, () => {
      cy.get('.search-field-input').type(paintingTitle)
      cy.get('.search-field-search-button').click()
      cy.get('.collection-art-object-list-item').first().click()
      cy.get('.accordion-item-button > button').first().click()

      cy.contains('F0464')
      cy.contains('JH1589')
      cy.contains('s0032V1962')
    })
  })
})
