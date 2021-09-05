/// <reference types="cypress" />
describe('Check the Page Navigation',()=>{
    
    
    it('Verify Element visibility and attribute values',()=>{
        
       cy.visit('http://qa.way2automation.com')
       cy.url().should('include','/index.php')
       cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible').type('Gaurav')


       cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible').invoke('attr','type').should('contain','text')

      })
    })

   it.only('Verify Parent,Child and Within Elements',()=>{
        
    cy.visit('http://qa.way2automation.com')
    cy.url().should('include','/index.php')
    cy.get('#load_box').find('input').invoke('attr','type').should('not.have','hidden').its('length').then((elelength)=>{
    
        cy.log(elelength)
    })
    
    cy.get('#load_box > form > fieldset').children('input').should('not.have','hidden').its('length').then((elelength)=>{
    
        cy.log(elelength)
    })

    })  
