// @ts-check
import * as Pages from '../pages/pageIndex'

Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self')
    })
})