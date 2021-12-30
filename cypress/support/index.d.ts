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
		
		/**
        * press ESC button on keyboard
        * @example
        * cy.pressESC()
        */
        pressESC(): Chainable<any> 
        
        /**
        * trigger mouse over event for element
        * @example
        * cy.hover()
        */
        hover(): Chainable<any>   
		
		/**
        * is page has a vertical scroll
        * @example
        * cy.pageHasVerticalScroll()
        */
        pageHasVerticalScroll(): Chainable<any> 
    }	
}