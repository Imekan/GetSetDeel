/// <reference types = "Cypress"/>

describe('pom', () =>{

//General approach
it ('loginTest', () =>{
cy.visit ("https://opensource-demo.orangehrmlive.com/")
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
cy.get("button[type='submit']").click() //Locates the login button and click
cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
})


})