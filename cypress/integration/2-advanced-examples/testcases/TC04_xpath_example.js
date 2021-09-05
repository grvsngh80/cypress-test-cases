/// <reference types="cypress" />
describe('Xpath Example',()=>{
    
    
    it('Verify Xpath',()=>{

        cy.log("Execution started")
        
       cy.visit('https://google.com/')

       cy.xpath("//input[@name='q']").type('Hello cypress!!!')
    })

})