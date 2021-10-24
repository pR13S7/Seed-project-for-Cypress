/// <reference types="cypress" />
/**
** Describe commands here for intellisence 
**/


declare namespace Cypress {
    interface Chainable<Subject> {
		/**
        * force visit another domain
        * @example
        * cy.forceVisit(url)
        */
        forceVisit(url: string): Chainable<any>       
    }
}