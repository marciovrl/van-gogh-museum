// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * This command works to go to Collection page.
 */
 Cypress.Commands.add('goToCollectionPage', () => {
    cy.contains('Ontdek de collectie').trigger('mouseover').click()
  })
  
/**
 * This command works to filter collection by tittle painting.
 * @param {String} paintingTitle - The title of the painting you are looking for.
 */
 Cypress.Commands.add('filterPainting', (paintingTitle) => {
    cy.get('.search-field-input').type(paintingTitle)
    cy.get('.search-field-search-button').click()
  })

  /**
 * This command works to select an item in the list, 
 * for example if you want to select the first one in the list, 
 * please enter the number 1
 * @param {Intenger} orderInList - Order in which the item is displayed in the listing.
 */
 Cypress.Commands.add('selectItemByOrderInList', (orderInList) => {
    cy.get('.collection-art-object-list-item').eq(orderInList-1).click()
    cy.get('.accordion-item-button > button').first().click()
  })
  