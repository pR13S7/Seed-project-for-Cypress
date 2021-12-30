// @ts-check
import * as Pages from '../pages/pageIndex'
import * as Selectors from '../pages/constants/selectors'

Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self')
    })
})

Cypress.Commands.add('pageHasVerticalScroll', ()=>{
    //===== wait for root container to be rendered before check height   
    cy.get(Selectors.rootContainer).should('exist').and('be.visible')

    cy.document().then(doc =>{        
        cy.window().then(win=>{
            expect(Cypress.$(doc).outerHeight()).to.equal(win.innerHeight)
        })
    })
})

Cypress.Commands.add('pressESC',  ()=>{
    cy.get('body').type('{esc}', { force: true }) 
})

Cypress.Commands.add('hover', { prevSubject: true  }, (subject)=>{    
    cy.wrap(subject).trigger('mouseover')
})
