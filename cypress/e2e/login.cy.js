/// <reference types = "Cypress"/>

import Login from "../PageObjects/Loginpage.js"


describe('pom', () =>{
    const ln=new Login();  // conatant declaration for Login
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
    ln.setUserName(); // type the username
    ln.setPassword();
    ln.clickSubmit();
    ln.verifyLogin();

    })

})