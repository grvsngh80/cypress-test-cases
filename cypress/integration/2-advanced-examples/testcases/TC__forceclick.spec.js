/// <reference types="cypress" />
describe('Check the Page Navigation',()=>{
    
    
    it('Verify Page Title',()=>{
        
       cy.visit('http://qa.way2automation.com')
       
       cy.get('#load_form > div:nth-child(12) > div.span_1_of_4 > input').click({multiple: true,force: true})
        

      })
      
   })