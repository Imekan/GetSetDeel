/// <reference types = "Cypress"/>

import Login from "../PageObjects/Loginpage.js"


describe('pom', () =>{

//General approach
it ('loginTest', () =>{
cy.visit ("https://opensource-demo.orangehrmlive.com/")
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
cy.get("input[placeholder='Password']").type("admin123")
cy.get("button[type='submit']").click() //Locates the login button and click
cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
})

//using Page object Model
it.only ('loginTest', () =>{
    cy.visit ("https://opensource-demo.orangehrmlive.com/") // Visits the URL

    const ln=new Login();
    ln.setUserName("Admin")
    ln.setPassword("admin123")
    ln.clickSubmit();
    ln.verifyLogin();

    })

})